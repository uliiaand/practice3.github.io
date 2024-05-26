// Add this script at the end of your HTML file, before the closing </body> tag
document.addEventListener('DOMContentLoaded', function() {
  const productsContent = document.querySelector('.products__content');
  const productsSliders = document.querySelectorAll('.products__slider');
  const prevBtn = document.querySelector('.products__prev');
  const nextBtn = document.querySelector('.products__next');
  let currentSlide = 0;

  function goToSlide(n) {
    productsContent.style.transform = `translateX(-${n * 100}%)`;
    currentSlide = n;
    updateSliderIndicators();
  }

  function updateSliderIndicators() {
    productsSliders.forEach(slider => slider.classList.remove('slide-active'));
    productsSliders[currentSlide].classList.add('slide-active');
  }

  prevBtn.addEventListener('click', function() {
    if (currentSlide === 0) {
      goToSlide(1); // Assuming there are 3 slides
    } else {
      goToSlide(currentSlide - 1);
    }
  });

  nextBtn.addEventListener('click', function() {
    if (currentSlide === 1) { // Assuming there are 3 slides
      goToSlide(0);
    } else {
      goToSlide(currentSlide + 1);
    }
  });

  // Initialize the slider
  goToSlide(currentSlide);
});