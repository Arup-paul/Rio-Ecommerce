<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\Category;
use Faker\Generator as Faker;

$factory->define(Category::class, function (Faker $faker) {
    return [
        'name' => $faker->city.' ' .(random_int(1,10)),
        'banner'=> $faker->imageUrl(),

    ];
});
