// :::SECTION:Header Scroll Effect:::
const header = document.querySelector('.hero-header');

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
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
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

// :::SECTION:Blog Filters:::
const filterButtons = document.querySelectorAll('.filter-btn');
const blogCards = document.querySelectorAll('.blog-card');

if (filterButtons.length > 0 && blogCards.length > 0) {
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Update active button
      filterButtons.forEach(b => b.classList.remove('filter-btn-active'));
      btn.classList.add('filter-btn-active');

      const filter = btn.getAttribute('data-filter-target');

      blogCards.forEach(card => {
        const categories = card.getAttribute('data-filter-category') || '';

        if (filter === 'all' || categories.includes(filter)) {
          card.classList.remove('is-hidden');
          // Re-trigger animation
          card.classList.remove('is-visible');
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              card.classList.add('is-visible');
            });
          });
        } else {
          card.classList.add('is-hidden');
        }
      });
    });
  });
}

// :::SECTION:Card Hover Rotations:::
// Add slight random rotations to cards on load for more organic feel
const allCards = document.querySelectorAll('.blog-card, .work-card');
allCards.forEach((card, i) => {
  const rotation = (Math.random() - 0.5) * 2; // between -1 and 1 degrees
  const existingTransform = window.getComputedStyle(card).transform;
  if (existingTransform === 'none' || existingTransform === '') {
    card.style.setProperty('--card-rotate', rotation + 'deg');
  }
});

// :::SECTION:Footer Scroll Arrow:::
const scrollArrow = document.querySelector('.hero-footer-scroll');
if (scrollArrow) {
  scrollArrow.addEventListener('click', () => {
    const blogSection = document.querySelector('#blog');
    if (blogSection) {
      blogSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
  scrollArrow.style.cursor = 'pointer';
}
