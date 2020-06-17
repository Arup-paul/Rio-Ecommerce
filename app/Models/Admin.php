<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Admin extends Model
{
     protected $guarded = [
        'remember_token'
    ];

      protected $hidden = [
        'password', 'remember_token',
    ];
}
