// ===================================================
// TROY CHAPLIN — Portfolio & Blog
// JavaScript Interactions
// ===================================================

// :::SECTION:Header Scroll Effect:::
const header = document.querySelector('.site-header');

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
  anchor.addEventListener('click', function(e) {
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

// :::SECTION:Active Navigation:::
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.hero-nav a');

if (sections.length > 0 && navLinks.length > 0) {
  let navTicking = false;

  const updateActiveNav = () => {
    const scrollPos = window.pageYOffset + 200;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('is-active');
          if (link.getAttribute('href') === '#' + sectionId) {
            link.classList.add('is-active');
          }
        });
      }
    });
  };

  window.addEventListener('scroll', () => {
    if (!navTicking) {
      window.requestAnimationFrame(() => {
        updateActiveNav();
        navTicking = false;
      });
      navTicking = true;
    }
  }, { passive: true });
}

// :::SECTION:Contact Form:::
const contactForm = document.getElementById('contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const submitBtn = this.querySelector('.form-submit');
    const originalLabel = submitBtn.querySelector('.hero-cta-label');
    const originalText = originalLabel.textContent;

    // Visual feedback
    originalLabel.textContent = 'Sending...';
    submitBtn.style.pointerEvents = 'none';

    // Simulate send (replace with actual form handler)
    setTimeout(() => {
      originalLabel.textContent = 'Message Sent!';
      submitBtn.style.background = 'var(--color-accent)';
      submitBtn.style.color = 'var(--color-bg-dark)';

      setTimeout(() => {
        originalLabel.textContent = originalText;
        submitBtn.style.background = '';
        submitBtn.style.color = '';
        submitBtn.style.pointerEvents = '';
        contactForm.reset();
      }, 3000);
    }, 1500);
  });
}

// :::SECTION:Work Card Parallax:::
const workCards = document.querySelectorAll('.work-card');

if (workCards.length > 0 && window.matchMedia('(min-width: 769px)').matches) {
  workCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      card.style.backgroundPosition = `${50 + x * 5}% ${50 + y * 5}%`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.backgroundPosition = 'center';
    });
  });
}

// :::SECTION:Stat Counter Animation:::
const statNumbers = document.querySelectorAll('.about-stat-num');

if (statNumbers.length > 0) {
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const finalText = el.textContent;
        const numericMatch = finalText.match(/(\d+)/);

        if (numericMatch) {
          const target = parseInt(numericMatch[1]);
          const suffix = finalText.replace(numericMatch[1], '');
          let current = 0;
          const duration = 1500;
          const increment = target / (duration / 16);

          const counter = setInterval(() => {
            current += increment;
            if (current >= target) {
              current = target;
              clearInterval(counter);
            }
            el.textContent = Math.floor(current) + suffix;
          }, 16);
        }

        counterObserver.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  statNumbers.forEach(el => counterObserver.observe(el));
}
