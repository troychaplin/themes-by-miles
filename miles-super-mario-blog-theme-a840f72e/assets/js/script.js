// :::SECTION:Header Scroll Effect:::
const header = document.querySelector('#site-header');

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

// :::SECTION:Active Nav Highlighting:::
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.hero-nav-link');

if (sections.length > 0 && navLinks.length > 0) {
  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.classList.remove('hero-nav-link--active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('hero-nav-link--active');
          }
        });
      }
    });
  }, {
    threshold: 0,
    rootMargin: '-40% 0px -60% 0px'
  });

  sections.forEach(section => navObserver.observe(section));
}

// :::SECTION:Stat Counter Animation:::
function animateCounter(element, target, duration) {
  const isNumber = !isNaN(parseInt(target));
  if (!isNumber) return;
  
  const targetNum = parseInt(target.replace(/,/g, ''));
  const start = 0;
  const startTime = performance.now();
  
  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    // Ease-out cubic
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.round(start + (targetNum - start) * eased);
    
    element.textContent = current.toLocaleString();
    
    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }
  
  requestAnimationFrame(update);
}

const statElements = document.querySelectorAll('.stat-block__value');

if (statElements.length > 0) {
  const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target.textContent.trim();
        animateCounter(entry.target, target, 2000);
        statObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.5
  });

  statElements.forEach(el => statObserver.observe(el));
}

// :::SECTION:Easter Egg:::
const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'];
let konamiIndex = 0;

document.addEventListener('keydown', (e) => {
  if (e.code === konamiCode[konamiIndex]) {
    konamiIndex++;
    if (konamiIndex === konamiCode.length) {
      document.body.style.transition = 'filter 0.5s ease';
      document.body.style.filter = 'hue-rotate(180deg)';
      
      const easterEgg = document.querySelector('.footer__easter-egg');
      if (easterEgg) {
        easterEgg.style.color = 'var(--color-lime)';
        easterEgg.style.opacity = '1';
        easterEgg.textContent = '★ 30 LIVES UNLOCKED ★';
      }
      
      setTimeout(() => {
        document.body.style.filter = '';
      }, 3000);
      
      konamiIndex = 0;
    }
  } else {
    konamiIndex = 0;
  }
});

// :::SECTION:Newsletter Form:::
const powerupForm = document.querySelector('.powerup__form');

if (powerupForm) {
  powerupForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const input = this.querySelector('.powerup__input');
    const submit = this.querySelector('.powerup__submit');
    const note = this.querySelector('.powerup__note');
    
    if (input && input.value) {
      submit.textContent = '✓ GG!';
      submit.style.background = 'var(--color-cyan)';
      note.textContent = 'Achievement unlocked: Newsletter subscriber! Check your inbox.';
      note.style.color = 'var(--color-lime)';
      input.value = '';
      
      setTimeout(() => {
        submit.textContent = 'Subscribe';
        submit.style.background = '';
        note.textContent = 'Join 12,000+ players. Unsubscribe anytime — no penalties.';
        note.style.color = '';
      }, 4000);
    }
  });
}
