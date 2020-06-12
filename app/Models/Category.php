<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    //
    protected $guarded = [];

    public function parent_category():\Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        return $this->belongsTo(__CLASS__);
    }

    public function child_category():\Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(__CLASS__);
    }

    public function product(){
        return $this->hasMany(Product::class);
    }

}
