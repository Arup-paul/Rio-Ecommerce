@extends('frontend.layouts.master')


@section('main')

<div class="container">
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
                            {{$product->price}}
                         </span>
                     </p>

                     <dl class="item-property">
                         <dl>Description</dl>
                         <dd><p>{{$product->description}}</p></dd>
                     </dl>
                     <hr>

                     <a href="#" class="btn btn-lg btn-outline-primary text-uppercase"><i class="fas fa-shopping-cart"></i>Add To Cart</a>
                </article>

            </aside>
        </div>
    </div>
</div>



@endsection