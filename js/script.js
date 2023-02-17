"use strict";

// burger icon
let menuIcon = document.querySelector(".menu-icon");
let navContainer = document.querySelector(".nav-container");
let navigationContainer = document.querySelector(".navigation_container");

menuIcon.addEventListener("click", () => {
  navigationContainer.classList.toggle("active");
  navContainer.classList.toggle("active");
  menuIcon.classList.toggle("active");
});

//End meun toggle

var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    800: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
  },
});

// platform
var platform_slider = new Splide(".platform_slider", {
  type: "loop",
  prev: "splide__arrow--prev .btn-n",
  next: "splide__arrow--next .btn-r",
  gap: "1rem",
  perPage: 6,
  breakpoints: {
    576: {
      perPage: 1,
    },
    992: {
      perPage: 2,
    },
    1350: {
      perPage: 3,
    },
  },
});
platform_slider.mount();
// end platform

var acc = document.getElementsByClassName("accordion_btn");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
