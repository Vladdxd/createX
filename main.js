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
});