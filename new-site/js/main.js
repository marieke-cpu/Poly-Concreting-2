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
const WEB3FORMS_ACCESS_KEY = 'b2c0b7c1-c7d7-4c8d-9e45-3a8f415d2dce';
const QUOTE_EMAIL = 'quotes@polyconcretingqld.com.au';
const quoteForm = document.getElementById('quote-form');
if (quoteForm) {
  quoteForm.addEventListener('submit', async e => {
    e.preventDefault();
    if (!quoteForm.checkValidity()) {
      quoteForm.reportValidity();
      return;
    }
    const submitBtn = quoteForm.querySelector('button[type="submit"]');
    const originalText = submitBtn ? submitBtn.textContent : '';
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending...';
    }

    const formData = new FormData(quoteForm);
    const data = Object.fromEntries(formData.entries());
    formData.set('access_key', WEB3FORMS_ACCESS_KEY);
    formData.set('subject', 'New quote request - Poly Concreting new site');
    formData.set('from_name', `${data.fname || ''} ${data.lname || ''}`.trim() || 'Poly Concreting website');
    formData.set('inbox', 'Quotes');
    formData.set('quote_email', QUOTE_EMAIL);
    formData.set('botcheck', '');

    try {
      if (WEB3FORMS_ACCESS_KEY === 'YOUR_WEB3FORMS_ACCESS_KEY') {
        console.warn('Web3Forms access key is not configured in new-site/js/main.js');
        alert('Something went wrong. Please call 0481 445 041.');
        return;
      } else {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          body: formData,
        });
        const result = await response.json();
        if (!response.ok) {
          alert('Error: ' + (result.message || 'Your quote could not be sent. Please call 0481 445 041.'));
          return;
        }
      }
    } catch (error) {
      console.error('Web3Forms submission failed', error);
      quoteForm.submit();
      return;
    } finally {
      if (submitBtn) {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
      }
    }

    const successEl = document.getElementById('form-success');
    if (successEl) {
      quoteForm.reset();
      quoteForm.style.display = 'none';
      successEl.style.display = 'block';
    }
  });
}
