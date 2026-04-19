// ========================================
// BeeSIM Pro - 全屏滚动
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    initFullpage();
    initParticles();
    initTabs();
});

// 全屏滚动
function initFullpage() {
    const container = document.getElementById('fullpage');
    const sections = document.querySelectorAll('.section');
    const dots = document.querySelectorAll('.side-indicator .dot');
    const navLinks = document.querySelectorAll('.nav-links a');
    const nav = document.querySelector('.nav');
    const indicator = document.querySelector('.side-indicator');
    
    let current = 0;
    let isScrolling = false;
    const total = sections.length;
    
    function goTo(index) {
        if (index < 0 || index >= total || isScrolling) return;
        
        isScrolling = true;
        current = index;
        
        container.style.transform = `translateY(-${index * 100}vh)`;
        
        // 更新指示器
        dots.forEach((d, i) => d.classList.toggle('active', i === index));
        navLinks.forEach((l, i) => l.classList.toggle('active', i === index));
        
        // 深色背景切换
        const isDark = sections[index].classList.contains('section-dark');
        nav.classList.toggle('dark', isDark);
        indicator.classList.toggle('light', isDark);
        
        setTimeout(() => isScrolling = false, 800);
    }
    
    // 滚轮
    let wheelTimer;
    window.addEventListener('wheel', (e) => {
        e.preventDefault();
        if (isScrolling) return;
        
        clearTimeout(wheelTimer);
        wheelTimer = setTimeout(() => {
            goTo(current + (e.deltaY > 0 ? 1 : -1));
        }, 50);
    }, { passive: false });
    
    // 触摸
    let touchY = 0;
    window.addEventListener('touchstart', (e) => touchY = e.touches[0].clientY, { passive: true });
    window.addEventListener('touchend', (e) => {
        const diff = touchY - e.changedTouches[0].clientY;
        if (Math.abs(diff) > 50) goTo(current + (diff > 0 ? 1 : -1));
    }, { passive: true });
    
    // 键盘
    window.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowDown') { e.preventDefault(); goTo(current + 1); }
        if (e.key === 'ArrowUp') { e.preventDefault(); goTo(current - 1); }
    });
    
    // 点击
    dots.forEach((d, i) => d.addEventListener('click', () => goTo(i)));
    navLinks.forEach((l, i) => l.addEventListener('click', (e) => { e.preventDefault(); goTo(i); }));
    
    goTo(0);
}

// 粒子效果
function initParticles() {
    const field = document.getElementById('particles');
    if (!field) return;
    
    for (let i = 0; i < 40; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        p.style.left = Math.random() * 100 + '%';
        p.style.top = Math.random() * 100 + '%';
        p.style.animationDelay = Math.random() * 4 + 's';
        p.style.animationDuration = (3 + Math.random() * 3) + 's';
        field.appendChild(p);
    }
}

// Tab 切换
function initTabs() {
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
        });
    });
}

console.log('🐝 BeeSIM Pro Loaded');
