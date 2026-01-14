// Scroll-triggered animations using Intersection Observer
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe section titles
    document.querySelectorAll('.section-title').forEach(title => {
        observer.observe(title);
    });

    // Observe section descriptions
    document.querySelectorAll('.section-description').forEach(desc => {
        observer.observe(desc);
    });

    // Observe steps
    document.querySelectorAll('.step').forEach(step => {
        observer.observe(step);
    });

    // Observe feature cards
    document.querySelectorAll('.feature-card').forEach(card => {
        observer.observe(card);
    });

    // Observe showcase items
    document.querySelectorAll('.showcase-item').forEach(item => {
        observer.observe(item);
    });

    // Observe step visuals for image animations
    document.querySelectorAll('.step-visual').forEach(visual => {
        observer.observe(visual);
    });

    // Observe floating emojis
    document.querySelectorAll('.floating-emoji').forEach(emoji => {
        observer.observe(emoji);
    });

    // Observe audience cards
    document.querySelectorAll('.audience-card').forEach(card => {
        observer.observe(card);
    });

    // Observe FAQ items
    document.querySelectorAll('.faq-item').forEach(item => {
        observer.observe(item);
    });

    // Observe tagline text
    document.querySelectorAll('.tagline-text').forEach(tagline => {
        observer.observe(tagline);
    });

    // Observe AI twin image
    document.querySelectorAll('.ai-twin-image').forEach(image => {
        observer.observe(image);
    });

    // Observe IO columns
    document.querySelectorAll('.io-column').forEach(column => {
        observer.observe(column);
    });

    // Observe testimonial cards
    document.querySelectorAll('.testimonial-card').forEach(card => {
        observer.observe(card);
    });

    // Observe stat box
    document.querySelectorAll('.stat-box').forEach(box => {
        observer.observe(box);
    });

    // Observe trust badges
    document.querySelectorAll('.trust-badge').forEach(badge => {
        observer.observe(badge);
    });
}

// Parallax effect for hero section
function initParallax() {
    const hero = document.querySelector('.hero');
    const phoneMockup = document.querySelector('.phone-frame');
    
    if (hero && phoneMockup) {
        // Only apply parallax on desktop for better mobile performance
        const isDesktop = window.innerWidth > 768;
        
        if (isDesktop) {
            let ticking = false;
            
            window.addEventListener('scroll', () => {
                if (!ticking) {
                    window.requestAnimationFrame(() => {
                        const scrolled = window.pageYOffset;
                        const rate = scrolled * 0.3; // Reduced for smoother effect
                        
                        if (scrolled < hero.offsetHeight) {
                            phoneMockup.style.transform = `translateY(${rate}px) scale(1)`;
                        } else {
                            phoneMockup.style.transform = 'translateY(0) scale(1)';
                        }
                        
                        ticking = false;
                    });
                    ticking = true;
                }
            }, { passive: true });
        }
    }
}

