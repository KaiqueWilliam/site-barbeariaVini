// VN Barber Barbearia — interações da landing page

document.addEventListener('DOMContentLoaded', () => {
  // Ano no rodapé
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Header com fundo ao rolar
  const header = document.getElementById('site-header');
  const onScroll = () => {
    if (window.scrollY > 12) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // Menu mobile
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const iconOpen = document.getElementById('icon-open');
  const iconClose = document.getElementById('icon-close');

  const closeMenu = () => {
    mobileMenu.classList.add('hidden');
    iconOpen.classList.remove('hidden');
    iconClose.classList.add('hidden');
  };

  menuBtn.addEventListener('click', () => {
    const isOpen = !mobileMenu.classList.contains('hidden');
    if (isOpen) {
      closeMenu();
    } else {
      mobileMenu.classList.remove('hidden');
      iconOpen.classList.add('hidden');
      iconClose.classList.remove('hidden');
    }
  });

  mobileMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  // Revelar seções ao rolar
  const revealEls = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  revealEls.forEach((el) => observer.observe(el));

  // Botão voltar ao topo
  const backToTop = document.getElementById('back-to-top');
  const toggleBackToTop = () => {
    if (window.scrollY > 480) backToTop.classList.add('visible');
    else backToTop.classList.remove('visible');
  };
  toggleBackToTop();
  window.addEventListener('scroll', toggleBackToTop, { passive: true });
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
