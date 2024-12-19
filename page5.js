// Simple script to handle image sliding on hover
document.querySelectorAll('.image-slider').forEach(slider => {
    let images = slider.querySelectorAll('img');
    let currentIndex = 0;
  
    slider.addEventListener('mouseover', () => {
      setInterval(() => {
        images[currentIndex].style.opacity = 0;
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].style.opacity = 1;
      }, 2000);
    });
  });
  