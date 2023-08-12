$(document).ready(function () {
    var mixer = mixitup('.directions__list');
    $('.directions__filter-btn').on('click', function () {
        $('.directions__filter-btn').removeClass('directions__filter-btn--active')
        $(this).addClass('directions__filter-btn--active')
    })

    $('.team__slider').slick({
        arrows: false,
        slidesToShow: 4,
        infinity: true,
        draggable: false,
        waitForAnimate: false,
        speed:200
    })

    $('.team__slider-arrow-next').on('click', function(e){
        e.preventDefault()
        $('.team__slider').slick('slickNext')
    })
    $('.team__slider-arrow-prev').on('click', function(e){
        e.preventDefault()
        $('.team__slider').slick('slickPrev')
    })

    $('.testimonials__slider').slick({
        arrows: false,
        infinity: true,
        waitForAnimate: false,
        speed:200,
        dots: true,
        appendDots: $('.testimonials__dots'),
    })
    $('.testimonials__arrow--next').on('click', function(e){
        e.preventDefault()
        $('.testimonials__slider').slick('slickNext')
    })
    $('.testimonials__arrow--prev').on('click', function(e){
        e.preventDefault()
        $('.testimonials__slider').slick('slickPrev')
    })

    $('.program__acc-link').on('click',function(e){
        e.preventDefault()
        $(this).toggleClass('program__acc-link--active')
        $(this).next('.program__acc-text').slideToggle()
    })

    let map;
    map = new Map(document.getElementById("map"), {
        zoom: 4,
        center: position,
        mapId: "DEMO_MAP_ID",
    });
    
});