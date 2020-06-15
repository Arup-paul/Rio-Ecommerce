<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\Order;
use Illuminate\Http\Request;

class ProfileController extends Controller
{
    //

    public function profile(){
        $data = [];
        $data['orders'] = Order::where('user_id',auth() ->user()->id)->get();
         return view('frontend.auth.profile',$data);
    }

    public function orderDetails($id){
        $data = [];
        $data['order'] = Order::with('products','products.product')
        ->findOrFail($id);

        return view('frontend.orders.details',$data);
    }
}
