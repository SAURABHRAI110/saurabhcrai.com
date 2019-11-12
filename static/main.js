// Easescroll

// $(window).load(function () {
//   $("body").removeClass("preload");
// });

let accCounter = 0;
let totalCount = 127;
const minDeg = 1;
const maxDeg = 72;
const particlesClasses = [{
    class: "pop-top"
  },
  {
    class: "pop-top-left"
  },
  {
    class: "pop-top-right"
  },
  {
    class: "pop-bottom-right"
  },
  {
    class: "pop-bottom-left"
  },
];

document.getElementById('totalCounter').innerText = totalCount;

document.getElementById('clap').onmouseover = function () {
  let sonarClap = document.getElementById('sonar-clap');
  sonarClap.classList.add('hover-active');
  setTimeout(() => {
    sonarClap.classList.remove('hover-active');
  }, 2000);
}

document.getElementById('clap').onclick = function () {
  const clap = document.getElementById('clap');
  const clickCounter = document.getElementById("clicker");
  const particles = document.getElementById('particles');
  const particles2 = document.getElementById('particles-2');
  const particles3 = document.getElementById('particles-3');
  clap.classList.add('clicked');
  upClickCounter();

  runAnimationCycle(clap, 'scale');

  if (!particles.classList.contains('animating')) {
    animateParticles(particles, 700);
  } else if (!particles2.classList.contains('animating')) {
    animateParticles(particles2, 700);
  } else if (!particles3.classList.contains('animating')) {
    animateParticles(particles3, 700);
  }
}

function upClickCounter() {
  const clickCounter = document.getElementById("clicker");
  const totalClickCounter = document.getElementById('totalCounter');

  accCounter++;
  clickCounter.children[0].innerText = '+' + accCounter;
  totalClickCounter.innerText = totalCount + accCounter;

  if (clickCounter.classList.contains('first-active')) {
    runAnimationCycle(clickCounter, 'active');
  } else {
    runAnimationCycle(clickCounter, 'first-active');
  }
  runAnimationCycle(totalClickCounter, 'fader');
}

function runAnimationCycle(el, className, duration) {
  if (el && !el.classList.contains(className)) {
    el.classList.add(className);
  } else {
    el.classList.remove(className);
    void el.offsetWidth; // Trigger a reflow in between removing and adding the class name
    el.classList.add(className);
  }
}

function runParticleAnimationCycle(el, className, duration) {
  if (el && !el.classList.contains(className)) {
    el.classList.add(className);
    setTimeout(() => {
      el.classList.remove(className);
    }, duration);
  }
}

function animateParticles(particles, dur) {
  addRandomParticlesRotation(particles.id, minDeg, maxDeg);
  for (let i = 0; i < particlesClasses.length; i++) {
    runParticleAnimationCycle(particles.children[i], particlesClasses[i].class, dur);
  }
  // Boolean functionality only to activate particles2, particles3 when needed
  particles.classList.add('animating');
  setTimeout(() => {
    particles.classList.remove('animating');
  }, dur);
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function addRandomParticlesRotation(particlesName, minDeg, maxDeg) {
  const particles = document.getElementById(particlesName);
  const randomRotationAngle = getRandomInt(minDeg, maxDeg) + 'deg';
  particles.style.transform = `rotate(${randomRotationAngle})`;
}

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
  } else if (elem.mozRequestFullScreen) {
    /* Firefox */
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) {
    /* Chrome, Safari & Opera */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    /* IE/Edge */
    elem.msRequestFullscreen();
  }
}


// journey
