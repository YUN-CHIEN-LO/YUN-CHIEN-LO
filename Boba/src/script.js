
$(window).scroll(function() {
  var scrolledY = $(window).scrollTop();
  
  if (scrolledY > 10) {
    $("#nav").css("background-color", "transparent");
    if ($(window).scrollTop() + $(window).height() == $(document).height()) {
      $("#nav").css("background-color", "white");
    }
  }
  if (scrolledY < 10) {
    $("#nav").css("background-color", "white");
  }

});

var width = $(window).width();
$(window).on("resize", function() {
  if ($(this).width() > 1000) {
    $("#navtoggle").css("display", "none");
    $("#myNavbar").removeClass("collapse");
    $("#myNavbar").addClass("toggle");
    // $('#myNavbar').removeClass('.navbar-collapse');
  } else {
    $("#navtoggle").css("display", "block");
    $("#myNavbar").addClass("collapse");
    $("#myNavbar").removeClass("toggle");
    // $('#myNavbar').addClass('.navbar-collapse');
  }
});

var s = skrollr.init();
