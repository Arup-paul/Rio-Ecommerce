<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class Product extends Model implements HasMedia
{
    //
    use InteractsWithMedia;

    protected $guarded = [];

     /**
     * The "booting" method of the model.
     *
     * @return void
     */
    protected static function boot()
    {
        parent::boot();

        static::creating(function($product){
             $product->slug = Str::slug($product->title);
        });
    }


    public function category():\Illuminate\Database\Eloquent\Relations\HasOne
   {
       return $this->hasOne(Category::class);
    }

}
