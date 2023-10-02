window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  const tabs = document.querySelectorAll('.details__tab');
  const blocks = document.querySelectorAll('.details__block');

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
  }


  tabs.forEach(tab => {
    tab.addEventListener('click', handleTabClick);
  });

  tabs[0].classList.add('tab-active');
  blocks[0].style.display = 'flex';
});