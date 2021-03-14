$(function () {
    $('.header__inner').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 12000,
        speed: 1000,
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

    $('.footer-photos').slick({
        slidesToShow: 5,
        slidesToScroll: 5,
        infinite: false,
    });
    $('.btn-groups .btn').on('click', function (e) {
        $('.btn-groups .btn').removeClass('active');
        e.target.classList.add('active');
    })

    $('.btn-groups .btn').on('click', function () {
        var filterClass = $(this).data('filter');
        $('.footer-photos').slick('slickUnfilter');
        $('.footer-photos').slick('slickFilter', $(`.footer-photo${filterClass}`).closest('.slick-slide'));
    });
});

