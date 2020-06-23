@include('backend.partials._header_file')
   @yield('before_head')
@include('backend.partials._header')


  <!-- Left side column. contains the logo and sidebar -->

  @include('backend.partials._sidebar')

  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">

    @yield('content')
  </div>


     @include('backend.partials._footer')

      @yield('before_body')
      
    @include('backend.partials._footer_file')
