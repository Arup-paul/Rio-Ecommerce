<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Notifications\RegistrationEmailNotification;
use App\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Str;

class AuthController extends Controller {


    public function showLoginFrom() {
        return view( 'frontend.auth.login' );
    }

    public function processLogin() {
        $validator = Validator::make( request()->all(), [
            'email' => 'required|email',
            'password' => 'required',
        ] );

        if ( $validator->fails() ) {
            return redirect()->back()->withErrors( $validator )->withInput();
        }

         $credentials = request()->except( ['_token'] );
             
        if(auth()->attempt($credentials)){
             
            if(auth()->user()->email_verified_at == null){
               $this->setError( 'Your account is not active' );
                return redirect()->route('userLogin');
            }
           $this->setSuccess( 'User Login success Fully' );
           return redirect('/');
        }  
         
        $this->setError('Email or Password Does not match');
        return redirect()->back();
    }

   

    public function showRegistrationFrom() {
        return view( 'frontend.auth.register' );
    }

    public function processRegistration( Request $request ) {
        $validator = Validator::make( request()->all(), [
            'name' => 'required',
            'email' => 'required|email|unique:users,email',
            'phone_number' => 'required|min:11|numeric|unique:users,phone_number',
            'password' => 'required|min:6|confirmed',
        ] );

        if ( $validator->fails() ) {
            return redirect()->back()->withErrors( $validator )->withInput();
        }

        try {
            $user = User::create( [
                'name' => request()->input( 'name' ),
                'email' => strtolower( request()->input( 'email' ) ),
                'phone_number' => request()->input( 'phone_number' ),
                'password' => bcrypt( request()->input( 'password' ) ),
                'email_verification_token' => uniqid( time() . request()->input( 'email' ) . Str::random( 16 ) ),
            ] );
           
            $user->notify( new RegistrationEmailNotification( $user ) );

            $this->setSuccess( 'Account Registered' );

            return redirect()->route( 'userLogin' );

        } catch ( \Exception $e ) {
            $this->setSuccess( $e->getMessage() );

            return redirect()->back();
        }

    }

    public function Active( $token = null ) {
        if ( $token == null ) {
            return redirect( '/' );
        }

        $user = user::where( 'email_verification_token', $token )->firstOrFail();

        if ( $user ) {
            $user->update( [
                'email_verified_at' => Carbon::now(),
                'email_verification_token' => null,
            ] );

            $this->setSuccess( 'Account Activated. You can login now' );
            return redirect()->route( 'userLogin' );
        }

        $this->setError( 'Invalid Token' );
        return redirect()->route( 'userLogin' );
    }

    public function logout(){
         auth()->logout();
         return redirect('/');
    }
}
