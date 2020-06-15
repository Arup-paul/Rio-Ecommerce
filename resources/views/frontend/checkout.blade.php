@extends('frontend.layouts.master')

@section('main')

<div class="container">
    <br>
    <p class="text-center">Checkout</p>
    <hr>
     @guest()
    <div class="alert alert-info">
    You Need to <a href="{{route('userLogin')}}"> Login </a> First to complete order
    </div>
    @else
       <div class="alert alert-info">
          you are ordering as, {{auth()->user()->name}}
    </div>
    @endguest

</div>
 
 <div class="container">
 
  <div class="row">
    <div class="col-md-4 order-md-2 mb-4">
      <h4 class="d-flex justify-content-between align-items-center mb-3">
        <span class="text-muted">Your cart</span>
      <span class="badge badge-secondary badge-pill">{{count($cart)}}</span>
      </h4>
      <ul class="list-group mb-3">
          @foreach($cart as $key => $product)
        <li class="list-group-item d-flex justify-content-between lh-condensed">
          <div>
          <h6 class="my-0">{{$product['title']}}</h6>
            <small class="text-muted">Quantity:{{$product['quantity']}}</small>
          </div>
          <span class="text-muted">{{number_format($product['total_price'],2)}}</span>
        </li>
        @endforeach
       
        <li class="list-group-item d-flex justify-content-between">
          <span>Total (BDT)</span>
        <strong>{{number_format($total,2)}}</strong>
        </li>
      </ul>

      <form class="card p-2">
        <div class="input-group">
          <input type="text" class="form-control" placeholder="Promo code">
          <div class="input-group-append">
            <button type="submit" class="btn btn-secondary">Redeem</button>
          </div>
        </div>
      </form>
    </div>
    <div class="col-md-8 order-md-1">
      <h4 class="mb-3">Billing address</h4>
      <form class="needs-validation" novalidate>
       

        <div class="mb-3">
          <label for="username">Customer Name</label>
        <input type="text" class="form-control" name="customer_name" value="{{auth()->user()->name}}">
          </div>
      

        <div class="mb-3">
          <label for="email">Customer Phone Number </label> 
          <input type="email" class="form-control" id="email" name="customer_phone_number" value="{{auth()->user()->phone_number}}">
         
        </div>

        <div class="mb-3">
          <label for="address">Address</label>
        <textarea name="address" class="form-control" id="" ></textarea>
        </div>

        

        
          <div class=" mb-3">
            <label for="country">Country</label>
          <input type="text" name="city" class="form-control" placeholder="city" required>
          
          
          <div class=" mb-3">
            <label for="country">Postal Code</label>
          <input type="text" class="form-control" name="postal_code" placeholder="postal code" required>
          
      
        
        </div>

        <hr class="mb-4">
        <div class="custom-control custom-checkbox">
          <input type="checkbox" class="custom-control-input" id="same-address">
          <label class="custom-control-label" for="same-address">Shipping address is the same as my billing address</label>
        </div>
        <div class="custom-control custom-checkbox">
          <input type="checkbox" class="custom-control-input" id="save-info">
          <label class="custom-control-label" for="save-info">Save this information for next time</label>
        </div>
        <hr class="mb-4">

        
      
        <hr class="mb-4">
        <button class="btn btn-primary btn-lg btn-block" type="submit">Continue to checkout</button>
      </form>
    </div>
  </div>
</div>

@endsection
