<!DOCTYPE html>
<html>
<head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <title></title>    
    <link rel="icon" href="{{ asset('webroot/admin/images/fav.jpg') }}" type="image/x-icon">
    <link href="{{ asset('webroot/admin/css/bootstrap.min.css') }}" rel="stylesheet">
    <link href="{{ asset('webroot/admin/font-awesome/css/font-awesome.css') }}" rel="stylesheet">

    <!-- Toastr style -->
    <link href="{{ asset('webroot/admin/css/plugins/toastr/toastr.min.css') }}" rel="stylesheet">

    <!-- Gritter -->
    <link href="{{ asset('webroot/admin/js/plugins/gritter/jquery.gritter.css') }}" rel="stylesheet">

    <link href="{{ asset('webroot/admin/css/animate.css') }}" rel="stylesheet">

    <!-- <link href="{{ URL::asset('webroot') }}/admin/css/select2.css" rel="stylesheet"> -->
    <!-- <link href="{{ URL::asset('webroot') }}/admin/css/select2.min.css" rel="stylesheet"> -->

    <link href="{{ asset('webroot/admin/css/style.css') }}" rel="stylesheet">
    <link href="{{ asset('webroot/admin/css/wickedpicker.min.css') }}" rel="stylesheet">
    <link href="{{ asset('webroot/admin/css/plugins/dataTables/datatables.min.css') }}" rel="stylesheet">
    <link href="{{ asset('webroot/admin/css/validationEngine.jquery.css') }}' rel="stylesheet">
    <link href="{{ asset('webroot/admin/css/plugins/switchery/switchery.css') }}" rel="stylesheet">
    <link href="{{ asset('webroot/admin/css/jquery.timepicker.css') }}" rel="stylesheet">
    <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
    <link href="{{ asset('webroot/admin/css/plugins/iCheck/custom.css') }}" rel="stylesheet">
    <link href="{{ asset('webroot/admin/css/plugins/steps/jquery.steps.css') }}" rel="stylesheet">
    <link href="{{ asset('webroot/admin/css/plugins/summernote/summernote.css') }}" rel="stylesheet">



    <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.3.4/jspdf.debug.js"></script> -->
    <script src="{{ asset('webroot/admin/js/jquery-3.1.1.min.js') }}"></script>
    
    
    

</head>

<body>
    <input type="hidden" name="base_url" id="base_url" value="">
    <input type="hidden" name="current_url" id="current_url" value="">
    <div id="wrapper">
        <nav class="navbar-default navbar-static-side" role="navigation">
            <div class="sidebar-collapse">
                <ul class="nav metismenu" id="side-menu">
                    <li class="nav-header">
                    <div class="logo">
                        <!-- <img alt="image" class="img-responsive" src="{{ asset('webroot') }}/admin/img/logo.png" /></div> -->
                    <div class="logo-element">
                        <!-- <img alt="image" class="img-responsive" src="{{ asset('webroot') }}/admin/img/logo-icon.png" /> -->
                    </div>
                </li>






    <li class="">
        <a href="{{ url('admin/dashboard') }}"><i class="fa fa-th-large"></i> <span class="nav-label">DASHBOARD</span></a>
    </li> 
    
    <li  class="">
        <a href="javascript:void(0)"><i class="fa fa-plus-square-o"></i> <span class="nav-label">CATEGORY MASTER</span> <span class="fa arrow"></span></a>
        <ul class="nav nav-second-level collapse">
            <li class=""><a href="{{url('admin/category')}}"><i class="fa fa-bed" aria-hidden="true"></i> <span class="nav-label"> Category</span></a></li>
        </ul>
        <ul class="nav nav-second-level collapse">
            <li class=""><a href="{{url('admin/subcategory')}}"><i class="fa fa-bed" aria-hidden="true"></i> <span class="nav-label">Sub Category</span></a></li>
        </ul>
        <ul class="nav nav-second-level collapse">
            <li class=""><a href="{{url('admin/childcategory')}}"><i class="fa fa-bed" aria-hidden="true"></i> <span class="nav-label">Child Category</span></a></li>
        </ul>
    </li>
    

    <li class="">
        <a href="{{ url('admin/changepassword') }}"><i class="fa fa-key"></i> <span class="nav-label">CHANGE PASSWORD</span></a>
    </li>  

    <li class="">
        <a href="{{ route('myhome') }}"><i class="fa fa-key"></i> <span class="nav-label">CHANGE PASSWORD1</span></a>
    </li>  
    
    </ul>
      <ul class="nav metismenu log-out-menu">
                
                <li>
                    <a href="{{ url('admin/logout') }}"><i class="fa fa-sign-out"></i> <span class="nav-label">LOGOUT</span> </a>
                    
                </li>
            </ul>

</div>
</nav>

        <div id="page-wrapper" class="gray-bg dashbard-1">
        <div class="row border-bottom">
        <nav class="navbar navbar-static-top white-bg" role="navigation" style="margin-bottom: 0">
        <div class="navbar-header">
            <a class="navbar-minimalize minimalize-styl-2 btn btn-primary " href="#"><i class="fa fa-bars"></i></a>
            <form role="search" class="navbar-form-custom" action="#">
               
            </form>
        </div>
               <ul class="nav navbar-top-links navbar-right">
                <li>
                    <span class="m-r-sm text-muted welcome-message"><span style="color: #999c9e">Welcome to</span> <b>Doshor Admin System</b></span>
                </li>            
                <li>
                    <a class="logout-icon" href="{{ url('admin/logout') }}">
                        <i class="fa fa-sign-out"></i> Log out
                    </a>
                </li>
                
            </ul>

        </nav>
    </div>

    
    <div class="wrapper wrapper-content animated fadeInRight">
        @if (Session::has('success'))
            @include('admin/msg/success')
        @endif
        @if (Session::has('error'))
            @include('admin/msg/error')
        @endif
    @yield('content')
    </div>



           
