// ======== projects-slider.js ========
document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.slide');
  const prevArrow = document.querySelector('.arrow.left');
  const nextArrow = document.querySelector('.arrow.right');
  const navDots  = document.querySelectorAll('.nav-dot');
  let currentIndex = 0;
  const totalSlides = slides.length;

  function showSlide(idx) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === idx);
      navDots[i].classList.toggle('active', i === idx);
    });
    currentIndex = idx;
  }

  function goNext() {
    const nextIdx = (currentIndex + 1) % totalSlides;
    showSlide(nextIdx);
  }

  function goPrev() {
    const prevIdx = (currentIndex - 1 + totalSlides) % totalSlides;
    showSlide(prevIdx);
  }

  // Flechas
  if (nextArrow) nextArrow.addEventListener('click', goNext);
  if (prevArrow) prevArrow.addEventListener('click', goPrev);

  // Puntos
  navDots.forEach((dot, i) => {
    dot.addEventListener('click', () => showSlide(i));
  });

  // Inicia mostrando la primera imagen
  showSlide(0);
});