// Animate numbers/counters (if needed in future)
function animateValue(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        element.textContent = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// Analytics Tracking Functions
function trackEvent(eventName, eventCategory, eventLabel, eventValue) {
    // Google Analytics 4
    if (typeof gtag !== 'undefined') {
        gtag('event', eventName, {
            'event_category': eventCategory,
            'event_label': eventLabel,
            'value': eventValue
        });
    }
    
    // Console log for debugging (disabled in production)
    // Uncomment below for debugging:
    // console.log('Analytics Event:', {
    //     event: eventName,
    //     category: eventCategory,
    //     label: eventLabel,
    //     value: eventValue
    // });
}

function trackPageView(pageName) {
    if (typeof gtag !== 'undefined') {
        gtag('event', 'page_view', {
            'page_title': pageName,
            'page_location': window.location.href
        });
    }
}

function trackScrollDepth() {
    let maxScroll = 0;
    const scrollThresholds = [25, 50, 75, 90, 100];
    const trackedThresholds = new Set();
    
    window.addEventListener('scroll', () => {
        const scrollPercent = Math.round(
            ((window.scrollY + window.innerHeight) / document.documentElement.scrollHeight) * 100
        );
        
        if (scrollPercent > maxScroll) {
            maxScroll = scrollPercent;
            
            scrollThresholds.forEach(threshold => {
                if (scrollPercent >= threshold && !trackedThresholds.has(threshold)) {
                    trackedThresholds.add(threshold);
                    trackEvent('scroll_depth', 'Engagement', `${threshold}%`, threshold);
                }
            });
        }
    }, { passive: true });
}

function trackTimeOnPage() {
    const startTime = Date.now();
    
    // Track time on page when user leaves
    window.addEventListener('beforeunload', () => {
        const timeOnPage = Math.round((Date.now() - startTime) / 1000);
        trackEvent('time_on_page', 'Engagement', 'Page Visit', timeOnPage);
    });
    
    // Track 30 second milestone
    setTimeout(() => {
        trackEvent('time_on_page', 'Engagement', '30 seconds', 30);
    }, 30000);
    
    // Track 1 minute milestone
    setTimeout(() => {
        trackEvent('time_on_page', 'Engagement', '1 minute', 60);
    }, 60000);
}

function trackSectionViews() {
    const sections = document.querySelectorAll('section');
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionName = entry.target.className || entry.target.id || 'Unknown Section';
                trackEvent('section_view', 'Content', sectionName, null);
                sectionObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5
    });
    
    sections.forEach(section => {
        sectionObserver.observe(section);
    });
}

// Lazy Loading Image Handler
function initLazyImages() {
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            });
        }, {
            rootMargin: '50px'
        });
        
        lazyImages.forEach(img => {
            imageObserver.observe(img);
        });
    } else {
        // Fallback for browsers without IntersectionObserver
        lazyImages.forEach(img => {
            img.classList.add('loaded');
        });
    }
}

