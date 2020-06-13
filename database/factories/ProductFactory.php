<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\Product;
use App\Models\Category;
use Faker\Generator as Faker;

$factory->define(Product::class, function (Faker $faker) {
    return [
        'category_id' => Category::all()->random()->id,
        'title' => $faker->text(25),
        'description' => $faker->realText(),
        'price' => random_int(100,1000),
        'sale_price' => random_int(0,1000),
    ];
});
