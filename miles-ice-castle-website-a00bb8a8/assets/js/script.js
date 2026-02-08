// ===================================================
// ICE CASTLE — Gaming Blog Scripts
// ===================================================

// :::SECTION:Header Scroll Effect:::
const header = document.querySelector('.site-header');

if (header) {
  let ticking = false;

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        if (window.pageYOffset > 80) {
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
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight - 20;

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

// :::SECTION:Newsletter Form:::
const newsletterForm = document.getElementById('newsletter-form');

if (newsletterForm) {
  newsletterForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const input = this.querySelector('.cta-input');
    const button = this.querySelector('.btn-primary');
    const originalText = button.textContent;

    button.textContent = 'Subscribed! ❄️';
    button.style.background = 'var(--deep-ice)';
    button.style.color = 'var(--snow)';
    input.value = '';

    setTimeout(() => {
      button.textContent = originalText;
      button.style.background = '';
      button.style.color = '';
    }, 3000);
  });
}

// :::SECTION:Active Nav Highlighting:::
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

if (sections.length > 0 && navLinks.length > 0) {
  let navTicking = false;

  const highlightNav = () => {
    const scrollY = window.pageYOffset;
    const headerOffset = header ? header.offsetHeight + 60 : 60;

    sections.forEach(section => {
      const sectionTop = section.offsetTop - headerOffset;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.style.color = '';
          if (link.getAttribute('href') === '#' + sectionId) {
            link.style.color = 'var(--kamek-yellow)';
          }
        });
      }
    });
  };

  window.addEventListener('scroll', () => {
    if (!navTicking) {
      window.requestAnimationFrame(() => {
        highlightNav();
        navTicking = false;
      });
      navTicking = true;
    }
  }, { passive: true });
}

// :::SECTION:Parallax Particles:::
const particles = document.querySelectorAll('.hero-particle');

if (particles.length > 0 && window.matchMedia('(prefers-reduced-motion: no-preference)').matches) {
  let particleTicking = false;

  window.addEventListener('scroll', () => {
    if (!particleTicking) {
      window.requestAnimationFrame(() => {
        const scrolled = window.pageYOffset;
        const heroHeight = document.querySelector('.hero') ? document.querySelector('.hero').offsetHeight : 800;

        if (scrolled < heroHeight) {
          const ratio = scrolled / heroHeight;
          particles.forEach((p, i) => {
            const speed = 0.3 + (i * 0.1);
            p.style.transform = `translateY(${scrolled * speed * -0.5}px)`;
          });
        }
        particleTicking = false;
      });
      particleTicking = true;
    }
  }, { passive: true });
}