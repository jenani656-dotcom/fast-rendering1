// ========================
// Navigation Menu Toggle
// ========================
function toggleMenu(btn) {
  const open = btn.getAttribute('aria-expanded') === 'true';
  btn.setAttribute('aria-expanded', String(!open));
  const nav = document.querySelector('.nav-links');

  if (!open) {
    nav.style.display = 'flex';
    nav.style.flexDirection = 'column';
    nav.style.position = 'absolute';
    nav.style.right = '32px';
    nav.style.top = '76px';
    nav.style.background = 'rgba(8,12,24,0.9)';
    nav.style.padding = '12px';
    nav.style.borderRadius = '10px';
    nav.style.boxShadow = '0 12px 30px rgba(2,6,23,0.6)';
  } else {
    nav.style.display = '';
    nav.style.position = '';
  }
}

// ========================
// CTA Button Animation
// ========================
function animateCTA(el) {
  el.animate([
    { transform: 'translateY(0)', offset: 0 },
    { transform: 'translateY(-6px)', offset: 0.6 },
    { transform: 'translateY(0)', offset: 1 }
  ], { duration: 420, easing: 'cubic-bezier(.2,.9,.2,1)' });

  alert('Demo started — this would open onboarding in the real app');
}

// ========================
// Fade-Up Animation on Load
// ========================
window.addEventListener('load', () => {
  document.querySelectorAll('.fade-up').forEach(el => el.classList.add('visible'));
});

// ========================
// Team Card Parallax Tilt
// ========================
(function () {
  const cards = document.querySelectorAll('.team-card .media');
  const isTouch = matchMedia('(hover: none)').matches;
  if (isTouch) return;

  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width;   // 0..1
      const y = (e.clientY - r.top) / r.height;   // 0..1
      const rx = (y - 0.5) * -8; // tilt X
      const ry = (x - 0.5) * 8;  // tilt Y
      card.style.transform = `translateY(-4px) rotateX(${rx}deg) rotateY(${ry}deg)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
})();