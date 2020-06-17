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
                <form action="{{route('cart.add')}}" method="POST">
                    @csrf
                <input type="hidden" name="product_id" value="{{$product->id}}">
                  <button type="submit" class="btn btn-sm btn-outline-secondary">Add to Cart</button>
                </form>
                </div>

                <strong class="text-muted">
                    @if($product->sale_price !== NULL && $product->sale_price > 0)
                      <strike>BDT {{$product->price}}</strike>  BDT {{$product->sale_price}}
                    @else
                    BDT {{$product->price}}
                    @endif

                </strong>
              </div>
            </div>
          </div>
        </div>


        @endforeach



      </div>

    </div>
  </div>


  @endsection
