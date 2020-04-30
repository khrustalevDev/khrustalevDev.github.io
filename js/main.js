$(function() {
    $('.slider').slick({
        arrows: false,
        fade: true,
        autoplay: 3500,
        dots: true,
        pauseOnFocus: false
    });

    $('.header-btn').on('click', function() {
        $('.menu').addClass('active');
    });

    $('.close-btn').on('click', function() {
        $('.menu').removeClass('active');
    });

});