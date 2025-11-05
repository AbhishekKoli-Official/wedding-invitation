// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Loading screen
    const loadingScreen = document.getElementById('loading-screen');
    
    // Hide loading screen after 2 seconds
    setTimeout(() => {
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 500);
    }, 2000);
    
    // Countdown timer
    function updateCountdown() {
        const weddingDate = new Date('December 10, 2025 17:00:00').getTime();
        const now = new Date().getTime();
        const timeLeft = weddingDate - now;
        
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
        
        document.getElementById('days').textContent = days.toString().padStart(2, '0');
        document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
    }
    
    // Update countdown every second
    setInterval(updateCountdown, 1000);
    updateCountdown();
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetSection.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    });
    
    // Music toggle
    const musicToggle = document.querySelector('.music-toggle');
    const weddingMusic = document.getElementById('wedding-music');
    let isPlaying = false;
    
    musicToggle.addEventListener('click', function() {
        if (isPlaying) {
            weddingMusic.pause();
            musicToggle.style.background = '#8b4513';
        } else {
            weddingMusic.play().catch(e => {
                console.log('Audio play failed:', e);
                alert('Please interact with the page first to enable audio');
            });
            musicToggle.style.background = '#d4af37';
        }
        isPlaying = !isPlaying;
    });
    
    // Add floating hearts dynamically
    function createFloatingHearts() {
        const bgAnimation = document.querySelector('.floating-hearts');
        
        for (let i = 0; i < 15; i++) {
            const heart = document.createElement('div');
            heart.innerHTML = '❤';
            heart.style.position = 'absolute';
            heart.style.color = 'rgba(212, 175, 55, 0.2)';
            heart.style.fontSize = Math.random() * 20 + 10 + 'px';
            heart.style.left = Math.random() * 100 + '%';
            heart.style.top = Math.random() * 100 + '%';
            heart.style.animation = `float ${Math.random() * 20 + 10}s infinite linear`;
            heart.style.animationDelay = Math.random() * 10 + 's';
            
            bgAnimation.appendChild(heart);
        }
    }
    
    createFloatingHearts();
    
    // Add scroll animation for sections
    const sections = document.querySelectorAll('.section');
    
    function checkScroll() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (sectionTop < windowHeight * 0.85) {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Initialize sections with hidden state
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Check on initial load
});
