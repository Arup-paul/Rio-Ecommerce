@extends('frontend.layouts.master')


@section('main')

<div class="container">
    <br>
<p class="text-center">{{$product->title}}</p>
    <hr>

    <div class="card">
        <div class="row">
            <aside class="col-md-5 border-right">
                <article class="gallery-wrap">
                      <div>
                        <img src="{{$product->getFirstMediaUrl('products')}}" alt="{{$product->title}}" width="100%">
                      </div>
                </article>
            </aside>

            <aside class="col-md-7">
                <article class="card-body p-5">
                     <h3 class="title mb-3">{{$product->title}}</h3>

                     <p class="price-detail-wrap">
                         <span class="num">
                            <strong class="text-muted">
                                @if($product->sale_price !== NULL && $product->sale_price > 0)
                                  <strike>BDT {{$product->price}}</strike>  BDT {{$product->sale_price}}
                                @else
                                BDT {{$product->price}}
                                @endif
            
                            </strong>
                         </span>
                     </p>

                     <dl class="item-property">
                         <dl>Description</dl>
                         <dd><p>{{$product->description}}</p></dd>
                     </dl>
                     <hr>

                    <form action="{{route('cart.add')}}" method="POST">
                    @csrf
                <input type="hidden" name="product_id" value="{{$product->id}}">
                  <button type="submit" class="btn btn-lg btn-outline-secondary">Add to Cart</button>
                </form>
                </article>

            </aside>
        </div>
    </div>
</div>



@endsection