const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.sass('resources/sass/app.scss', 'public/css/app.css')
     .styles([
         'resources/css/custom.css',
     ],'public/css/custom.css')
     .styles([
         'resources/css/_all-skins.min.css',
         'resources/css/AdminLTE.min.css',
         'resources/css/bootstrap3-wysihtml5.min.css',
         'resources/css/bootstrap-datepicker.min.css',
         'resources/css/daterangepicker.css',
         'resources/css/jquery-jvectormap.css',
         'resources/css/morris.css',
     ], 'public/css/admin/custom.css')
    .js([
         'resources/js/app.js',
     ], 'public/js/app.js')
     .js([

         'resources/js/custom.js',
     ], 'public/js/all.js')
    .js([

        'resources/js/admin/adminlte.min.js',
        'resources/js/admin/bootstrap-datepicker.min.js',
        'resources/js/admin/fastclick.js',
        'resources/js/admin/jquery-jvectormap.js',
        'resources/js/admin/jquery-jvectormap1.js',
        'resources/js/admin/jquery.knob.min.js',
        'resources/js/admin/jquery.slimscroll.min.js',
        'resources/js/admin/jquery.sparkline.min.js',
        'resources/js/admin/morris.min.js',
        'resources/js/admin/raphael.min.js',
    ], 'public/js/admin/all.js')



     .version();
