@extends('frontend.layouts.master')

@section('main')

   <div class="container">
       <br>

       <p class="text-center">My Profile</p>
       <hr>
   </div>

   <div class="container">
       <h3>#My Orders</h3>
        <table class="table table-bordered table-hover">
            <thead>
                <tr>
                    <th>Order Id</th>
                    <th>Customer Name</th>
                    <th>Customer Phone Number</th>
                    <th>Total Amount</th>
                    <th>Paid Amount</th>
                    <th>Details</th>
                </tr>
            </thead>

            <tbody>
                @foreach($orders as $order)
                <tr>
                <td>{{$order->id}}</td>
                <td>{{$order->customer_name}}</td>
                <td>{{$order->customer_phone_number}}</td>
                <td>{{number_format($order->total_amount,2)}}</td>
                <td>{{number_format($order->paid_amount,2)}}</td>
                <td>
                    <a href="{{route('order.details',$order->id)}}">
                        Order Details
                    </a>
                </td>
                </tr>
                @endforeach
            </tbody>
        </table>
   </div>

@endsection
