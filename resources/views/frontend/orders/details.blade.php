@extends('frontend.layouts.master')

@section('main')

   <div class="container">

       <br>
        @if (session()->has('message'))

   <div class="alert alert-success">
           {{session('message')}}
       </div>

       @endif

       <p class="text-center">Order Details</p>
       <hr>
   </div>

   <div class="container">


     <ul class="list-group">
         @foreach($order->toArray() as $column => $value)
         @if(is_string($value))
         @if($column == 'user_id')
         @continue
         @endif
         <li class=" list-group-item">
             {{ucwords(str_replace('_',' ',$column))}}: {{$value}}
         </li>
         @endif
         @endforeach


     </ul>

      <h3>Order Products</h3>
      <table class="table table-bordered table-hover">
          <thead>
              <tr>
                  <th>Product Title</th>
                  <th>Quantity</th>
                  <th>Total Price</th>
              </tr>
          </thead>
          <tbody>
              @foreach($order->products as $product)
              <tr>
              <td>{{$product->product->title}}</td>
              <td>{{$product->quantity}}</td>
              <td>{{number_format($product->price,2)}}</td>
              </tr>
              @endforeach
          </tbody>

      </table>
   </div>

@endsection
