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


        factory(Product::class,10)->create();

        $products = Product::select('id')->get();

        foreach($products as $product){
            $product->addMediaFromUrl("https://unsplash.com/photos/m_HRfLhgABo")
            ->toMediaCollection('products');
        }
    }
}
