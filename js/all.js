$(document).ready(function () {

    $('.toggle').click(function (e) {
        $('.toggle').toggleClass('active');
        $('header menu ul ').toggleClass('active');
    });


    $('.change').click(function (e) {
        e.preventDefault();
        $(this).toggleClass('far fa-heart fas fa-heart');
    });



    $('aside li').click(function (e) {
        if ($(this).hasClass("active") == false) {
            console.log($(this).hasClass("active"))
            e.preventDefault();
            $(this).toggleClass('active');
            $(this).find('a').toggleClass('a-active');

            $(this).siblings().removeClass('active');
            $(this).siblings().find('a').removeClass('a-active');
        }
    });

    $(".features-btn").click(function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: $(".Introduction").offset().top
        }, 800);
    });

    $(".chef-btn").click(function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: $(".today-chef").offset().top
        }, 800);
    });

    $(".map-btn").click(function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: $(".map").offset().top
        }, 800);
    });

});
