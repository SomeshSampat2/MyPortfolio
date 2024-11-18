// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    mirror: false
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
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

// Navbar background change on scroll
const nav = document.querySelector('.nav-wrapper');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        nav.style.background = 'rgba(42, 42, 114, 0.9)';
    } else {
        nav.style.background = 'rgba(255, 255, 255, 0.1)';
    }
});

// Typing animation for the hero section
const text = "Software Developer & Creative Thinker";
const typingSpeed = 100;
let charIndex = 0;

function typeText() {
    if (charIndex < text.length) {
        document.querySelector('.tagline').textContent += text.charAt(charIndex);
        charIndex++;
        setTimeout(typeText, typingSpeed);
    }
}

// Start typing animation when page loads
window.addEventListener('load', () => {
    document.querySelector('.tagline').textContent = '';
    setTimeout(typeText, 1000);
});

// Project cards hover effect
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
    });
});

// Skill cards animation
const skillCards = document.querySelectorAll('.skill-card');
skillCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) scale(1.05)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});
