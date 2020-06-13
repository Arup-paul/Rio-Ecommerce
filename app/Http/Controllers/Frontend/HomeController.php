<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;

class HomeController extends Controller
{
    public function showHomePage(){
        $data = [];
        $data['products'] = Product::select(['id','title','slug','price','sale_price'])
        ->where('status',1)
        ->paginate(9);

        return view('Frontend.home',$data);
    }
}
