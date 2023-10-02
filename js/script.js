
window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  const dropdowns = document.querySelectorAll('.fields');

  dropdowns.forEach((item) => {
    const dropdownMenu = item.querySelector('.fields__list');

    item.addEventListener('mouseover', () => {
      dropdownMenu.classList.add('show');
    }); 
    item.addEventListener('mouseout', () => {
      dropdownMenu.classList.remove('show');
    }); 
  })


  document.querySelectorAll('.footer__textarea').forEach(el => {
    el.style.height = el.setAttribute('style', 'height: ' + el.scrollHeight + 'px');
    el.classList.add('auto');
    el.addEventListener('input', e => {
        el.style.height = 'auto';
        el.style.height = (el.scrollHeight) + 'px';
    });
  });

})





