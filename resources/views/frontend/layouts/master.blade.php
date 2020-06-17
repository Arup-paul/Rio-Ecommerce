<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>{{config('app.name')}}</title>
    <link rel="stylesheet" href="{{mix('css/app.css')}}">
    <link rel="stylesheet" href="{{mix('css/custom.css')}}">

    @yield('before_head')


    </head>
    <body>

      @include('frontend.partials._header')

          <main role="main">

            @yield('main')


          </main>

     @include('frontend.partials._footer')




        <script src="{{mix('js/all.js')}}"></script>
        <script src="{{mix('js/app.js')}}"></script>
        @yield('before_body')

    </body>
</html>
