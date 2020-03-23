$(function() {
  "use strict";
  $(".js-show")
    .hide()
    .fadeIn(1000);

  $(window).scroll(function() {
    $(".js-fadeIn").each(function() {
      var scroll = $(window).scrollTop();
      var target = $(this).offset().top;
      var trigger = $(window).height() + 50;
      if (scroll > target - trigger) {
        $(this).addClass("js-scrollIn");
      }
    });
  });
  var $footer = $("#js-footer");
  if ($footer.offset().top + $footer.outerHeight < $(window).innnerHeight()) {
    $footer.attr({
      style:
        "posisiton:fixed; top:" +
        ($(window).innderHeight - $footer.outerHeight()) +
        "px;"
    });
  }
});
