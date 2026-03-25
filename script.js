// {
    /* <script>
  (function() {
    // Exact mobile menu toggle
    const menuBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.getElementById('mainNav');
    if (menuBtn) {
      menuBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        navMenu.classList.toggle('show');
      });
    }
    // close menu on link click (mobile)
    const navLinks = document.querySelectorAll('.main-nav a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 850) navMenu.classList.remove('show');
      });
    });

    // Newsletter subscription exact interactive
    const subBtn = document.getElementById('newsSubscribeBtn');
    const emailField = document.getElementById('newsEmail');
    const msgDiv = document.getElementById('newsMsg');
    
    function handleSubscribe() {
      let email = emailField.value.trim();
      if (!email) {
        msgDiv.innerHTML = "🌾 Please enter your email to receive farm updates.";
        msgDiv.style.color = "#F3DEBA";
        return;
      }
      if (!email.includes('@') || !email.includes('.')) {
        msgDiv.innerHTML = "✨ Please provide a valid email address.";
        msgDiv.style.color = "#F3CF9C";
        return;
      }
      msgDiv.innerHTML = "✓ Thank you! You're now part of the Anveshan community. We'll share stories from the pasture.";
      msgDiv.style.color = "#D9E3B5";
      emailField.value = "";
      setTimeout(() => {
        if (msgDiv.innerHTML.includes("Thank you")) msgDiv.innerHTML = "";
      }, 4500);
    }
    if (subBtn) subBtn.addEventListener('click', handleSubscribe);
    if (emailField) emailField.addEventListener('keypress', (e) => { if(e.key === 'Enter') handleSubscribe(); });
    
    // product tile click: alert exact detail (demo but matches the "shop" interaction)
    const tiles = document.querySelectorAll('.product-tile');
    tiles.forEach(tile => {
      tile.addEventListener('click', () => {
        const prodName = tile.querySelector('h4')?.innerText || 'product';
        alert(`✨ "${prodName}" — pure heritage produce. Visit our shop to bring home the essence of Anveshan.`);
      });
    });
    
    // hero button scroll to products
    const heroBtn = document.getElementById('heroShopBtn');
    if (heroBtn) {
      heroBtn.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('.products-section')?.scrollIntoView({ behavior: 'smooth' });
      });
    }
    // story button alert (demo same as original vibe)
    const storyBtn = document.getElementById('storyReadMore');
    if (storyBtn) {
      storyBtn.addEventListener('click', (e) => {
        e.preventDefault();
        alert('📖 Explore our full story of regenerative transition & native breed conservation on the dedicated page.');
      });
    }
    // social icons log & subtle interaction
    const socialIcons = document.querySelectorAll('.social-links i');
    socialIcons.forEach(icon => {
      icon.style.cursor = 'pointer';
      icon.addEventListener('click', () => {
        console.log('Social icon clicked: ', icon.classList);
        alert('🌿 Connect with Anveshan on social media — stories from the fields.');
      });
    });
    // logo click to top
    const logoArea = document.querySelector('.logo-area');
    if (logoArea) {
      logoArea.style.cursor = 'pointer';
      logoArea.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    }
    // adjust active class for home link (just exact style)
    const homeLink = document.querySelector('.main-nav a[href="#"]');
    if (homeLink) {
      window.addEventListener('scroll', () => {
        if (window.scrollY < 100) {
          navLinks.forEach(link => link.classList.remove('active-nav'));
          homeLink.classList.add('active-nav');
        } else {
          homeLink.classList.remove('active-nav');
        }
      });
      homeLink.classList.add('active-nav');
    }
    // add style for active link
    const style = document.createElement('style');
    style.textContent = `.active-nav { color: #BB7A3E !important; font-weight: 600; }`;
    document.head.appendChild(style);
  })();
</script> */
// }


// ========== ANVESHAN FARM - CORRECTED JAVASCRIPT ==========
// All interactive functionality with proper error handling

