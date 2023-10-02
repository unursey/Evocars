
window.addEventListener('DOMContentLoaded', () => {
  'use strict';
  const page = document.querySelector(".page");
  const burger = page.querySelector(".burger");
  const btnOpen = page.querySelector(".header__burger-btn");
  const container = document.querySelector(".header")

  const pageOverfow = () => {
    const bodyWidth = page.offsetWidth;
    if (burger.classList.contains("burger_visible")) {
      page.style.overflow = "hidden";
      page.style.paddingRight = `${getScrollBarSize(bodyWidth)}px`;
      container.style.paddingRight = `${getScrollBarSize(bodyWidth)}px`;
    } else {
      page.style.overflow = "";
      page.style.paddingRight = "";
      container.style.paddingRight = "";
    }
  };

  const getScrollBarSize = (bodyWidth) => {
    let newBodyWidth = page.offsetWidth;
    if (newBodyWidth === bodyWidth) {
      return;
    }
    const x = newBodyWidth - bodyWidth;
    return x;
  };

  const closeBurger = () => {
    if (burger.classList.contains("burger_visible")) {
      burger.classList.remove("burger_visible");
    }
  };

  const addOpenBurger = () => {
    btnOpen.addEventListener("click", () => {
      burger.classList.add("burger_visible");  
      pageOverfow();
    });
  };

  const addCloseBurger = () => {
    page.addEventListener("click", (e) => {
      if (
        e.target === burger ||
        e.target.classList.contains("container") ||
        e.target.closest(".burger__btn-close") ||
        e.target.closest(".burger__btn") ||
        e.target.closest(".burger__item")
      ) {
        closeBurger();
        pageOverfow();
      }
    });
  };

  const setVh = () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }

  const hideBurger = () => {
    window.addEventListener("resize", function () {
    const windowWidth =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

      if (windowWidth > 992) {
        if (burger.classList.contains("burger_visible")) {
          burger.classList.remove("burger_visible");
          pageOverfow();
        }
      }
      setVh()
    });
  };



  addOpenBurger();
  addCloseBurger();
  hideBurger();
  setVh()
});