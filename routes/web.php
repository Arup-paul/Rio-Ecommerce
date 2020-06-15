<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::group(['namespace' => 'Frontend'], function () {
    Route::get('/', 'HomeController@showHomePage')->name('frontend.home');

    Route::get('/product/{slug}', 'ProductController@showDetails')->name('frontend.product.details');

    Route::get('/cart', 'CartController@showCart')->name('cart.show');
    Route::post('/cart', 'CartController@addToCart')->name('cart.add');
    Route::post('/cart/remove', 'CartController@removeToCart')->name('cart.remove');
    Route::get('/cart/clear', 'CartController@clearToCart')->name('cart.clear');
    Route::get('/checkout', 'CartController@checkout')->name('checkout');


    Route::get('/userLogin','AuthController@showLoginFrom')->name('userLogin');
    Route::post('/userLogin','AuthController@processLogin')->name('processLogin');

     Route::get('/userRegistration','AuthController@showRegistrationFrom')->name('userRegistration');
    Route::post('/processRegistration','AuthController@processRegistration')->name('processRegistration');
    
    Route::get('/activated/{token}','AuthController@Active')->name('active');

    Route::group(['middleware' => 'auth'],function(){
        Route::get( '/profile', 'AuthController@profile' )->name( 'profile' );
        Route::get( '/logout', 'AuthController@logout' )->name( 'logout' );
    });
    
});


//Auth::routes();

//Route::get('/home', 'HomeController@index')->name('home');
