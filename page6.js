document.addEventListener('DOMContentLoaded', () => {
    // Row sliding
    const rowSlider = document.querySelector('.row-slider');
    const rowControls = document.querySelectorAll('.row-controls button');
    let currentRowIndex = 0;
  
    rowControls.forEach((control) => {
      control.addEventListener('click', () => {
        const rows = document.querySelectorAll('.row');
        const rowHeight = rows[0].offsetHeight;
  
        if (control.classList.contains('next-row')) {
          currentRowIndex = Math.min(currentRowIndex + 1, rows.length - 1);
        } else {
          currentRowIndex = Math.max(currentRowIndex - 1, 0);
        }
  
        rowSlider.style.transform = `translateY(-${currentRowIndex * rowHeight}px)`;
      });
    });
  
    // Image sliding inside boxes
    const boxes = document.querySelectorAll('.box');
  
    boxes.forEach((box) => {
      const images = box.querySelectorAll('.image');
      const prevImageBtn = box.querySelector('.prev-image');
      const nextImageBtn = box.querySelector('.next-image');
      let currentImageIndex = 0;
  
      const updateImageSlider = () => {
        images.forEach((img, index) => {
          img.classList.toggle('active', index === currentImageIndex);
        });
      };
  
      prevImageBtn.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        updateImageSlider();
      });
  
      nextImageBtn.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        updateImageSlider();
      });
  
      updateImageSlider(); // Initialize first image as active
    });
  });
  