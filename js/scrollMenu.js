window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  const header = document.querySelector(".header");

  const foo = () => {
    if (
      document.documentElement.scrollTop > 50
    ) {
      header.classList.add('scroll')

    } else {
      header.classList.remove('scroll')
    }
  }

  window.addEventListener("scroll", () => {
    foo()
  })


  foo();
})
