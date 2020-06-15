@extends('frontend.layouts.master')


@section('main')

<div class="container">
    <br>
    <p class="text-center">Register</p>
    <hr>

    @include('frontend.partials._message')

<form action="{{route('processRegistration')}}" method="post" class="form">
    @csrf

    <div class="form-group">
         <label for="id1">Full Name</label>
    <input type="text" name="name" id="id1" value="{{old('name')}}" required class="form-control" placeholder="Enter Full Name">
    </div>

     <div class="form-group">
         <label for="id2">Email</label>
         <input type="email" name="email" value="{{old('email')}}" id="id2" required class="form-control" placeholder="Enter Email">
    </div>

     <div class="form-group">
         <label for="id3">Phone Number</label>
         <input type="text" name="phone_number" value="{{old('phone_number')}}" id="id3" required class="form-control" placeholder="Enter Phone Number">
    </div>


     <div class="form-group">
         <label for="id5">Password</label>
         <input type="password" name="password" id="id5" required class="form-control" placeholder=" Password">
    </div>

     <div class="form-group">
         <label for="id6">Confirm Password</label>
         <input type="password" name="password_confirmation" id="id6" required class="form-control" placeholder="Confirm Password">
    </div>


     <div class="form-group">
        <button type="submit" class="btn btn-success btn-block">Register</button>
    </div>



</form>

</div>



@endsection
