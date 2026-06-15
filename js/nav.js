/* nav.js — Gestion de la navigation commune */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Hamburger ─────────────────────────────────── */
  const hamburger = document.querySelector('.hamburger');
  const sidebar   = document.querySelector('.sidebar');

  if (hamburger && sidebar) {
    hamburger.addEventListener('click', () => {
      sidebar.classList.toggle('open');
      hamburger.setAttribute('aria-expanded',
        sidebar.classList.contains('open') ? 'true' : 'false');
    });

    // Fermer la nav en cliquant en dehors sur mobile
    document.addEventListener('click', (e) => {
      if (!sidebar.contains(e.target) && !hamburger.contains(e.target)) {
        sidebar.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ── Lien actif ────────────────────────────────── */
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.sidebar nav a');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    }
  });

});
