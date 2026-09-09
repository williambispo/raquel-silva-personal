document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.querySelector('[data-carousel]');
  if (!carousel) return;
  const slides = [...carousel.querySelectorAll('.testimonial')]; const previous = document.querySelector('[data-carousel-prev]'); const next = document.querySelector('[data-carousel-next]'); let current = 0;
  const show = index => { current = (index + slides.length) % slides.length; slides.forEach((slide, i) => { slide.classList.toggle('active', i === current); slide.setAttribute('aria-hidden', String(i !== current)); }); };
  previous?.addEventListener('click', () => show(current - 1)); next?.addEventListener('click', () => show(current + 1)); document.addEventListener('keydown', event => { if (event.key === 'ArrowLeft') show(current - 1); if (event.key === 'ArrowRight') show(current + 1); }); show(0);
});
