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

// :::SECTION:Active Navigation:::
const sections = document.querySelectorAll('section[id]');

if (sections.length > 0) {
  const navLinks = document.querySelectorAll('.site-nav a[href^="#"]');
  
  const observerOptions = {
    threshold: 0.3,
    rootMargin: '-20% 0px -60% 0px'
  };
  
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.style.color = '';
          if (link.getAttribute('href') === `#${id}`) {
            link.style.color = 'var(--teal)';
          }
        });
      }
    });
  }, observerOptions);
  
  sections.forEach(section => sectionObserver.observe(section));
}

// :::SECTION:Hover Effects:::
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
  card.addEventListener('mouseenter', function() {
    this.style.setProperty('--hover', '1');
  });
  
  card.addEventListener('mouseleave', function() {
    this.style.setProperty('--hover', '0');
  });
});

// :::SECTION:Keyboard Navigation:::
document.addEventListener('keydown', (e) => {
  // Allow Escape to close any focused element
  if (e.key === 'Escape') {
    document.activeElement.blur();
  }
});
