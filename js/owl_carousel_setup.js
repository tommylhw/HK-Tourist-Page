var owl = $('.owl-carousel');

owl.owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    dots: true,
    items: 1,
    autoplay: true,
    autoplayTimeout: 5000,
    smartSpeed: 1000
});

$('.prev').click(function() {
    owl.trigger('prev.owl.carousel');
    if (autoplay) {
        owl.trigger('stop.owl.autoplay');
        owl.trigger('play.owl.autoplay',[5000]);
    }
});

$('.next').click(function() {
    owl.trigger('next.owl.carousel');
    if (autoplay) {
        owl.trigger('stop.owl.autoplay');
        owl.trigger('play.owl.autoplay',[5000]);
    }
});

$('.owl-dot').click(function() {
    if (autoplay) {
        owl.trigger('stop.owl.autoplay');
        owl.trigger('play.owl.autoplay',[5000]);
    }
});

var autoPlay;
autoplay = true;

function AutoPlayController() {
    autoplay = !autoplay;
    SetPlayPauseIcon();
    if (autoplay) {
        owl.trigger('play.owl.autoplay',[5000]);
    } else {
        owl.trigger('stop.owl.autoplay');
    }
}

function SetPlayPauseIcon() {
  if (autoplay) {
    $('#play-pause-btn').removeClass("fa-play-circle");
    $('#play-pause-btn').addClass("fa-pause-circle");
  } else {
    $('#play-pause-btn').addClass("fa-play-circle");
    $('#play-pause-btn').removeClass("fa-pause-circle");
  }
}