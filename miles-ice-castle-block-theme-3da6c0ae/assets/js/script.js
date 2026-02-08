// ============================================
// ICE CASTLE — Theme JavaScript
// ============================================

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
  anchor.addEventListener('click', function(e) {
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

// :::SECTION:Pattern Card Hover Animation:::
const patternCards = document.querySelectorAll('.pattern-card');

patternCards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    const fills = card.querySelectorAll('.pattern-score-fill');
    fills.forEach(fill => {
      const currentWidth = fill.style.width || getComputedStyle(fill).width;
      fill.style.transition = 'width 0.8s cubic-bezier(0.22, 1, 0.36, 1)';
    });
  });
});

// :::SECTION:Crystal Composition Parallax:::
const crystalComp = document.querySelector('.hero-crystal-composition');

if (crystalComp && window.matchMedia('(min-width: 768px)').matches) {
  const heroSection = document.querySelector('.hero');

  heroSection.addEventListener('mousemove', (e) => {
    const rect = heroSection.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    crystalComp.style.transform = `translate(${x * 12}px, ${y * 12}px)`;
  });

  heroSection.addEventListener('mouseleave', () => {
    crystalComp.style.transition = 'transform 0.5s ease';
    crystalComp.style.transform = 'translate(0, 0)';
    setTimeout(() => {
      crystalComp.style.transition = '';
    }, 500);
  });
}

// :::SECTION:Newsletter Form:::
const newsletterForm = document.querySelector('.newsletter-form');

if (newsletterForm) {
  newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = newsletterForm.querySelector('.newsletter-input');
    const btn = newsletterForm.querySelector('.newsletter-btn');

    if (input.value) {
      btn.textContent = 'Subscribed!';
      btn.style.background = 'var(--ice-bright)';
      btn.style.color = 'var(--ice-white)';
      input.value = '';

      setTimeout(() => {
        btn.textContent = 'Subscribe';
        btn.style.background = '';
        btn.style.color = '';
      }, 3000);
    }
  });
}

// :::SECTION:Article Card Tilt:::
const articleCards = document.querySelectorAll('.article-card');

if (window.matchMedia('(min-width: 768px)').matches) {
  articleCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      card.style.transform = `translateY(-4px) perspective(600px) rotateX(${y * -4}deg) rotateY(${x * 4}deg)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transition = 'transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)';
      card.style.transform = 'translateY(0)';
      setTimeout(() => {
        card.style.transition = '';
      }, 400);
    });
  });
}