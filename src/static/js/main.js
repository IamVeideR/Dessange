$(".products__slider").slick({
    slidesToShow: 4,
    slidesToScroll: 2,
    asNavFor: '.products__pages'
});
$('.products__pages').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    asNavFor: '.products__slider',
    arrows: true,
    centerMode: true,
    focusOnSelect: true
});