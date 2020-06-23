
 <script src="{{asset('js/admin/bootstrap3-wysihtml5.all.min.js')}}"></script>
 {{-- <script src="{{asset('js/admin/bootstrap-min.js')}}"></script> --}}
 <script src="{{asset('js/admin/daterange.js')}}"></script>
 <script src="{{asset('js/admin/moment.min.js')}}"></script>
 <script src="{{mix('js/app.js')}}"></script>
 <script src="{{mix('js/admin/all.js')}}"></script>
 <script>
  $.widget.bridge('uibutton', $.ui.button);
</script>
<script src="{{asset('js/admin/jquery.dataTables.min.js')}}"></script>
<script src="{{asset('js/admin/dataTables.bootstrap.min.js')}}"></script>
<script>
  $(function () {
    $('#example1').DataTable()
    $('#example2').DataTable({
      'paging'      : true,
      'lengthChange': false,
      'searching'   : false,
      'ordering'    : true,
      'info'        : true,
      'autoWidth'   : false
    })
  })
</script>
</body>
</html>
