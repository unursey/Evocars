window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  const resizeFoo = () => {
    const circleWrap = document.querySelector('.element__wrap');
    const circleWrapWidth = circleWrap.offsetWidth;
    circleWrap.style.height = `${circleWrapWidth}px`;
  }
  window.addEventListener('resize', () => {
    resizeFoo();
  });
  resizeFoo();


  const zones = document.querySelectorAll(".zones");

  function isMouseOver(element, event) {
    let rect = element.getBoundingClientRect();
    return (
      rect.left <= event.clientX &&
      event.clientX <= rect.right &&
      rect.top <= event.clientY &&
      event.clientY <= rect.bottom
    );
  }
  
  function handleMouseOver(event) {
    let isActiveZone = false;
  
    zones.forEach(function (element) {
      if (isMouseOver(element, event)) {
        element.classList.add("active");
        isActiveZone = true;
      } else {
        element.classList.remove("active");
      }
    });
  
    if (!isActiveZone) {
      document.querySelector("#border").classList.remove("active");
    } else {
      document.querySelector("#border").classList.add("active");
    }
  }
  
  document.addEventListener("mousemove", handleMouseOver);

  window.addEventListener('scroll', function() {
    let scrollPosition = Math.min(window.scrollY, 40);
    const movingElement = document.getElementById('circleWrap');
    movingElement.style.top = scrollPosition + 'px';
  })
})
