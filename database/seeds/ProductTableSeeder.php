<?php

use Illuminate\Database\Seeder;
use App\Models\Product;


class ProductTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {


        factory(Product::class,2)->create();

        $products = Product::select('id')->get();

        foreach($products as $product){
            $product->addMediaFromUrl("https://www.bitdegree.org/tutorials/wp-content/uploads/2018/08/what-is-a-web-developer.jpg")
            ->toMediaCollection('products');
        }
    }
}
