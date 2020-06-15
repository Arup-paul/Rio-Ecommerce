@extends('frontend.layouts.master')

@section('main')

<div class="container">
    <br>
  <p class="text-center">Cart</p>
    <hr>

    @if(session()->has('msg'))
    <div class="alert alert-success">
        {{session()->get('msg')}}
    </div>
    @endif

@if(empty($cart))
<div class="alert alert-info">
please add some products <a href="{{route('frontend.home')}}">Browse Products</a>
</div>
@else

    <table class="table table-bordered ">
         <thead>
              <tr>
                  <td>Serial</td>
                  <td>Product</td>
                  <td>Unit Price</td>
                  <td>Quantity</td>
                  <td>Price</td>
                  <td>Action</td>
              </tr>

              <tbody>
                  @php $i=1; @endphp
                 @foreach($cart as $key => $product)
                <tr>
                <td>{{$i++}}</td>
                <td>{{$product['title']}}</td>
                 <td>BDT {{number_format($product['unit_price'],2)}}</td>
                <td>
                    <input type="number" name="quantity" value="{{$product['quantity']}}">
                </td>
                <td>BDT {{number_format($product['total_price'],2)}}</td>
              
                <td>
                    <form action="{{route('cart.remove')}}" method="POST">
                    @csrf
                <input type="hidden" name="product_id" value="{{$key}}">
                  <button type="submit" class="btn btn-sm btn-outline-secondary">Remove</button>
                </form>
                </td>
                </tr>
                @endforeach

                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>Total</td>
                <td>BDT {{number_format($total,2)}}</td>
                </tr>

           

              </tbody>
        </thead> 
    </table>
     <a href="{{route('cart.clear')}}" class="btn btn-danger">Clear Cart</a>
     <a href="{{route('checkout')}}" class="btn btn-success">Checkout</a>
@endif
</div>


@endsection