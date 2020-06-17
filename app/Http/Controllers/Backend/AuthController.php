<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Carbon\Carbon;
use App\Models\Admin;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Str;

class AuthController extends Controller
{
    public function index(){
        return view('backend.auth.login');
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
           $this->setSuccess( 'User Login success Fully' );
           return redirect('/dashboard');
        }

        $this->setError('Email or Password Does not match');
        return redirect()->back();
    }


    public function logout(){
         auth()->logout();
         return redirect('/backend');
    }
}
