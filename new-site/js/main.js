/* Poly Concreting — main.js */

// ── Sticky nav ─────────────────────────────────────────────
const header = document.getElementById('site-header');
if (header) {
  const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 40);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

// ── Mobile nav ─────────────────────────────────────────────
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobile-nav');
if (hamburger && mobileNav) {
  hamburger.addEventListener('click', () => {
    const open = mobileNav.classList.toggle('open');
    hamburger.classList.toggle('open', open);
    hamburger.setAttribute('aria-expanded', open);
    mobileNav.setAttribute('aria-hidden', !open);
    document.body.style.overflow = open ? 'hidden' : '';
  });
  // Close on link click
  mobileNav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      mobileNav.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    });
  });
}

// ── FAQ accordion ───────────────────────────────────────────
document.querySelectorAll('.faq-trigger').forEach(trigger => {
  trigger.addEventListener('click', () => {
    const expanded = trigger.getAttribute('aria-expanded') === 'true';
    // Close all
    document.querySelectorAll('.faq-trigger').forEach(t => {
      t.setAttribute('aria-expanded', 'false');
      t.nextElementSibling?.classList.remove('open');
    });
    // Open clicked (unless it was open)
    if (!expanded) {
      trigger.setAttribute('aria-expanded', 'true');
      trigger.nextElementSibling?.classList.add('open');
    }
  });
});

// ── Footer year ─────────────────────────────────────────────
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ── Scroll reveal ────────────────────────────────────────────
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animation = 'fadeUp 0.6s cubic-bezier(0,0,0.3,1) both';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('[data-reveal]').forEach(el => observer.observe(el));
}

// ── Quote form ───────────────────────────────────────────────
const quoteForm = document.getElementById('quote-form');
if (quoteForm) {
  quoteForm.addEventListener('submit', e => {
    e.preventDefault();
    const data = new FormData(quoteForm);
    // Replace with your form handler (Netlify, Formspree, EmailJS, etc.)
    // Example: fetch('/api/quote', { method: 'POST', body: data })
    const successEl = document.getElementById('form-success');
    if (successEl) {
      quoteForm.style.display = 'none';
      successEl.style.display = 'block';
    }
  });
}
