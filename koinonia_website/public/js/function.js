$(function() {
    $(document).scroll(function() {
        var $nav = $(".navbar-fixed-top");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});
$("#toHome").click(function() {
    $('html, body').animate({
        scrollTop: $("#home").offset().top
    }, 500);
});
$("#toAbout").click(function() {
    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 500);
});
$("#toEvent").click(function() {
    $('html, body').animate({
        scrollTop: $("#event").offset().top
    }, 500);
});
$("#toConnect").click(function() {
    $('html, body').animate({
        scrollTop: $("#connect").offset().top
    }, 500);
});
$("#toLink").click(function() {
    $('html, body').animate({
        scrollTop: $("#link").offset().top
    }, 500);
});