// FAQ Accordion functionality
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Analytics Tracking
    trackPageView('Landing Page');
    trackScrollDepth();
    trackTimeOnPage();
    trackSectionViews();
    
    // Initialize lazy loading
    initLazyImages();
    
    // Initialize scroll animations
    initScrollAnimations();
    
    // Initialize parallax effect
    initParallax();
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        
        if (!question || !answer) return;
        
        function toggleFAQ() {
            const isActive = item.classList.contains('active');
            const questionText = question.querySelector('span')?.textContent || 'Unknown Question';
            
            // Close all FAQ items
            faqItems.forEach(faqItem => {
                faqItem.classList.remove('active');
                const faqQuestion = faqItem.querySelector('.faq-question');
                const faqAnswer = faqItem.querySelector('.faq-answer');
                if (faqQuestion) {
                    faqQuestion.setAttribute('aria-expanded', 'false');
                }
                if (faqAnswer) {
                    faqAnswer.setAttribute('aria-hidden', 'true');
                }
            });
            
            // Open clicked item if it wasn't active
            if (!isActive) {
                item.classList.add('active');
                question.setAttribute('aria-expanded', 'true');
                answer.setAttribute('aria-hidden', 'false');
                trackEvent('faq_open', 'Engagement', questionText, null);
            } else {
                question.setAttribute('aria-expanded', 'false');
                answer.setAttribute('aria-hidden', 'true');
                trackEvent('faq_close', 'Engagement', questionText, null);
            }
        }
        
        // Click handler
        question.addEventListener('click', toggleFAQ);
        
        // Keyboard handler (Enter and Space)
        question.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleFAQ();
            }
        });
    });
    
    // Waitlist Modal functionality
    const waitlistModal = document.getElementById('waitlistModal');
    const joinWaitlistButtons = document.querySelectorAll('.join-waitlist-btn');
    const closeModalButton = document.querySelector('.waitlist-modal-close');
    const modalOverlay = document.querySelector('.waitlist-modal-overlay');
    
    // Open modal when any "Join Waitlist" button is clicked
    joinWaitlistButtons.forEach(button => {
        button.addEventListener('click', function() {
            const buttonLocation = button.closest('section')?.className || button.closest('header')?.className || 'Unknown';
            trackEvent('waitlist_button_click', 'Conversion', buttonLocation, null);
            waitlistModal.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        });
    });
    
    // Open modal when "Contact us" link is clicked
    const contactUsLink = document.querySelector('.contact-us-link');
    if (contactUsLink) {
        contactUsLink.addEventListener('click', function(e) {
            e.preventDefault();
            waitlistModal.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        });
    }
    
    // Close modal when close button is clicked
    if (closeModalButton) {
        closeModalButton.addEventListener('click', function() {
            trackEvent('modal_close', 'Engagement', 'Close Button', null);
            waitlistModal.classList.remove('active');
            document.body.style.overflow = ''; // Restore scrolling
        });
    }
    
    // Close modal when overlay is clicked
    if (modalOverlay) {
        modalOverlay.addEventListener('click', function() {
            trackEvent('modal_close', 'Engagement', 'Overlay Click', null);
            waitlistModal.classList.remove('active');
            document.body.style.overflow = ''; // Restore scrolling
        });
    }
    
    // Close modal on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && waitlistModal.classList.contains('active')) {
            trackEvent('modal_close', 'Engagement', 'Escape Key', null);
            waitlistModal.classList.remove('active');
            document.body.style.overflow = ''; // Restore scrolling
        }
    });
    
    // Waitlist form submission
    const waitlistForm = document.querySelector('.waitlist-form');
    if (waitlistForm) {
        waitlistForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('#waitlist-email') || this.querySelector('.waitlist-email-input');
            const email = emailInput ? emailInput.value : '';
            
            // Track form submission
            trackEvent('waitlist_signup', 'Conversion', 'Form Submission', null);
            
            // Here you would typically send the email to your backend
            alert('Thank you for joining the waitlist! We\'ll be in touch soon.');
            if (emailInput) {
                emailInput.value = '';
            }
            
            // Close modal after submission
            waitlistModal.classList.remove('active');
            document.body.style.overflow = ''; // Restore scrolling
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add loading animation to page
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease-in';
        document.body.style.opacity = '1';
    }, 100);

    // Animate chat bubbles in phone mockup
    const chatBubbles = document.querySelectorAll('.chat-bubble');
    if (chatBubbles.length > 0) {
        chatBubbles.forEach((bubble, index) => {
            setTimeout(() => {
                bubble.style.animation = 'fadeInUp 0.5s ease-out forwards';
            }, 2000 + (index * 300));
        });
    }
    
    // Make phone mockup interactive and responsive
    initPhoneMockupInteractions();
    
    // Update phone time to show current time
    function updatePhoneTime() {
        const timeElement = document.getElementById('phone-time');
        if (timeElement) {
            const now = new Date();
            const hours = now.getHours().toString().padStart(2, '0');
            const minutes = now.getMinutes().toString().padStart(2, '0');
            timeElement.textContent = `${hours}:${minutes}`;
        }
    }
    
    // Update phone battery level
    function updatePhoneBattery() {
        const batteryFill = document.getElementById('battery-fill');
        const batteryIcon = document.getElementById('phone-battery');
        
        if (batteryFill && batteryIcon) {
            let batteryLevel = 85; // Default fallback
            
            // Try to get actual battery level if Battery API is available
            if (navigator.getBattery) {
                navigator.getBattery().then(function(battery) {
                    batteryLevel = Math.round(battery.level * 100);
                    updateBatteryDisplay(batteryLevel, batteryFill, batteryIcon);
                }).catch(function() {
                    updateBatteryDisplay(batteryLevel, batteryFill, batteryIcon);
                });
            } else {
                updateBatteryDisplay(batteryLevel, batteryFill, batteryIcon);
            }
        }
    }
    
    function updateBatteryDisplay(level, fillElement, iconElement) {
        // Calculate width based on battery level (battery width is 18, starting at x=3.5, so fill width is 15)
        const maxFillWidth = 15;
        const fillWidth = (level / 100) * maxFillWidth;
        fillElement.setAttribute('width', Math.max(0, Math.min(fillWidth, maxFillWidth)));
        
        // Change color based on battery level
        const svg = iconElement.querySelector('svg');
        if (level > 50) {
            svg.style.color = 'var(--text-white)';
        } else if (level > 20) {
            svg.style.color = '#FFA500'; // Orange for low battery
        } else {
            svg.style.color = '#FF4444'; // Red for very low battery
        }
    }
    
    // Update time immediately and then every minute
    updatePhoneTime();
    setInterval(updatePhoneTime, 60000); // Update every minute
    
    // Update battery level on page load
    updatePhoneBattery();
    
    // Update battery level every 30 seconds if Battery API is available
    if (navigator.getBattery) {
        setInterval(updatePhoneBattery, 30000); // Update every 30 seconds
    }
});

