<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <script>window.Laravel = { csrfToken: '{{  csrf_token() }}' }</script>
        <title>DASHBOARD</title>
        <link rel="stylesheet" href="{{ url('assets/backend/vendors/core/core.css') }}">
        <link rel="stylesheet" href="{{ url('assets/backend/vendors/font-awesome/css/font-awesome.min.css')}}">
        <link rel="stylesheet" 
            href="{{ url('assets/backend/vendors/bootstrap-datepicker/bootstrap-datepicker.min.css') }}">
        <link rel="stylesheet" href="{{ url('assets/backend/vendors/simplemde/simplemde.min.css') }}">
        <link rel="stylesheet" href="{{ url('assets/backend/vendors/dropzone/dropzone.min.css') }}">
        <link rel="stylesheet" href="{{ url('assets/backend/vendors/dropify/dist/dropify.min.css') }}">
        <link rel="stylesheet" href="{{ url('assets/backend/css/demo_1/style.css') }}">
        <link rel="shortcut icon" href="{{ url('assets/frontend/images/favicon.png') }}"/>
    </head>
    
    <body class="sidebar-dark rtl">
        <div id="dash"></div>
    </body>

        <script type="text/javascript" src="{{ url('js/app.js') }}"></script>
        <script src="{{ url('assets/backend/vendors/core/core.js') }}"></script>
        <script src="{{ url('assets/backend/vendors/chartjs/Chart.min.js') }}"></script>
        <script src="{{ url('assets/backend/vendors/jquery.flot/jquery.flot.js') }}"></script>
        <script src="{{ url('assets/backend/vendors/jquery.flot/jquery.flot.resize.js') }}"></script>
        <script src="{{ url('assets/backend/vendors/apexcharts/apexcharts.min.js') }}"></script>
        <script src="{{ url('assets/backend/vendors/simplemde/simplemde.min.js') }}"></script>
        <script src="{{ url('assets/backend/vendors/dropzone/dropzone.min.js') }}"></script>
        <script src="{{ url('assets/backend/vendors/dropify/dist/dropify.min.js') }}"></script>
        <script src="{{ url('assets/backend/js/simplemde.js') }}"></script>
        <script src="{{ url('assets/backend/vendors/progressbar.js/progressbar.min.js') }}"></script>
        <script src="{{ url('assets/backend/vendors/feather-icons/feather.min.js') }}"></script>
        <script src="{{ url('assets/backend/js/dashboard.js') }}"></script>
        <script src="{{ url('assets/backend/js/datepicker.js') }}"></script>
</html>
