// =============================================
// SPATULA STORIES - Main JavaScript
// =============================================

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
    
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      e.preventDefault();
      
      const headerOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// :::SECTION:Newsletter Form:::
const newsletterForm = document.querySelector('.newsletter-form');

if (newsletterForm) {
  newsletterForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const emailInput = this.querySelector('.newsletter-input');
    const submitBtn = this.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    
    // Simple validation
    if (!emailInput.value || !emailInput.value.includes('@')) {
      emailInput.style.borderColor = 'var(--color-coral)';
      emailInput.focus();
      return;
    }
    
    // Success state
    submitBtn.textContent = 'Subscribed! 🎉';
    submitBtn.disabled = true;
    emailInput.value = '';
    emailInput.style.borderColor = 'var(--color-aqua)';
    
    // Reset after delay
    setTimeout(() => {
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
      emailInput.style.borderColor = '';
    }, 3000);
  });
}

// :::SECTION:Recipe Card Interaction:::
const recipeCards = document.querySelectorAll('.recipe-card');

recipeCards.forEach(card => {
  card.addEventListener('mouseenter', function() {
    // Add a subtle scale to siblings
    recipeCards.forEach(sibling => {
      if (sibling !== card) {
        sibling.style.opacity = '0.8';
      }
    });
  });
  
  card.addEventListener('mouseleave', function() {
    recipeCards.forEach(sibling => {
      sibling.style.opacity = '1';
    });
  });
});

// :::SECTION:Category Card Hover Sound (Visual Feedback):::
const categoryCards = document.querySelectorAll('.category-card');

categoryCards.forEach(card => {
  card.addEventListener('mouseenter', function() {
    // Create a quick pulse effect
    this.style.transition = 'all 0.1s ease';
    setTimeout(() => {
      this.style.transition = 'all 0.3s ease';
    }, 100);
  });
});

// :::SECTION:Bubble Generator:::
function createFloatingBubble() {
  const bubbleContainer = document.querySelector('.categories-bubbles');
  if (!bubbleContainer) return;
  
  const bubble = document.createElement('span');
  bubble.className = 'floating-bubble';
  
  const size = Math.random() * 40 + 20;
  bubble.style.width = `${size}px`;
  bubble.style.height = `${size}px`;
  bubble.style.left = `${Math.random() * 100}%`;
  bubble.style.bottom = '-50px';
  bubble.style.animation = `floatBubble ${Math.random() * 10 + 10}s ease-in-out forwards`;
  
  bubbleContainer.appendChild(bubble);
  
  // Remove bubble after animation
  setTimeout(() => {
    bubble.remove();
  }, 20000);
}

// Create new bubbles periodically (only if section is visible)
const categoriesSection = document.querySelector('.categories');
if (categoriesSection) {
  const bubbleObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Create a bubble every 3 seconds while visible
        const bubbleInterval = setInterval(() => {
          if (!entry.isIntersecting) {
            clearInterval(bubbleInterval);
            return;
          }
          createFloatingBubble();
        }, 3000);
      }
    });
  }, { threshold: 0.2 });
  
  bubbleObserver.observe(categoriesSection);
}

// :::SECTION:Parallax Effect for Blobs:::
const blobs = document.querySelectorAll('.featured-blob');

if (blobs.length > 0 && window.innerWidth > 768) {
  let blobTicking = false;
  
  window.addEventListener('scroll', () => {
    if (!blobTicking) {
      window.requestAnimationFrame(() => {
        const scrolled = window.pageYOffset;
        
        blobs.forEach((blob, index) => {
          const speed = (index + 1) * 0.05;
          const yPos = scrolled * speed;
          blob.style.transform = `translateY(${yPos}px)`;
        });
        
        blobTicking = false;
      });
      blobTicking = true;
    }
  }, { passive: true });
}

// :::SECTION:Keyboard Navigation:::
document.addEventListener('keydown', (e) => {
  // Skip to main content with Tab
  if (e.key === 'Tab' && !e.shiftKey) {
    const firstFocusable = document.querySelector('a, button, input');
    if (document.activeElement === document.body && firstFocusable) {
      // Focus is just entering the page
    }
  }
});

// :::SECTION:Print Styles Trigger:::
// Detect print and simplify layout
window.addEventListener('beforeprint', () => {
  document.body.classList.add('printing');
});

window.addEventListener('afterprint', () => {
  document.body.classList.remove('printing');
});
