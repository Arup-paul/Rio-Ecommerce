<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Models\Category;
use Schema;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot(): void
    {
        if(Schema::hasTable('categories')){
           $categories = Category::select(['id','name','slug'])->where('category_id',NULL)->get();
           view()->share('categories',$categories);
        }

    }
}