// Phone mockup interactions and dynamic features
function initPhoneMockupInteractions() {
    const phoneFrame = document.querySelector('.phone-frame');
    const phoneScreen = document.querySelector('.phone-screen');
    
    if (!phoneFrame || !phoneScreen) return;
    
    // Add touch-friendly interactions
    let isTouching = false;
    let touchStartY = 0;
    let scrollStartY = 0;
    
    // Touch events for mobile
    phoneScreen.addEventListener('touchstart', function(e) {
        isTouching = true;
        touchStartY = e.touches[0].clientY;
        scrollStartY = phoneScreen.scrollTop;
        phoneScreen.style.transition = 'none';
    }, { passive: true });
    
    phoneScreen.addEventListener('touchmove', function(e) {
        if (!isTouching) return;
        const touchY = e.touches[0].clientY;
        const deltaY = touchStartY - touchY;
        phoneScreen.scrollTop = scrollStartY + deltaY;
    }, { passive: true });
    
    phoneScreen.addEventListener('touchend', function() {
        isTouching = false;
        phoneScreen.style.transition = '';
    }, { passive: true });
    
    // Add hover effect for desktop (only if not scrolling)
    if (window.matchMedia('(hover: hover)').matches) {
        let isScrolling = false;
        
        window.addEventListener('scroll', () => {
            isScrolling = true;
            clearTimeout(window.scrollTimeout);
            window.scrollTimeout = setTimeout(() => {
                isScrolling = false;
            }, 150);
        }, { passive: true });
        
        phoneFrame.addEventListener('mouseenter', function() {
            if (!isScrolling) {
                phoneFrame.style.transform = 'scale(1.02) translateY(-5px)';
            }
        });
        
        phoneFrame.addEventListener('mouseleave', function() {
            if (!isScrolling) {
                phoneFrame.style.transform = 'scale(1) translateY(0)';
            }
        });
    }
    
    // Add click/tap animation with haptic feedback on mobile
    phoneFrame.addEventListener('click', function() {
        phoneFrame.style.transform = 'scale(0.98)';
        
        // Haptic feedback on supported devices
        if (navigator.vibrate) {
            navigator.vibrate(10);
        }
        
        setTimeout(() => {
            phoneFrame.style.transform = '';
        }, 150);
    });
    
    // Dynamic content updates based on viewport
    function updatePhoneContentForViewport() {
        const isMobile = window.innerWidth <= 768;
        const phoneContent = document.querySelector('.phone-content');
        
        if (phoneContent) {
            // Adjust content spacing on mobile
            if (isMobile) {
                phoneContent.style.padding = '16px 12px';
            } else {
                phoneContent.style.padding = '24px';
            }
        }
    }
    
    // Update on resize
    let resizeTimeout;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(updatePhoneContentForViewport, 250);
    });
    
    // Initial update
    updatePhoneContentForViewport();
    
    // Add smooth scroll behavior to phone content
    const phoneContent = document.querySelector('.phone-content');
    if (phoneContent) {
        phoneContent.style.scrollBehavior = 'smooth';
    }
    
    // Note: Parallax is already handled by initParallax() function
    // This ensures phone mockup works well with existing parallax
}

