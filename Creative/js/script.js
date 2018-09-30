$(document).ready(function () {

    //preloader
    $(window).on("load", function () {
        setTimeout(function () {
            $(".loader").css("display", "none");
        }, 500);
    })

    // wow.js
    new WOW().init();

    // magnific-popup
    $('.mg-popup').magnificPopup({
        type: 'image',
        // Delay in milliseconds before popup is removed
        removalDelay: 100,
        gallery: {
            enabled: true
        }
    });

    // scrolltop
    if ($(window).scrollTop() > 60) {
        $("header").addClass("scrolled");
    }

    $(window).scroll(function () {
        if ($(this).scrollTop() > 60) {
            $("header").addClass("scrolled");
            $(".navbar .nav-link").css("color","black");
            $(".button-top").addClass("button-show");
        } else {
            $("header").removeClass("scrolled");
            $(".button-top").removeClass("button-show");
        }
    });

    //Scrollspy

    $(".main-menu .nav-link").click(function (e) {
        e.preventDefault();
        var elem = $($(this).attr("href"));
        $("html, body").animate({ scrollTop: elem.offset().top - 57 }, "slow");
    });

    $('body').scrollspy({
        target: '#navbarNav',
        offset: 0
    });

    //goto body
    $(".button-top").click(function () {
        $("html, body").animate({ scrollTop: 0 }, "slow");
    })
});