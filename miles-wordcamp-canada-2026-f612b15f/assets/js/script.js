// ===================================================
// WORDCAMP CANADA 2026 — JavaScript
// ===================================================

// :::SECTION:Header Scroll Effect:::
const header = document.querySelector('.hero-nav');

if (header) {
  let ticking = false;

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        if (window.pageYOffset > 100) {
          header.classList.add('is-scrolled');
        } else {
          header.classList.remove('is-scrolled');
        }
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
}

// :::SECTION:Smooth Scrolling:::
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const target = document.querySelector(targetId);
    if (target) {
      e.preventDefault();
      const headerHeight = header ? header.offsetHeight : 0;
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// :::SECTION:Scroll Animations:::
const animatedElements = document.querySelectorAll('.animate-on-scroll');

if (animatedElements.length > 0) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  animatedElements.forEach(el => observer.observe(el));
}

// :::SECTION:Countdown Timer:::
function updateCountdown() {
  const eventDate = new Date('2026-11-05T09:00:00-08:00');
  const now = new Date();
  const diff = eventDate - now;

  const countdownEl = document.getElementById('countdown-days');
  if (!countdownEl) return;

  if (diff <= 0) {
    countdownEl.textContent = '🎉';
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  countdownEl.textContent = days;
}

updateCountdown();
setInterval(updateCountdown, 60000);

// :::SECTION:Newsletter Form:::
const newsletterForm = document.querySelector('.newsletter-form');

if (newsletterForm) {
  newsletterForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const input = this.querySelector('.newsletter-input');
    const btn = this.querySelector('.newsletter-btn');
    
    if (input && input.value) {
      const originalText = btn.textContent;
      btn.textContent = 'Subscribed ✓';
      btn.style.background = 'var(--color-accent-hover)';
      input.value = '';
      
      setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = '';
      }, 3000);
    }
  });
}

// :::SECTION:Active Nav Highlighting:::
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.hero-nav-links a');

if (sections.length > 0 && navLinks.length > 0) {
  let navTicking = false;

  window.addEventListener('scroll', () => {
    if (!navTicking) {
      window.requestAnimationFrame(() => {
        let current = '';
        const headerHeight = header ? header.offsetHeight + 100 : 100;

        sections.forEach(section => {
          const sectionTop = section.offsetTop - headerHeight;
          if (window.pageYOffset >= sectionTop) {
            current = section.getAttribute('id');
          }
        });

        navLinks.forEach(link => {
          link.style.color = '';
          if (link.getAttribute('href') === '#' + current) {
            link.style.color = 'var(--color-text)';
          }
        });

        navTicking = false;
      });
      navTicking = true;
    }
  }, { passive: true });
}