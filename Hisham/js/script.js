 $(document).ready(function () {
            //Preloader
            function handlePreloader() {
                if ($('#preloader').length) {
                $('#preloader').delay(200).fadeOut(500);
                }
            }
            handlePreloader();
            
    // navbar scrolling background
    $(window).on("scroll",function () {

        var bodyScroll = $(window).scrollTop(),
            navbar = $(".navbar-default");

        if(bodyScroll > 300){

            navbar.addClass("nav-scroll");

        }else{

            navbar.removeClass("nav-scroll");
        }
    });
    
    // scrollIt
    $.scrollIt({
        upKey: 38,                // key code to navigate to the next section
        downKey: 40,              // key code to navigate to the previous section
        easing: 'swing',         // the easing function for animation
        scrollTime: 600,          // how long (in ms) the animation takes
        activeClass: 'active',    // class given to the active nav element
        onPageChange: null,       // function(pageIndex) that is called when page is changed
        topOffset: -60            // offste (in px) for fixed top navigation
      });
  
          // button scroll to top
    $(window).on("scroll",function () {

        var bodyScroll = $(window).scrollTop(),
            button_top = $(".button-top");

        if(bodyScroll > 700){

            button_top.addClass("button-show");

        }else{

            button_top.removeClass("button-show");
        }
    });


      
           // progress bar
           $(window).on('scroll', function () {
            $(".skills-progress span").each(function () {
                var bottom_of_object = $(this).offset().top + $(this).outerHeight();
                var bottom_of_window = $(window).scrollTop() + $(window).height();
                var myVal = $(this).attr('data-value');
                if(bottom_of_window > bottom_of_object) {
                    $(this).css({width : myVal});
                }
            });
        });
    // owlCarousel
    $('.alex-owl .owl-carousel').owlCarousel({
        items:1,
        loop:true,
        mouseDrag:false,
        autoplay:true,
        smartSpeed:500
    });

    // owlCarousel
    $('.owl-service .owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        mouseDrag:false,
        autoplay:true,
        smartSpeed:500,
        responsiveClass:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });
});


