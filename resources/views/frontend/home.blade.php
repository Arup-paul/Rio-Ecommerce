@extends('frontend.layouts.master')


@section('main')

@include('frontend.partials._hero')

  <div class="album py-5 bg-light">
    <div class="container">

      <div class="row">
   @foreach($products as $product)
        <div class="col-md-4">
          <div class="card mb-4 shadow-sm">
          <a href="{{route('frontend.product.details',$product->slug)}}">
            <img src="{{$product->getFirstMediaUrl('products')}}" alt="{{$product->title}}" width="100%">
        </a>    
         
            

            <div class="card-body">
              <p class="card-text">
                <a class="text-dark" href="{{route('frontend.product.details',$product->slug)}}">
                    {{$product->title}}
                </a>
                 
                </p>

              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">Add to Cart</button>
                </div>
                <strong class="text-muted">BDT {{$product->price}}</strong>
              </div>
            </div>
          </div>
        </div>

        @endforeach
        
      
      </div>
      <div class="">
      {{$products->render()}}
    </div>
    </div>
  </div>


  @endsection