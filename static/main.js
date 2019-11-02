// Easescroll

$(window).load(function () {
  $("body").removeClass("preload");
});


$("html").easeScroll({
  frameRate: 60,
  animationTime: 1200,
  stepSize: 120,
  pulseAlgorithm: !0,
  pulseScale: 8,
  pulseNormalize: 1,
  accelerationDelta: 20,
  accelerationMax: 1,
  keyboardSupport: !0,
  arrowScroll: 50
});

// progress bar
//github.com/mburakerman/prognroll

$(function () {
  $("body").prognroll({
    height: 2, // progress bar height
    color: "#fc3a52", // progress bar background color
    custom: false // if you make it true, you can add your custom div and see it's scroll progress on the page
  });
});

// changing bg

$(window).scroll(function () {

  // selectors
  var $window = $(window),
    $body = $('body'),
    $panel = $('.panel');

  // Change 33% earlier than scroll position so colour is there when you arrive.
  var scroll = $window.scrollTop() + ($window.height() / 3);

  $panel.each(function () {
    var $this = $(this);

    // if position is within range of this panel.
    // So position of (position of top of div <= scroll position) && (position of bottom of div > scroll position).
    // Remember we set the scroll to 33% earlier in scroll var.
    if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {

      // Remove all classes on body with color-
      $body.removeClass(function (index, css) {
        return (css.match(/(^|\s)color-\S+/g) || []).join(' ');
      });

      // Add class of currently active div
      $body.addClass('color-' + $(this).data('color'));
    }
  });

}).scroll();


// menu

// console.clear();

// const app = (() => {
//   let body;
//   let menu;
//   let items;

//   const init = () => {
//     body = document.querySelector('body');
//     menu = document.querySelector('.menu-icon');
//     items = document.querySelectorAll('.nav__list-item');

//     applyListeners();
//   };

//   const applyListeners = () => {
//     menu.addEventListener('click', () => toggleClass(body, 'nav-active'));
//   };

//   const toggleClass = (element, stringClass) => {
//     if (element.classList.contains(stringClass))
//       element.classList.remove(stringClass);
//     else

//       element.classList.add(stringClass);
//   };

//   init();
// })();

// Vue.component('user-comment', user_comment);


// full screen

var elem = document.documentElement;
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) { /* Firefox */
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE/Edge */
    elem.msRequestFullscreen();
  }
}


// journey




