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
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 930,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            
            
            
            
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    $('.footer-photos').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        arrows: false,
        mobileFirst: true,
        responsive: [
            {
                breakpoint: 830,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
                
            },
            {
                breakpoint: 1210,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                }
            },
            {
                breakpoint: 1900,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                }
            },
        ]
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
    $('').on('breakpoint', function () {
        var filterClass = $(this).data('filter');
        $('.footer-photos').slick('slickFilter', $(`.footer-photo${filterClass}`).closest('.slick-slide'));
        $('.footer-photos').slick('slickUnfilter');
    });
    
});

