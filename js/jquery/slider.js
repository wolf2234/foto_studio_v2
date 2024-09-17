$(document).ready(function () {
    $(".slider").slick({
        arrows: true,
        dots: false,
        adaptiveHeight: true,
        Infinity: true,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow: $("#next"),
        prevArrow: $("#prev"),
        draggable: false,
        swipe: false,
    });
    $(".employees__slider").slick({
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
        adaptiveHeight: true,
        Infinity: true,
        autoplay: true,
        autoplaySpeed: 2000,
        appendDots: $(".employees__dots"),
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    vertical: true,
                    verticalSwiping: true,
                    swipe: true,
                },
            },
        ],
    });
});
