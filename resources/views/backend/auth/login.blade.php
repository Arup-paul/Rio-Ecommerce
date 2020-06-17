@include('backend.partials._header_file')
 @include('backend.partials._message')
<style>.login-box-body, .register-box-body {
	background: #ac2118;
	padding: 20px;
	border-top: 0;
	color: #f8fafc;
	border: 5px solid #fa5661;
	border-radius: 10px;
}</style>
<div class="login-box">
  <div class="login-logo">
    <a >Rio Ecoomerce</a>
    <br>
  </div>
  <!-- /.login-logo -->
  <div class="login-box-body">
      <br>
    <p class="login-box-msg">Sign in to start your session</p>
    <br>

  <form action="{{route('admin.processLogin')}}" method="post">
        @csrf
      <div class="form-group has-feedback">
        <input type="email" class="form-control" name="email" placeholder="Enter Email">
        <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
      </div>
      <div class="form-group has-feedback">
        <input type="password" class="form-control" name="password" placeholder="Enter Password">
        <span class="glyphicon glyphicon-lock form-control-feedback"></span>
      </div>

       <div class="form-group has-feedback">
         <button type="submit" class="btn btn-info btn-block ">Login </button>
      </div>
      <br>
      <br>

    </form>




  </div>
  <!-- /.login-box-body -->
</div>
@include('backend.partials._footer_file')
