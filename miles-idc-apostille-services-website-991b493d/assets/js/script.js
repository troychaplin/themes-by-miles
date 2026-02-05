/**
 * IDC - International Document Certification
 * Main JavaScript
 */

// :::SECTION:Header Scroll Effect:::
const header = document.querySelector('.header');

if (header) {
  let ticking = false;

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        if (window.pageYOffset > 50) {
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

// :::SECTION:Mobile Navigation:::
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const nav = document.querySelector('.nav');

if (mobileMenuBtn && nav) {
  mobileMenuBtn.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    mobileMenuBtn.classList.toggle('is-active');
    mobileMenuBtn.setAttribute('aria-expanded', isOpen);
    
    // Prevent body scroll when menu is open
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // Close menu when clicking a link
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('is-open');
      mobileMenuBtn.classList.remove('is-active');
      document.body.style.overflow = '';
    });
  });
}

// :::SECTION:Smooth Scrolling:::
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href');
    
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      e.preventDefault();
      
      const headerHeight = header ? header.offsetHeight : 0;
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight - 20;
      
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

// :::SECTION:FAQ Accordion:::
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const summary = item.querySelector('summary');
  
  summary.addEventListener('click', () => {
    // Close other open items
    faqItems.forEach(otherItem => {
      if (otherItem !== item && otherItem.hasAttribute('open')) {
        otherItem.removeAttribute('open');
      }
    });
  });
});

// :::SECTION:Form Handling:::
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const submitBtn = this.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    
    // Show loading state
    submitBtn.innerHTML = 'Sending...';
    submitBtn.disabled = true;
    
    // Simulate form submission (replace with actual form handling)
    setTimeout(() => {
      // Show success message
      submitBtn.innerHTML = 'Request Sent ✓';
      submitBtn.style.background = '#22c55e';
      
      // Reset form
      this.reset();
      
      // Reset button after delay
      setTimeout(() => {
        submitBtn.innerHTML = originalText;
        submitBtn.style.background = '';
        submitBtn.disabled = false;
      }, 3000);
    }, 1500);
  });
}

// :::SECTION:Stat Counter Animation:::
const statValues = document.querySelectorAll('.hero-stat-value');

if (statValues.length > 0) {
  const animateStats = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const statElement = entry.target;
        const finalValue = statElement.textContent;
        const numericValue = parseInt(finalValue.replace(/\D/g, ''));
        const suffix = finalValue.replace(/[\d]/g, '');
        
        if (!isNaN(numericValue)) {
          let currentValue = 0;
          const duration = 2000;
          const increment = numericValue / (duration / 16);
          
          const updateCounter = () => {
            currentValue += increment;
            
            if (currentValue < numericValue) {
              statElement.textContent = Math.floor(currentValue) + suffix;
              requestAnimationFrame(updateCounter);
            } else {
              statElement.textContent = finalValue;
            }
          };
          
          updateCounter();
        }
        
        observer.unobserve(statElement);
      }
    });
  };

  const statObserver = new IntersectionObserver(animateStats, {
    threshold: 0.5
  });

  statValues.forEach(stat => statObserver.observe(stat));
}

// :::SECTION:Active Navigation:::
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

if (sections.length > 0 && navLinks.length > 0) {
  const highlightNav = () => {
    const scrollPos = window.scrollY + 150;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('is-active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('is-active');
          }
        });
      }
    });
  };

  let navTicking = false;
  
  window.addEventListener('scroll', () => {
    if (!navTicking) {
      requestAnimationFrame(() => {
        highlightNav();
        navTicking = false;
      });
      navTicking = true;
    }
  }, { passive: true });
}

// :::SECTION:Mobile Menu Styles:::
// Add mobile nav styles dynamically
const mobileNavStyles = document.createElement('style');
mobileNavStyles.textContent = `
  @media (max-width: 768px) {
    .nav {
      position: fixed;
      top: 0;
      right: -100%;
      width: 80%;
      max-width: 320px;
      height: 100vh;
      background: var(--color-white);
      padding: 5rem 2rem 2rem;
      flex-direction: column;
      align-items: flex-start;
      gap: 1.5rem;
      box-shadow: -4px 0 20px rgba(0, 0, 0, 0.1);
      transition: right 0.3s ease;
      z-index: 99;
    }
    
    .nav.is-open {
      right: 0;
    }
    
    .nav-link {
      font-size: 1.1rem;
    }
    
    .nav-cta {
      margin-top: auto;
      width: 100%;
      text-align: center;
    }
    
    .mobile-menu-btn.is-active span:nth-child(1) {
      transform: rotate(45deg) translate(5px, 5px);
    }
    
    .mobile-menu-btn.is-active span:nth-child(2) {
      opacity: 0;
    }
    
    .mobile-menu-btn.is-active span:nth-child(3) {
      transform: rotate(-45deg) translate(5px, -5px);
    }
    
    .nav-link.is-active {
      color: var(--color-primary);
    }
  }
`;
document.head.appendChild(mobileNavStyles);