<style type="text/css">
    .dash-title{
        text-align: center;
        font-weight: bold;
        font-size: 18px;
    }
    .ibox-content {
        background-color: #ffffff;
        color: inherit;
        padding: 15px 20px 48px 20px !important;
        border-color: #e7eaec;
        border-image: none;
        border-style: solid solid none;
        border-width: 1px 0;
    }
    .btn {
        padding: 4px 10px !important;
    }
    .position{
        float: right;
        margin-top: -1.5em        
    }
    .top-1{
        margin-top: 2em;
    }
    .mr-right{
        margin-right: -.2em;
    }
</style>





<div class="footer">
                    <div class="pull-right">
                        Design &amp; Developed by <a href="https://www.bongtechsolutions.com/" target="_blank"><strong>Bongtech Solutions Private Limited</strong></a>
                    </div>
                    <div>
                        Copyright Bongtech &copy; <?php echo date('Y')?>
                    </div>
                </div>
            </div>

        </div>

        </div>
        
        
    </div>

    <!-- Mainly scripts -->
    <!-- <script src="{{ URL::asset('webroot') }}/admin/js/jquery-3.1.1.min.js"></script> -->
    <script src="{{ asset('webroot/admin/js/jquery.number.js') }}"></script>
    <!-- <script src="https://code.jquery.com/jquery-1.11.3.js"></script> -->
    <script src="{{ asset('webroot//admin/js/bootstrap.min.js') }}"></script>
    <script src="{{ asset('webroot/admin/js/plugins/metisMenu/jquery.metisMenu.js') }}"></script>
    <script src="{{ asset('webroot/admin/js/plugins/slimscroll/jquery.slimscroll.min.js') }}"></script>

    <!-- Flot -->
    <script src="{{ asset('webroot/admin/js/plugins/flot/jquery.flot.js') }}"></script>
    <script src="{{ asset('webroot/admin/js/plugins/flot/jquery.flot.tooltip.min.js') }}"></script>
    <script src="{{ asset('webroot/admin/js/plugins/flot/jquery.flot.spline.js') }}"></script>
    <script src="{{ asset('webroot/admin/js/plugins/flot/jquery.flot.resize.js') }}"></script>
    <script src="{{ asset('webroot/admin/js/plugins/flot/jquery.flot.pie.js') }}"></script>
    <script src="{{ asset('webroot/admin/js/plugins/flot/jquery.flot.symbol.js') }}"></script>
    <script src="{{ asset('webroot/admin/js/plugins/flot/jquery.flot.time.js') }}"></script>

    <!-- Peity -->
    <script src="{{ asset('webroot/admin/js/plugins/peity/jquery.peity.min.js') }}"></script>
    <script src="{{ asset('webroot/admin/js/demo/peity-demo.js') }}"></script>

    <!-- Custom and plugin javascript -->
    <script src="{{ asset('webroot/admin/js/inspinia.js') }}"></script>
    <script src="{{ asset('webroot/admin/js/plugins/pace/pace.min.js') }}"></script>

    <!-- jQuery UI -->
    <script src="{{ asset('webroot/admin/js/plugins/jquery-ui/jquery-ui.min.js') }}"></script>

    <!-- GITTER -->
    <script src="{{ asset('webroot/admin/js/plugins/gritter/jquery.gritter.min.js') }}"></script>

    <!-- Sparkline -->
    <script src="{{ asset('webroot/admin/js/plugins/sparkline/jquery.sparkline.min.js') }}"></script>

    <!-- Sparkline demo data  -->
    <script src="{{ asset('webroot/admin/js/demo/sparkline-demo.js') }}"></script>

    

    <!-- Toastr -->
    <script src="{{ asset('webroot/admin/js/plugins/toastr/toastr.min.js') }}"></script>

    <script src="{{ asset('webroot/admin/js/plugins/dataTables/datatables.min.js') }}"></script>

    <script src="{{ asset('webroot/admin/js/common.js') }}"></script>

    <script src="{{ asset('webroot/admin/js/jquery.validationEngine.js') }}"></script>
    <script src="{{ asset('webroot/admin/js/jquery.validationEngine-en.js') }}"></script>
    <script src="{{ asset('webroot/admin/js/plugins/switchery/switchery.js') }}"></script>

    <script src="{{ asset('webroot/admin/js/wickedpicker.min.js') }}"></script>
    <script src="{{ asset('webroot/admin/js/plugins/iCheck/icheck.min.js') }}"></script>

    <!-- Custom and plugin javascript -->
    
    <!-- EayPIE -->
    <script src="{{ asset('webroot/admin/js/plugins/easypiechart/jquery.easypiechart.js') }}"></script>

    <!-- Steps -->
    <script src="{{ asset('webroot/admin/js/plugins/steps/jquery.steps.min.js') }}"></script>

    <!-- Jquery Validate -->
    <script src="{{ asset('webroot/admin/js/plugins/validate/jquery.validate.min.js') }}"></script>
    
    <script src="{{ asset('webroot/admin/js/plugins/summernote/summernote.min.js') }}"></script>
    <!-- <script src="{{ asset('webroot') }}/admin/js/ckeditor/adapters/jquery.js"></script> -->
    <script src="{{ asset('webroot/admin/js/ckeditor/ckeditor.js') }}"></script>
    
    </body>

</html>