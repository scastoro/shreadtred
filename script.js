function showImages(el) {
  var windowHeight = jQuery(window).height();
  $(el).each(function() {
    var thisPos = $(this).offset().top;

    var topOfWindow = $(window).scrollTop();
    if (topOfWindow + windowHeight - 350 > thisPos) {
      $(this).addClass('fadeIn');
    }
  });
}

$(document).ready(function() {
  showImages('.gallery-item');
});

$(window).scroll(function() {
  showImages('.gallery-item');
});
