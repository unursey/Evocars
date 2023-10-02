window.addEventListener('DOMContentLoaded', () => {
  'use strict';
  let prevScrollPos = window.scrollY;

  window.addEventListener('scroll', function() {
    var currentScrollPos = window.scrollY;
    const stickyBlock = document.querySelector('.panel');
    const targetSection = document.querySelector('.footer');
      
    const targetSectionPosition = targetSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (targetSectionPosition < windowHeight && currentScrollPos > prevScrollPos) {
      stickyBlock.classList.add('panel_hide');
    } else {
      stickyBlock.classList.remove('panel_hide');
    }

    prevScrollPos = currentScrollPos;

  });
})  