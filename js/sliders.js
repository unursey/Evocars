window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  const simpleSlider = () => {
    const swiper = new Swiper(".simple-swiper", {
      effect: "fade",
      loop: true,
      navigation: {
        nextEl: ".slider-next",
        prevEl: ".slider-prev",
      },

      fadeEffect: {
        crossFade: true
      },
      on: {
        slideChangeTransitionStart: function() {
          this.slides.transition().forEach(function(slide) {
            slide.style.opacity = 0;
          });
        },
        slideChangeTransitionEnd: function() {
          this.slides[this.activeIndex].style.opacity = 1;
        }
      }
    });
  };

  simpleSlider();

  const gallerySlider = (selector, selector2, next, prev) => {
    const swiper = new Swiper(selector, {
      loop: true,
      spaceBetween: 10,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesProgress: true,
    });
    const swiper2 = new Swiper(selector2, {
      loop: true,
      spaceBetween: 10,
      navigation: {
        nextEl: next,
        prevEl: prev,
      },
      thumbs: {
        swiper: swiper,
      },
    });
  };


  const getSliders = () => {
    const allSliders = document.querySelectorAll('.gallery')
    allSliders.forEach((item) => {
      const selector = item.querySelector(".gallery__swiper-gallery");
      const selector2 = item.querySelector(".gallery__swiper-gallery2");
      const next = item.querySelector(".gallery__button-next");
      const prev = item.querySelector(".gallery__button-prev");
      gallerySlider(selector, selector2, next, prev);
    })
  }
  getSliders();


  const duoSlider = () => {
    const swiper = new Swiper(".duo-swiper", {
      slidesPerView: 2,
      slidesPerGroup: 1,
      loop: true,

      navigation: {
        nextEl: ".recommend__button-next",
        prevEl: ".recommend__button-prev",
      },

    });
  };

  duoSlider();
})