<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    //

    public function categoryProduct($id){
        $data             = [];
        $data['products'] = Product::select( ['id', 'title', 'slug', 'price', 'sale_price'] )
        ->where( 'status', 1 )
        ->where('category_id',$id)
        ->paginate( 9 );

        return view('frontend.products.categoryProduct',$data);
    }
}
