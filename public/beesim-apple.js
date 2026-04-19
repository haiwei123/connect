// ========================================
// BeeSIM - Fullpage Scroll
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    initFullpage();
    init3DSimCard();
    initParticles();
    initStars();
    initPricingTabs();
    initCountUpAnimations();
});

// ========================================
// Count Up Animations
// ========================================
function initCountUpAnimations() {
    const countUpElements = document.querySelectorAll('.countup');
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                entry.target.classList.add('counted');
                animateCountUp(entry.target);
            }
        });
    }, observerOptions);
    
    countUpElements.forEach(el => observer.observe(el));
}

function animateCountUp(element) {
    const target = parseFloat(element.getAttribute('data-target'));
    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = target / steps;
    const stepDuration = duration / steps;
    let current = 0;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        
        // Format number based on target
        if (target === 99.9) {
            element.textContent = current.toFixed(1);
        } else if (target >= 100) {
            element.textContent = Math.floor(current);
        } else {
            element.textContent = Math.floor(current);
        }
    }, stepDuration);
}

// ========================================
// Pricing Tabs
// ========================================
function initPricingTabs() {
    const tabs = document.querySelectorAll('.p-tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
        });
    });
}

// ========================================
// Fullpage Scroll
// ========================================
function initFullpage() {
    const container = document.getElementById('fullpage');
    const sections = document.querySelectorAll('.fp-section');
    const dots = document.querySelectorAll('.page-indicator .dot');
    const navLinks = document.querySelectorAll('.nav-links a');
    const nav = document.querySelector('.nav');
    const indicator = document.querySelector('.page-indicator');
    
    let currentSection = 0;
    let isScrolling = false;
    const totalSections = sections.length;
    
    // 滚动到指定 section
    function scrollToSection(index) {
        if (index < 0 || index >= totalSections || isScrolling) return;
        
        isScrolling = true;
        currentSection = index;
        
        // 移动容器
        container.style.transform = `translateY(-${index * 100}vh)`;
        
        // 更新指示器
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
        
        // 更新导航链接
        navLinks.forEach((link, i) => {
            link.classList.toggle('active', i === index);
        });
        
        // 更新导航栏和指示器颜色
        const isDark = sections[index].classList.contains('fp-dark');
        nav.classList.toggle('dark', isDark);
        indicator.classList.toggle('light', isDark);
        
        // 触发 section 动画
        sections[index].classList.add('active');
        
        // 防止连续滚动
        setTimeout(() => {
            isScrolling = false;
        }, 800);
    }
    
    // 鼠标滚轮事件
    let wheelTimeout;
    window.addEventListener('wheel', (e) => {
        e.preventDefault();
        
        if (isScrolling) return;
        
        clearTimeout(wheelTimeout);
        wheelTimeout = setTimeout(() => {
            if (e.deltaY > 0) {
                scrollToSection(currentSection + 1);
            } else {
                scrollToSection(currentSection - 1);
            }
        }, 50);
    }, { passive: false });
    
    // 触摸事件
    let touchStartY = 0;
    window.addEventListener('touchstart', (e) => {
        touchStartY = e.touches[0].clientY;
    }, { passive: true });
    
    window.addEventListener('touchend', (e) => {
        const diff = touchStartY - e.changedTouches[0].clientY;
        if (Math.abs(diff) > 50) {
            scrollToSection(currentSection + (diff > 0 ? 1 : -1));
        }
    }, { passive: true });
    
    // 键盘事件
    window.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowDown' || e.key === 'PageDown') {
            e.preventDefault();
            scrollToSection(currentSection + 1);
        } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
            e.preventDefault();
            scrollToSection(currentSection - 1);
        }
    });
    
    // 点击指示器和导航
    dots.forEach((dot, i) => dot.addEventListener('click', () => scrollToSection(i)));
    navLinks.forEach((link, i) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            scrollToSection(i);
        });
    });
    
    scrollToSection(0);
}

// ========================================
// 3D SIM Card
// ========================================
function init3DSimCard() {
    const simCard = document.getElementById('simCard');
    if (!simCard) return;
    
    const inner = simCard.querySelector('.sim-card-inner');
    let isHovering = false;
    let autoRotate = true;
    let angle = 0;
    
    simCard.addEventListener('mouseenter', () => {
        isHovering = true;
        autoRotate = false;
    });
    
    simCard.addEventListener('mouseleave', () => {
        isHovering = false;
        inner.style.transform = `rotateY(-15deg) rotateX(10deg)`;
        setTimeout(() => autoRotate = true, 500);
    });
    
    simCard.addEventListener('mousemove', (e) => {
        if (!isHovering) return;
        const rect = simCard.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
        const y = (rect.height / 2 - (e.clientY - rect.top)) / (rect.height / 2);
        inner.style.transform = `rotateY(${x * 30}deg) rotateX(${y * 20}deg)`;
    });
    
    function animate() {
        if (autoRotate) {
            angle += 0.5;
            inner.style.transform = `rotateY(${Math.sin(angle * 0.02) * 20}deg) rotateX(${10 + Math.cos(angle * 0.015) * 8}deg)`;
        }
        requestAnimationFrame(animate);
    }
    animate();
}

// ========================================
// Particles (Feature Section)
// ========================================
function initParticles() {
    const field = document.getElementById('particleField');
    if (!field) return;
    
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 3 + 's';
        particle.style.animationDuration = (2 + Math.random() * 2) + 's';
        field.appendChild(particle);
    }
}

// ========================================
// Stars (CTA Section)
// ========================================
function initStars() {
    const field = document.getElementById('starsField');
    if (!field) return;
    
    for (let i = 0; i < 80; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 2 + 's';
        star.style.width = star.style.height = (1 + Math.random() * 2) + 'px';
        field.appendChild(star);
    }
}

console.log('🐝 BeeSIM Fullpage with Backgrounds Loaded');
