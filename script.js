// Mobile Menu Toggle
function initMobileMenu() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }
}

// Trending Ticker Animation
function initTrendingTicker() {
  const ticker = document.querySelector('.ticker-items');
  if (!ticker) return;
  
  // Clone items for seamless loop
  const items = ticker.innerHTML;
  ticker.innerHTML = items + items + items;
}

// News Card Expansion
function initNewsCardExpansion() {
  const expandBtns = document.querySelectorAll('.expand-btn');
  
  expandBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const card = this.closest('.news-card');
      const preview = card.querySelector('.card-preview');
      const chevronUp = this.querySelector('.chevron-up');
      const chevronDown = this.querySelector('.chevron-down');
      const btnText = this.querySelector('.btn-text');
      
      if (preview.classList.contains('hidden')) {
        preview.classList.remove('hidden');
        chevronUp.classList.remove('hidden');
        chevronDown.classList.add('hidden');
        btnText.textContent = 'Show less';
        this.setAttribute('aria-expanded', 'true');
      } else {
        preview.classList.add('hidden');
        chevronUp.classList.add('hidden');
        chevronDown.classList.remove('hidden');
        btnText.textContent = 'Quick preview';
        this.setAttribute('aria-expanded', 'false');
      }
    });
  });
}

// Category Filter
function initCategoryFilter() {
  const categoryBtns = document.querySelectorAll('.category-btn');
  
  categoryBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      // Remove active from all
      categoryBtns.forEach(b => b.classList.remove('active'));
      // Add active to clicked
      this.classList.add('active');
      
      const category = this.dataset.category;
      filterArticles(category);
    });
  });
}

function filterArticles(category) {
  const cards = document.querySelectorAll('.news-card');
  
  cards.forEach(card => {
    const cardCategory = card.dataset.category;
    
    if (category === 'All' || cardCategory === category) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

// Newsletter Subscription
function initSubscribeForm() {
  const form = document.getElementById('subscribe-form');
  const successMsg = document.getElementById('subscribe-success');
  
  if (form && successMsg) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const email = this.querySelector('input[type="email"]').value;
      
      if (email) {
        form.classList.add('hidden');
        successMsg.classList.remove('hidden');
        
        setTimeout(() => {
          form.classList.remove('hidden');
          successMsg.classList.add('hidden');
          form.reset();
        }, 5000);
      }
    });
  }
}

// Contact Form
function initContactForm() {
  const form = document.getElementById('contact-form');
  const successMsg = document.getElementById('form-success');
  
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      if (successMsg) {
        successMsg.classList.remove('hidden');
        form.reset();
        
        setTimeout(() => {
          successMsg.classList.add('hidden');
        }, 5000);
      }
    });
  }
}

// Smooth Scroll
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      
      e.preventDefault();
      const target = document.querySelector(href);
      
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// Share Functionality
function initShareButtons() {
  const shareButtons = document.querySelectorAll('.share-btn');
  
  shareButtons.forEach(btn => {
    btn.addEventListener('click', function() {
      const title = this.dataset.title || document.title;
      const url = this.dataset.url || window.location.href;
      
      if (navigator.share) {
        navigator.share({
          title: title,
          url: url
        }).catch(err => console.log('Error sharing:', err));
      } else {
        // Fallback: copy to clipboard
        navigator.clipboard.writeText(url).then(() => {
          alert('Link copied to clipboard!');
        });
      }
    });
  });
}

// Pagination (for static pages, this would link to different HTML files)
function initPagination() {
  const paginationBtns = document.querySelectorAll('.pagination button[data-page]');
  
  paginationBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const page = this.dataset.page;
      // In a real static site, this would navigate to page-2.html, etc.
      console.log('Navigate to page:', page);
      
      // Update active state
      paginationBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      
      // Scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });
}

// Time Ago Formatting
function formatTimeAgo(dateString) {
  const date = new Date(dateString);
  const now = new Date();
  const diffInHours = Math.floor((now - date) / (1000 * 60 * 60));
  
  if (diffInHours < 1) return 'Just now';
  if (diffInHours < 24) return `${diffInHours}h ago`;
  
  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays === 1) return 'Yesterday';
  return `${diffInDays} days ago`;
}

// Update all time-ago elements
function updateTimeAgo() {
  const timeElements = document.querySelectorAll('[data-time]');
  
  timeElements.forEach(el => {
    const time = el.dataset.time;
    el.textContent = formatTimeAgo(time);
  });
}

// Back to Top
function initBackToTop() {
  const backToTop = document.getElementById('back-to-top');
  
  if (backToTop) {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        backToTop.classList.remove('hidden');
      } else {
        backToTop.classList.add('hidden');
      }
    });
    
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

// Initialize all functions when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  initMobileMenu();
  initTrendingTicker();
  initNewsCardExpansion();
  initCategoryFilter();
  initSubscribeForm();
  initContactForm();
  initSmoothScroll();
  initShareButtons();
  initPagination();
  updateTimeAgo();
  initBackToTop();
});

// Update time-ago every minute
setInterval(updateTimeAgo, 60000);
