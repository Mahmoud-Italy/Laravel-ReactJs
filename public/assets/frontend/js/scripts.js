(function ($) {
    'use strict';
    var wow = new WOW(
        {
            animateClass: 'animated',
            offset: 100,
            callback: function (box) {
                console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
            }
        }
    );
    wow.init();
    //======================
    // Preloder
    //======================
    $(window).on('load', function () {
        $('#status').fadeOut();
        $('#preloader').delay(500).fadeOut('slow');
        $('body').delay(500).css({ 'overflow': 'visible' });
    });


    //======================
    // Mobile menu 
    //======================
    $('#mobile-menu-toggler').on('click', function (e) {
        e.preventDefault();
        $('nav.navbar > ul').slideToggle();
    })
    $('.has-menu-child').append('<i class="menu-dropdown ti-angle-down"></i>');

    if ($(window).width() <= 991) {
        $('.menu-dropdown').on('click', function () {
            $(this).prev().slideToggle('slow');
            $(this).toggleClass('ti-angle-down ti-angle-up')
        })
    }

    //======================
    // Partners carousel
    //======================
    $(".partners-caro").owlCarousel({
        loop: true,
        margin: 15,
        nav: true,
        rtl: true,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 4
            },
            1000: {
                items: 4
            }
        },
        navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>']
    });
    //======================
    // Slider carousel
    //======================
    $('.slider-carousel').owlCarousel({
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        autoplay: true,
        dots: false,
        loop: true,
        nav: false,
        rtl: true,
        items: 1
    })

    //======================
    // Testimonial
    //======================
    $('.test-caro').owlCarousel({
        dots: false,
        items: 1,
        nav: true,
        rtl: true,
        navText: ['<i class="ti-arrow-left"></i>', '<i class="ti-arrow-right"></i>'],
        smartSpeed: 500
    });

    //======================
    // Course carousel
    //======================
    $('.course-caro').owlCarousel({
        autoplay: true,
        loop: true,
        dots: false,
        items: 3,
        nav: true,
        rtl: true,
        navText: ['<i class="ti-arrow-left"></i>', '<i class="ti-arrow-right"></i>'],
        smartSpeed: 500,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            768: {
                items: 2,
                nav: false
            },
            992: {
                items: 3
            }
        }
    });
    //=================================
    // CountDown Timer
    //=================================
    if ($(".clock").length > 0) {
        $('.clock').countdown('2020/10/10').on('update.countdown', function (event) {
            var $this = $(this).html(event.strftime(''
                + '<p><span>%-d</span> Day%!d</p> '
                + '<p><span>%H</span> Hour%!d</p> '
                + '<p><span>%M</span> Min%!d</p> '
                + '<p><span>%S</span> Sec%!d</p>'));
        });
    }

    //======================
    // Nice Select
    //======================\
    var searchFormSelect = $('.search-form select');
    if (searchFormSelect.length > 0) {
        $('.search-form select').niceSelect();
    }

    //======================
    // Magnific Popup
    //======================\
    // :: Magnific-popup Video Active Code
    var magPopup = $(".video-btn");
    if (magPopup.length) {
        magPopup.magnificPopup({
            type: 'iframe',
            mainClass: 'mfp-fade',
            preloader: true,
            iframe: {
                markup: '<div class="mfp-iframe-scaler">' +
                    '<div class="mfp-close"></div>' +
                    '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
                    '</div>', // HTML markup of popup, `mfp-close` will be replaced by the close button

                patterns: {
                    youtube: {
                        index: "youtube.com",
                        id: "v=",
                        src: "https://www.youtube.com/embed/%id%?autoplay=1"
                    },
                    vimeo: {
                        index: "vimeo.com/",
                        id: "/",
                        src: "//player.vimeo.com/video/%id%?autoplay=1"
                    },
                    gmaps: {
                        index: "//maps.google.",
                        src: "%id%&output=embed"
                    }

                },

                srcAction: 'iframe_src', // Templating object key. First part defines CSS selector, second attribute. "iframe_src" means: find "iframe" and set attribute "src".
            }
        });
    }
})(jQuery)