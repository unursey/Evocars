window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  const tabs = document.querySelectorAll('.choose__tab');
  const blocks = document.querySelectorAll('.choose__block');
  const sliders = document.querySelectorAll('.choose__slider');

  function handleTabClick() {
    const tabValue = this.getAttribute('data-tab');

    tabs.forEach(tab => {
      tab.classList.remove('tab-active');
    });

    this.classList.add('tab-active');

    blocks.forEach(block => {
      const blockValue = block.getAttribute('data-content');
      if (blockValue === tabValue) {
        block.style.display = 'flex';
      } else {
        block.style.display = 'none';
      }
    });

    sliders.forEach(slider => {
      const sliderValue = slider.getAttribute('data-slider');
      if (sliderValue === tabValue) {
        slider.style.display = 'flex';
      } else {
        slider.style.display = 'none';
      }
    });
  }

  function handleOptionClick(event) {
    const option = event.target;
    const optionsList = option.parentNode.querySelectorAll('.choose__option');

    optionsList.forEach((item) => {
      item.classList.remove('active-option');
    });

    option.classList.add('active-option');

    const block = option.closest('.choose__block');
    const priceElement = block.querySelector('.choose__price');
    const selectedOption = option.textContent;
    const selectedProduct = block.getAttribute('data-content');
    const price = getPrice(selectedProduct, selectedOption);
    priceElement.textContent = `от ${price} ₽`;

    const optionIndex = Array.from(optionsList).indexOf(option);
    const progressBar = block.querySelector(".choose__progress");
    const optionHeight = optionsList[0].clientHeight;
    const progressHeight = (((optionIndex + 1)) * optionHeight) + ((optionIndex + 1) * 16 - 8) ;
    progressBar.style.height = progressHeight + "px"
  }

  function getPrice(product, option) {
    if (product === '1') {
      switch (option) {
        case 'Me':
          return '9 000 000';
        case 'We':
          return '13 000 000';
        case 'You':
          return '18 000 000';
        default:
          return 0;
      }
    } else if (product === '2') {
      switch (option) {
        case 'Me':
          return '8 000 000';
        case 'We':
          return '11 000 000';
        case 'You':
          return '16 000 000';
        default:
          return 0;
      }
    } else if (product === '3') {
      switch (option) {
        case 'Me':
          return '7 000 000';
        case 'We':
          return '12 000 000';
        case 'You':
          return '15 000 000';
        default:
          return 0;
      }
    } else if (product === '4') {
      switch (option) {
        case 'Me':
          return '10 000 000';
        case 'We':
          return '14 000 000';
        case 'You':
          return '19 000 000';
        default:
          return 0;
      }
    }
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', handleTabClick);
  });

  tabs[0].classList.add('tab-active');
  blocks[0].style.display = 'flex';
  sliders[0].style.display = 'flex';

  blocks.forEach((block) => {
    const options = block.querySelectorAll('.choose__option');
    const priceElement = block.querySelector('.choose__price');
    options[0].classList.add('active-option');
    const selectedOption = options[0].textContent;
    const selectedProduct = block.getAttribute('data-content');
    const price = getPrice(selectedProduct, selectedOption);
    priceElement.textContent = `от ${price} ₽`;
    options.forEach((option) => {
      option.addEventListener('click', handleOptionClick);

    });
  });
});