// Scroll-triggered fade-in animation
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));

// Navbar scroll shadow
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 10);
});

// Mobile menu toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Close mobile menu on link click
navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});

// DX Project Modal
const dxModal = document.getElementById('dxModal');
if (dxModal) {
  const openBtn = document.getElementById('openDxModal');
  const closeBtn = dxModal.querySelector('.dx-close');
  const tabs = dxModal.querySelectorAll('.dx-tab');
  const panels = dxModal.querySelectorAll('.dx-panel');

  function openDxModal() {
    dxModal.classList.add('open');
    document.body.classList.add('dx-modal-open');
  }

  function closeDxModal() {
    dxModal.classList.remove('open');
    document.body.classList.remove('dx-modal-open');
  }

  if (openBtn) openBtn.addEventListener('click', openDxModal);
  closeBtn.addEventListener('click', closeDxModal);

  dxModal.addEventListener('click', (e) => {
    if (e.target === dxModal) closeDxModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && dxModal.classList.contains('open')) closeDxModal();
  });

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      tabs.forEach((t) => t.classList.remove('active'));
      tab.classList.add('active');
      const target = tab.getAttribute('data-tab');
      const panel = document.getElementById('dx-' + target);
      if (panel) {
        panel.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}
