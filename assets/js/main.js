/* Configuração central: altere estes dados quando necessário. */
const siteConfig = {
  whatsapp: '5561991218668',
  whatsappMessage: 'Olá, Raquel! Vim pelo seu site e gostaria de saber mais sobre os seus treinos.',
  instagram: 'https://instagram.com/raquelsliva',
  email: 'contato@raquelsilva.com',
  location: 'Novo Gama, Santa Maria, Gama e proximidades',
  hours: 'De 8:00 às 17:00'
};

document.addEventListener('DOMContentLoaded', () => {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`;
  document.querySelectorAll('[data-whatsapp]').forEach(link => { link.href = whatsappUrl; link.target = '_blank'; link.rel = 'noopener noreferrer'; });
  document.querySelectorAll('[data-instagram]').forEach(link => { link.href = siteConfig.instagram; });
  document.querySelectorAll('[data-year]').forEach(el => { el.textContent = new Date().getFullYear(); });

  const header = document.querySelector('.site-header');
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  const closeMenu = () => { if (!toggle || !nav) return; toggle.setAttribute('aria-expanded', 'false'); toggle.setAttribute('aria-label', 'Abrir menu'); nav.classList.remove('open'); document.body.classList.remove('menu-open'); };
  if (toggle && nav) {
    toggle.addEventListener('click', () => { const open = toggle.getAttribute('aria-expanded') === 'true'; toggle.setAttribute('aria-expanded', String(!open)); toggle.setAttribute('aria-label', open ? 'Abrir menu' : 'Fechar menu'); nav.classList.toggle('open', !open); document.body.classList.toggle('menu-open', !open); });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
    document.addEventListener('click', event => { if (nav.classList.contains('open') && !nav.contains(event.target) && !toggle.contains(event.target)) closeMenu(); });
    document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
  }
  const updateHeader = () => header?.classList.toggle('scrolled', window.scrollY > 12);
  updateHeader(); window.addEventListener('scroll', updateHeader, { passive: true });

  document.querySelectorAll('a[href^="#"]').forEach(anchor => anchor.addEventListener('click', event => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) { event.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
  }));

  const revealItems = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealItems.length) {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); } }), { threshold: .12 });
    revealItems.forEach(item => observer.observe(item));
  } else revealItems.forEach(item => item.classList.add('is-visible'));
});
