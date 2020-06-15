@extends('frontend.layouts.master')


@section('main')

<div class="container">
    <br>
    <p class="text-center">Login</p>
    <hr>

    @include('frontend.partials._message')

<form action="{{route('processLogin')}}" method="post" class="form">
    @csrf

   

     <div class="form-group">
         <label for="id2">Email</label>
         <input type="email" name="email" value="{{old('email')}}" id="id2" required class="form-control" placeholder="Enter Email">
    </div>

  


     <div class="form-group">
         <label for="id5">Password</label>
         <input type="password" name="password" id="id5" required class="form-control" placeholder=" Password">
    </div>


     <div class="form-group">
        <button type="submit" class="btn btn-success btn-block">Login</button>
    </div>



</form>

</div>



@endsection
