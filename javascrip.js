// FAQ Toggle
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
      const answer = button.nextElementSibling;
      const isOpen = answer.style.display === 'block';
  
      document.querySelectorAll('.faq-answer').forEach(a => a.style.display = 'none');
      answer.style.display = isOpen ? 'none' : 'block';
    });
  });
  
  // Slider Functionality
  let currentSlide = 0;
  const slides = document.querySelectorAll('.slide');
  
  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove('active');
      if (i === index) {
        slide.classList.add('active');
      }
    });
  }
  
  document.querySelector('.prev').addEventListener('click', () => {
    currentSlide = (currentSlide === 0) ? slides.length - 1 : currentSlide - 1;
    showSlide(currentSlide);
  });
  
  document.querySelector('.next').addEventListener('click', () => {
    currentSlide = (currentSlide === slides.length - 1) ? 0 : currentSlide + 1;
    showSlide(currentSlide);
  });
  
  // Initialize the first slide
  showSlide(currentSlide);

  
  // Function to generate star ratings
function generateStarRating(starCount) {
    const ratingContainer = document.getElementById('rating-container');
    ratingContainer.innerHTML = ''; // Clear any existing stars
  
    // Add stars based on the star count
    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div');
      star.classList.add('star');
      ratingContainer.appendChild(star);
    }
  }
  
  // Example: Call the function with the number of stars you want (4 or 5)
  generateStarRating(5);
  