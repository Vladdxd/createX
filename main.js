$(document).ready(function () {

    // ============================== MIXITUP ===============================
    var mixer = mixitup('.directions__list');
    $('.directions__filter-btn').on('click', function () {
        $('.directions__filter-btn').removeClass('directions__filter-btn--active')
        $(this).addClass('directions__filter-btn--active')
    })
    // ============================== SLIDER ===============================
    $('.team__slider').slick({
        arrows: false,
        slidesToShow: 4,
        infinity: true,
        draggable: false,
        waitForAnimate: false,
        speed: 200,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow:2.5,
                    centerMode: true,
                }
            },
            {
                breakpoint: 850,
                settings: {
                    slidesToShow:2,
                }
            }
        ]
    })

    $('.team__slider-arrow-next').on('click', function (e) {
        e.preventDefault()
        $('.team__slider').slick('slickNext')
        alert('Привет, это всплывающее окно!')
    })
    $('.team__slider-arrow-prev').on('click', function (e) {
        e.preventDefault()
        $('.team__slider').slick('slickPrev')
    })

    $('.testimonials__slider').slick({
        arrows: false,
        infinity: true,
        waitForAnimate: false,
        speed: 200,
        dots: true,
        appendDots: $('.testimonials__dots'),
    })
    $('.testimonials__arrow--next').on('click', function (e) {
        e.preventDefault()
        $('.testimonials__slider').slick('slickNext')
    })
    $('.testimonials__arrow--prev').on('click', function (e) {
        e.preventDefault()
        $('.testimonials__slider').slick('slickPrev')
    })

    $('.program__acc-link').on('click', function (e) {
        e.preventDefault()
        $(this).toggleClass('program__acc-link--active')
        $(this).next('.program__acc-text').slideToggle()
    })

    $('.footer__form-btn').on('click', function () {
        if (Submit) alert("Привет, это всплывающее окно!");
    })

    $(".header__nav").on("click", "a", function (e) {
        //отменяем стандартную обработку нажатия по ссылке
        e.preventDefault();
        //забираем идентификатор бока с атрибута href
        var id = $(this).attr('href'),
            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({ scrollTop: top }, 800);
    });

    $(".header__btn-box .header__top-btn").on("click",  function (e) {
        //отменяем стандартную обработку нажатия по ссылке
        e.preventDefault();
        //забираем идентификатор бока с атрибута href
        var id = $(this).attr('href'),
            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top -100;
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({ scrollTop: top }, 800);
    });

    $(".footer__bottom-inner a").on("click",  function (e) {
        //отменяем стандартную обработку нажатия по ссылке
        e.preventDefault();
        //забираем идентификатор бока с атрибута href
        var id = $(this).attr('href'),
            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({ scrollTop: top }, 800);
    });

    $(".header__content-buttons a").on("click",  function (e) {
        //отменяем стандартную обработку нажатия по ссылке
        e.preventDefault();
        //забираем идентификатор бока с атрибута href
        var id = $(this).attr('href'),
            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({ scrollTop: top }, 800);
    });


    setInterval(() => {
        if($(window).scrollTop() > 0  && !$('.header__top').hasClass('header__top--open') ) {
            $('.burger').addClass('burger-follow')
        }
        else {
            $('.burger').removeClass('burger-follow')
        }
    }, 0);

    $(".burger, .overlay").on("click", function(e){
        e.preventDefault()
        $('.header__top').toggleClass('header__top--open')
        $('.overlay').toggleClass('overlay--active')
        $('.burger').toggleClass('burger--close')

    })
});