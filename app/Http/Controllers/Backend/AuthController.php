<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller {
    public function index() {
        return view( 'backend.auth.login' );
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

        if ( auth()->attempt( $credentials ) ) {

            if ( auth()->user()->admin == 0 ) {
                $this->setError( 'Account Does not match' );
                return redirect()->back();
            }
            $this->setSuccess( ' Login success Fully' );
            return redirect()->route( 'backend' );
        }
        $this->setError( 'Email or Password Does not match' );
        return redirect()->back();
    }

    public function logout() {
        auth()->logout();
        return redirect( '/backend' );
    }
}