(function() {
    'use strict';
    
    // Wait for DOM to be fully loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
    
    function init() {
        // ===== MOBILE MENU TOGGLE =====
        const menuBtn = document.getElementById('mobileMenuBtn');
        const navMenu = document.getElementById('mainNav');
        
        if (menuBtn && navMenu) {
            menuBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                navMenu.classList.toggle('show');
            });
            
            // Close menu when clicking outside
            document.addEventListener('click', function(event) {
                if (window.innerWidth <= 850 && navMenu.classList.contains('show')) {
                    if (!navMenu.contains(event.target) && !menuBtn.contains(event.target)) {
                        navMenu.classList.remove('show');
                    }
                }
            });
        }
        
        // Close mobile menu on link click
        const navLinks = document.querySelectorAll('.main-nav a');
        navLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                if (window.innerWidth <= 850 && navMenu) {
                    navMenu.classList.remove('show');
                }
            });
        });
        
        // ===== NEWSLETTER SUBSCRIPTION =====
        const subBtn = document.getElementById('newsSubscribeBtn');
        const emailField = document.getElementById('newsEmail');
        const msgDiv = document.getElementById('newsMsg');
        
        function handleSubscribe() {
            // Check if elements exist
            if (!emailField || !msgDiv) return;
            
            let email = emailField.value.trim();
            
            if (!email) {
                msgDiv.innerHTML = "🌾 Please enter your email to receive farm updates.";
                msgDiv.style.color = "#F3DEBA";
                return;
            }
            
            // More comprehensive email validation
            const emailRegex = /^[^\s@]+@([^\s@]+\.)+[^\s@]+$/;
            if (!emailRegex.test(email)) {
                msgDiv.innerHTML = "✨ Please provide a valid email address (e.g., name@example.com).";
                msgDiv.style.color = "#F3CF9C";
                return;
            }
            
            // Success message
            msgDiv.innerHTML = "✓ Thank you! You're now part of the Anveshan community. We'll share stories from the pasture.";
            msgDiv.style.color = "#D9E3B5";
            emailField.value = "";
            
            // Clear message after 5 seconds
            setTimeout(function() {
                if (msgDiv.innerHTML.includes("Thank you")) {
                    msgDiv.innerHTML = "";
                }
            }, 5000);
        }
        
        if (subBtn) {
            subBtn.addEventListener('click', handleSubscribe);
        }
        
        if (emailField) {
            emailField.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    handleSubscribe();
                }
            });
        }
        
        // ===== PRODUCT TILE CLICK HANDLER =====
        const tiles = document.querySelectorAll('.product-tile');
        tiles.forEach(function(tile) {
            tile.addEventListener('click', function() {
                const productNameElement = this.querySelector('h4');
                const prodName = productNameElement ? productNameElement.innerText : 'this product';
                alert(`✨ "${prodName}" — pure heritage produce. Visit our shop to bring home the essence of Anveshan.`);
            });
        });
        
        // ===== HERO BUTTON SCROLL TO PRODUCTS =====
        const heroBtn = document.getElementById('heroShopBtn');
        if (heroBtn) {
            heroBtn.addEventListener('click', function(e) {
                e.preventDefault();
                const productsSection = document.querySelector('.products-section');
                if (productsSection) {
                    productsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        }
        
        // ===== STORY BUTTON ALERT =====
        // const storyBtn = document.getElementById('storyReadMore');
        // if (storyBtn) {
        //     storyBtn.addEventListener('click', function(e) {
        //         e.preventDefault();
        //         alert('📖 Explore our full story of regenerative transition & native breed conservation on the dedicated page.');
        //     });
        // }
        
        // ===== SOCIAL ICONS INTERACTION =====
        const socialIcons = document.querySelectorAll('.social-links i');
        socialIcons.forEach(function(icon) {
            icon.style.cursor = 'pointer';
            icon.addEventListener('click', function() {
                // Extract platform name from class
                let platform = 'social media';
                if (this.classList.contains('fa-instagram')) platform = 'Instagram';
                else if (this.classList.contains('fa-facebook-f')) platform = 'Facebook';
                else if (this.classList.contains('fa-youtube')) platform = 'YouTube';
                
                alert(`🌿 Connect with Anveshan on ${platform} — stories from the fields.`);
            });
        });
        
        // ===== LOGO CLICK TO SCROLL TO TOP =====
        const logoArea = document.querySelector('.logo-area');
        if (logoArea) {
            logoArea.style.cursor = 'pointer';
            logoArea.addEventListener('click', function() {
                window.scrollTo({ 
                    top: 0, 
                    behavior: 'smooth' 
                });
            });
        }
        
        // ===== ACTIVE NAVIGATION LINK ON SCROLL =====
        const homeLink = document.querySelector('.main-nav a[href="#"]');
        const allNavLinks = document.querySelectorAll('.main-nav a');
        
        // Add active-nav style if not already in CSS
        if (!document.querySelector('style[data-active-nav]')) {
            const style = document.createElement('style');
            style.setAttribute('data-active-nav', 'true');
            style.textContent = '.active-nav { color: #BB7A3E !important; font-weight: 600; }';
            document.head.appendChild(style);
        }
        
        function updateActiveNav() {
            if (!homeLink) return;
            
            const scrollPosition = window.scrollY;
            const heroSection = document.querySelector('.hero-section');
            
            if (heroSection) {
                const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
                if (scrollPosition < heroBottom - 100) {
                    allNavLinks.forEach(function(link) {
                        link.classList.remove('active-nav');
                    });
                    homeLink.classList.add('active-nav');
                } else {
                    homeLink.classList.remove('active-nav');
                }
            }
        }
        
        // Initialize active state
        if (homeLink) {
            homeLink.classList.add('active-nav');
            window.addEventListener('scroll', updateActiveNav);
        }
        
        // ===== ADD SMOOTH SCROLL TO ALL INTERNAL LINKS =====
        const internalLinks = document.querySelectorAll('a[href^="#"]');
        internalLinks.forEach(function(link) {
            link.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                if (href === '#' || href === '') {
                    e.preventDefault();
                }
            });
        });
        
        // ===== ADD SCROLL REVEAL ANIMATION =====
        const animatedElements = document.querySelectorAll('.pillar-card, .product-tile');
        
        // Check if IntersectionObserver is supported
        if ('IntersectionObserver' in window) {
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };
            
            const observer = new IntersectionObserver(function(entries) {
                entries.forEach(function(entry) {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);
            
            animatedElements.forEach(function(element, index) {
                element.style.opacity = '0';
                element.style.transform = 'translateY(20px)';
                element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                observer.observe(element);
            });
        } else {
            // Fallback for older browsers
            animatedElements.forEach(function(element) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            });
        }
        
        // ===== WINDOW RESIZE HANDLER =====
        let resizeTimer;
        window.addEventListener('resize', function() {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(function() {
                // Close mobile menu if screen size increases beyond mobile breakpoint
                if (window.innerWidth > 850 && navMenu && navMenu.classList.contains('show')) {
                    navMenu.classList.remove('show');
                }
            }, 250);
        });
        
        // ===== CONSOLE LOG FOR DEVELOPMENT (optional) =====
        console.log('✅ Anveshan Farm website initialized successfully');
        console.log('🌱 All interactive features are active');
    }
    
})();