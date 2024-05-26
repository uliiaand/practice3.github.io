// Add this script at the end of your HTML file, before the closing </body> tag
document.addEventListener('DOMContentLoaded', function() {
    const productsContent = document.querySelector('.products__content');
    const productsSliders = document.querySelectorAll('.products__slider');
    const prevBtn = document.querySelector('.products__prev');
    const nextBtn = document.querySelector('.products__next');
    const categoryTabs = document.querySelectorAll('.products__categories_tab');
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
  
    function filterProducts(category) {
      const allProducts = document.querySelectorAll('.products__item');
      allProducts.forEach(product => {
        if (category === 'all' || product.dataset.category === category) {
          product.style.display = 'block';
        } else {
          product.style.display = 'none';
        }
      });
    }
  
    prevBtn.addEventListener('click', function() {
      if (currentSlide === 0) {
        goToSlide(2); // Assuming there are 3 slides
      } else {
        goToSlide(currentSlide - 1);
      }
    });
  
    nextBtn.addEventListener('click', function() {
      if (currentSlide === 2) { // Assuming there are 3 slides
        goToSlide(0);
      } else {
        goToSlide(currentSlide + 1);
      }
    });
  
    categoryTabs.forEach(tab => {
      tab.addEventListener('click', function() {
        categoryTabs.forEach(t => t.classList.remove('cat-active'));
        this.classList.add('cat-active');
        filterProducts(this.dataset.category);
      });
    });
  
    // Initialize the slider and filter
    goToSlide(currentSlide);
    filterProducts('all');
  });