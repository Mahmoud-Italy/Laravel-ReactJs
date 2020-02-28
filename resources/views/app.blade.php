<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <script>window.Laravel = { csrfToken: '{{  csrf_token() }}' }</script>
        <title>{{ env('APP_NAME') }}</title>
        <link href="{{ url('assets/frontend/images/favicon.png') }}" rel="shortcut icon">
        <link rel="stylesheet" href="{{ url('assets/frontend/css/bootstrap.min.css') }}">
        <link rel="stylesheet" href="{{ url('assets/frontend/css/themify-icons.css') }}">
        <link rel="stylesheet" href="{{ url('assets/frontend/css/fontawesome.min.css') }}">
        <link rel="stylesheet" href="{{ url('assets/frontend/css/owl.carousel.min.css') }}">
        <link rel="stylesheet" href="{{ url('assets/frontend/css/animate.min.css') }}">
        <link rel="stylesheet" href="{{ url('assets/frontend/css/magnific-popup.css') }}">
        <link rel="stylesheet" href="{{ url('assets/frontend/css/style.css') }}">
        <link rel="stylesheet" href="{{ url('assets/frontend/css/custom.css') }}">
    </head>
    
    <body class="">
        <div id="preloader">
            <div id="status"></div>
        </div>
        
        <div id="app"></div>
    </body>

        <script type="text/javascript" src="{{ url('js/app.js') }}"></script>
        <script src="{{ url('assets/frontend/js/jquery-3.3.1.min.js') }}"></script>
        <script src="{{ url('assets/frontend/js/jquery-ui.min.js') }}"></script>
        <script src="{{ url('assets/frontend/js/bootstrap.min.js') }}"></script>
        <script src="{{ url('assets/frontend/js/owl.carousel.min.js') }}"></script>
        <script src="{{ url('assets/frontend/js/wow.min.js') }}"></script>
        <script src="{{ url('assets/frontend/js/jquery.magnific-popup.min.js') }}"></script>
        <script src="{{ url('assets/frontend/js/scripts.js') }}"></script>
</html>
