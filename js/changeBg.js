window.addEventListener('DOMContentLoaded', () => {
  'use strict';  
  const section = document.querySelector('.popular');
  const leaders = document.querySelector('.leaders');
  const header = document.querySelector('.header');
  const title = document.querySelector('.popular__title');
  const headerImg = document.querySelectorAll(".header__logo-link img");

  const change = document.querySelector('.change-bg')
  const changeContent = change.querySelector('.choose__content');

  const targetColor = '#FEFDFD';
  const targetReverseColor = '#010101';

 const changeHeight = section.offsetHeight;
 const changeTop = section.offsetTop;
 
  
  window.addEventListener('scroll', function() {
    foo();
  });

  const foo = () => {
    let scrollDistance = window.scrollY;

    // const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollPosition = scrollDistance + window.innerHeight;
    const contentTop = changeContent.getBoundingClientRect().top + window.scrollY - 120;
    const sectionBottom = section.getBoundingClientRect().bottom;
    const changeBottom = section.getBoundingClientRect().bottom;

    if (scrollDistance >= contentTop) {
      const distanceFromTop = scrollPosition - changeTop;
      const opacity = Math.min(distanceFromTop / (changeHeight + 30), 1);
      console.log('opacity: ', opacity);
      const currentColor = interpolateColor('#010101', targetColor, opacity);
      const currentReverseColor = interpolateColor('#FEFDFD', targetReverseColor, opacity);


      header.style.backgroundColor = currentColor;
      change.style.backgroundColor = currentColor;
      
      title.style.color = currentReverseColor;
      section.classList.add('popular_color-white')
      
    } else {
      title.style.color = '#FEFDFD';
      change.style.backgroundColor = '#010101';
      header.style.backgroundColor = '';
      section.classList.remove('popular_color-white')
      
    }


    if (contentTop > scrollDistance) {
      leaders.classList.add('leaders_theme_dark')

      header.classList.remove('header_theme_light')
      header.classList.add('header_theme_dark')
      headerImg.forEach((img) => {
        img.src = "img/logo-light.svg";
      })
           
    } else {
      leaders.classList.remove('leaders_theme_dark')

      header.classList.remove('header_theme_dark')
      header.classList.add('header_theme_light')
      headerImg.forEach((img) => {
        img.src = "img/logo.svg";
      })
    }
  }

  function interpolateColor(color1, color2, factor) {
    let result = "#";
    for (let i = 1; i < 7; i += 2) {
      const c1 = parseInt(color1.substr(i, 2), 16);
      const c2 = parseInt(color2.substr(i, 2), 16);
      const c = Math.round(c1 + (c2 - c1) * factor);
      let hex = c.toString(16);
      hex = hex.length === 1 ? "0" + hex : hex;
      result += hex;
    }
    return result;
  }

  foo();
});

