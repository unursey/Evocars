window.addEventListener('DOMContentLoaded', () => {
  'use strict'; 
  const labels = document.querySelectorAll('.radio__choose-car .radio__label');
  const imgElement = document.getElementById('radio-image');
  let lastCheckedRadio = null;

  labels.forEach(function(label) {
    label.addEventListener('mouseover', function() {
      const image = `img/order/${this.dataset.image}.png`;
      imgElement.src = image;
    });

    label.addEventListener('mouseout', function() {
      if (lastCheckedRadio) {
        const image = lastCheckedRadio;
        imgElement.src = image;
      } else {
        imgElement.src = 'img/order/gray.png';
      }
    });

    label.addEventListener('click', function() {
      const image = `img/order/${this.dataset.image}.png`;
      imgElement.src = image;
      lastCheckedRadio = image;
    });
  });
});
