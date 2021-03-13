$(function () {
    $('.header-item__wrapper').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
    });
    $('.about-item').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        fade: true,
        cssEase: 'linear',
    });
    $('.doctors-item-wrapper').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: false,
        arrows: true,
    });
    $('.cls-1').css({ fill: '#d0d0d0' });
});