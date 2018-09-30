$(document).ready(function(){
    var strings = $(".myTyped").data("string");
    strings = strings.split(",");

    var typed = new Typed('.myTyped', {
        strings: strings,
        typeSpeed: 40,
        loop: true,
        backDelay: 400,
        backSpeed: 30,
        fadeOut: false,
    });
})
