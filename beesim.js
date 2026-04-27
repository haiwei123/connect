// ========================================
// BeeSIM Website - 全屏滚动
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    initParticlesBg();
    initFullpage();
    initParticles();
    initTabs();
});

// 粒子背景
function initParticlesBg() {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const container = document.getElementById('particles-bg');
    if (!container) return;
    
    container.appendChild(canvas);
    
    let particles = [];
    const count = 60;
    
    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    function createParticle() {
        return {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 2 + 0.5,
            speedX: (Math.random() - 0.5) * 0.5,
            speedY: (Math.random() - 0.5) * 0.5,
            opacity: Math.random() * 0.5 + 0.2
        };
    }
    
    function init() {
        resize();
        particles = [];
        for (let i = 0; i < count; i++) {
            particles.push(createParticle());
        }
    }
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(p => {
            p.x += p.speedX;
            p.y += p.speedY;
            
            if (p.x < 0) p.x = canvas.width;
            if (p.x > canvas.width) p.x = 0;
            if (p.y < 0) p.y = canvas.height;
            if (p.y > canvas.height) p.y = 0;
            
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(251, 191, 36, ${p.opacity})`;
            ctx.fill();
        });
        
        // 连线
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                
                if (dist < 120) {
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(251, 191, 36, ${0.08 * (1 - dist / 120)})`;
                    ctx.lineWidth = 0.5;
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }
        
        requestAnimationFrame(animate);
    }
    
    init();
    animate();
    window.addEventListener('resize', resize);
}

// 全屏滚动
function initFullpage() {
    const container = document.getElementById('fullpage');
    const sections = document.querySelectorAll('.fp-section');
    const dots = document.querySelectorAll('.page-dots .dot');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let current = 0;
    let isScrolling = false;
    const total = sections.length;
    
    function goTo(index) {
        if (index < 0 || index >= total || isScrolling) return;
        
        isScrolling = true;
        current = index;
        
        container.style.transform = `translateY(-${index * 100}vh)`;
        
        dots.forEach((d, i) => d.classList.toggle('active', i === index));
        navLinks.forEach((l, i) => l.classList.toggle('active', i === index));
        
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

// 步骤区粒子
function initParticles() {
    const field = document.getElementById('particles');
    if (!field) return;
    
    for (let i = 0; i < 30; i++) {
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

console.log('🐝 BeeSIM Website Loaded');
