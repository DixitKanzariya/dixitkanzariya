
// skill set design logic
const block = document.querySelectorAll('.main-skill-box');
window.addEventListener('load', function(){
  block.forEach(item => {
    let numElement = item.querySelector('.num');
    let num = parseInt(numElement.innerText);
    let count = 0;
    let time = 2000 / num;
    let circle = item.querySelector('.circle');
    setInterval(() => {
      if(count == num){
        clearInterval();
      } else {
        count += 1;
        numElement.innerText = count;
      }
    }, time)
    circle.style.strokeDashoffset 
      = 503 - ( 503 * ( num / 100 ));
    let dots = item.querySelector('.dots');
    dots.style.transform = 
      `rotate(${360 * (num / 100)}deg)`;
    if(num == 100){
      dots.style.opacity = 0;
    }
  })
});

// typing js 
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Front-End Developer", "Web Developer", "Ui/Ux Developer", "Web Designer",];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    }
    else {
        cursorSpan.classList.remove("typing");
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    }
    else {
        cursorSpan.classList.remove("typing");
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 1100);
    }
}

document.addEventListener("DOMContentLoaded", function () { // On DOM Load initiate the effect
    if (textArray.length) setTimeout(type, newTextDelay + 250);
});


// animated skill
jQuery(document).ready(function () {
  jQuery(".progress-bar").each(function () {
    jQuery(this)
      .find(".progress-content")
      .animate(
        {
          width: jQuery(this).attr("data-percentage"),
        },
        2000
      );

    jQuery(this)
      .find(".progress-number-mark")
      .animate(
        { left: jQuery(this).attr("data-percentage") },
        {
          duration: 2000,
          step: function (now, fx) {
            var data = Math.round(now);
            jQuery(this)
              .find(".percent")
              .html(data + "%");
          },
        }
      );
  });
});

// prealoder style
$(document).ready(function() {
  setTimeout(function() {
    $('#preloader-main').addClass('loaded');
    if ($('#preloader-main').hasClass('loaded')) {
      $('#preloader-main').delay(9000).queue(function() {
        $(this).remove();
      });}
  }, 2000);});

// zeynepjs initialization for demo

$(function () {
  var zeynep = $('.zeynep').zeynep({
    opened: function () {
    }
  })



  // dynamically bind 'closing' event

  zeynep.on('closing', function () {

  })



  // handle zeynepjs overlay click

  $('.zeynep-overlay').on('click', function () {
    zeynep.close()
  })
  $('#close-bar').click(function () {
    zeynep.close()
  })



  // open zeynepjs side menu

  $('.btn-open').on('click', function () {
    zeynep.open()
  })
})


//add active classs
var selector = ".zeynep li";
$(selector).click(function () {
  $(selector).removeClass('active');
  $(this).addClass('active');
});


// fix header
$(document).ready(function() {
  var didScroll;
  var lastScrollTop = 0;
  var delta = 5;
  var navbarHeight = $('header').outerHeight();

  $(window).scroll(function(event) {
    didScroll = true;
  });

  setInterval(function() {
    if (didScroll) {
      hasScrolled();
      didScroll = false;
    }
  }, 200);

  function hasScrolled() {
    var st = $(this).scrollTop();
    if (st === 0) {
      $('header').removeClass('nav-down').addClass('nav-up');
    } else if (st >= 145) {
      $('header').removeClass('nav-up').addClass('nav-down');
    }
    lastScrollTop = st;
  }
});


// year js
document.getElementById("year").innerHTML = new Date().getFullYear();

// start popup js
jQuery(document).ready(function () {
  jQuery(".fancybox").fancybox();
});
// end popup js

window.addEventListener('scroll', function() {
  var sections = document.querySelectorAll('section');
  var navLinks = document.querySelectorAll('.header-right nav ul li');

  sections.forEach(function(section, index) {
      var position = section.getBoundingClientRect();

      if (position.top <= 150 && position.bottom >= 150) {
          navLinks.forEach(function(navLink) {
              navLink.classList.remove('active');
          });

          navLinks[index].classList.add('active');
      }
  });
});



// education-slider
jQuery("#education-slider").owlCarousel({
  autoplay: true,
  margin: 20,
  loop:true,
  animateOut: "fadeOut",
  animateIn: "fadeIn",
  responsiveClass: true,
  autoHeight: true,
  autoplayTimeout: 7000,
  smartSpeed: 800,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },

    600: {
      items: 2,
    },

    1024: {
      items: 2,
    },

    1366: {
      items: 2,
    },
  },
});

// education-slider
$('#skill-set-slider').owlCarousel({
  loop:true,
  margin:30,
  nav:true,
  autoplay:true,
  autoplayTimeout:3000,
  autoplayHoverPause:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:6
      }
  }
}) ; 

// SLIDER

$("a[href^='#']").click(function(e) {
	e.preventDefault();
	
	var position = $($(this).attr("href")).offset().top;

	$("body, html").animate({
		scrollTop: position
	} /* speed */ );
});