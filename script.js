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

    // Observe audience cards
    document.querySelectorAll('.audience-card').forEach(card => {
        observer.observe(card);
    });

    // Observe FAQ items
    document.querySelectorAll('.faq-item').forEach(item => {
        observer.observe(item);
    });
}

// Parallax effect for hero section
function initParallax() {
    const hero = document.querySelector('.hero');
    const phoneMockup = document.querySelector('.phone-frame');
    
    if (hero && phoneMockup) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * 0.5;
            
            if (scrolled < hero.offsetHeight) {
                phoneMockup.style.transform = `translateY(${rate}px)`;
            }
        });
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

// FAQ Accordion functionality
document.addEventListener('DOMContentLoaded', function() {
    // Initialize scroll animations
    initScrollAnimations();
    
    // Initialize parallax effect
    initParallax();
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', function() {
            const isActive = item.classList.contains('active');
            
            // Close all FAQ items
            faqItems.forEach(faqItem => {
                faqItem.classList.remove('active');
            });
            
            // Open clicked item if it wasn't active
            if (!isActive) {
                item.classList.add('active');
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
            waitlistModal.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        });
    });
    
    // Close modal when close button is clicked
    if (closeModalButton) {
        closeModalButton.addEventListener('click', function() {
            waitlistModal.classList.remove('active');
            document.body.style.overflow = ''; // Restore scrolling
        });
    }
    
    // Close modal when overlay is clicked
    if (modalOverlay) {
        modalOverlay.addEventListener('click', function() {
            waitlistModal.classList.remove('active');
            document.body.style.overflow = ''; // Restore scrolling
        });
    }
    
    // Close modal on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && waitlistModal.classList.contains('active')) {
            waitlistModal.classList.remove('active');
            document.body.style.overflow = ''; // Restore scrolling
        }
    });
    
    // Waitlist form submission
    const waitlistForm = document.querySelector('.waitlist-form');
    if (waitlistForm) {
        waitlistForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('.email-input').value;
            
            // Here you would typically send the email to your backend
            alert('Thank you for joining the waitlist! We\'ll be in touch soon.');
            this.querySelector('.email-input').value = '';
            
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
});

