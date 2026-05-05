<template>
  <div class="page">
    <header class="navbar">
      <div class="container">
        <div class="nav-content">
          <div class="logo">
            <div class="logo-icon"></div>
            <span>FREE CONNECT</span>
          </div>
          <nav class="nav-links">
            <a href="#hero" class="active">首页</a>
            <a href="#products">产品服务</a>
            <a href="#capabilities">我们的能力</a>
            <a href="#cases">成功案例</a>
            <a href="#news">公司动态</a>
            <a href="#about">关于我们</a>
            <a href="#contact">联系我们</a>
          </nav>
          <div class="nav-actions">
            <button class="btn-secondary">登录</button>
            <button class="btn-primary">开始使用</button>
          </div>
        </div>
      </div>
    </header>

    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <div class="hero-badge">
            <span class="badge-dot"></span>
            全球 eSIM 连接平台
          </div>
          <h1 class="hero-title">
            让每台设备<br />
            <span class="gradient-text">连接全球</span>
          </h1>
          <p class="hero-description">
            为物联网设备提供全球运营商级 eSIM 连接服务<br />
            一个 API，覆盖 200+ 国家和地区
          </p>
          <div class="hero-actions">
            <button class="btn-large btn-primary">免费试用</button>
            <button class="btn-large btn-ghost">查看文档</button>
          </div>
        </div>
        <div class="hero-visual">
          <img :src="`${config.app.baseURL}diqiu.png`" alt="Global Network" class="globe-image">
        </div>
      </div>
    </section>

    <section class="features">
      <div class="container">
        <div class="section-header">
          <h2>强大的连接能力</h2>
          <p>企业级 eSIM 解决方案</p>
        </div>
        <div class="features-grid">
          <div class="feature-card">
            <img :src="`${config.app.baseURL}icon-earth.png`" alt="" class="feature-icon">
            <h3>全球覆盖</h3>
            <p>覆盖 200+ 国家和地区</p>
          </div>
          <div class="feature-card">
            <img :src="`${config.app.baseURL}icon-esim.png`" alt="" class="feature-icon">
            <h3>即时激活</h3>
            <p>通过 API 实时激活 eSIM</p>
          </div>
          <div class="feature-card">
            <img :src="`${config.app.baseURL}icon-safe.png`" alt="" class="feature-icon">
            <h3>企业级安全</h3>
            <p>端到端加密保护</p>
          </div>
        </div>
      </div>
    </section>

    <section id="cases" class="cases">
      <div class="container">
        <div class="section-header">
          <h2>成功案例</h2>
          <p>服务全球数百家企业，助力业务遍布世界各地</p>
        </div>
        <div class="cases-grid">
          <div class="case-card">
            <div class="case-number">01</div>
            <h3>智能物流</h3>
            <p class="case-company">某跨境电商平台</p>
            <p>为 10,000+ 物流追踪设备提供全球连接，实时监控货物位置，配送效率提升 40%</p>
            <div class="case-stats">
              <span><strong>10K+</strong> 设备</span>
              <span><strong>40%</strong> 效率提升</span>
            </div>
          </div>
          <div class="case-card featured">
            <div class="case-badge">明星案例</div>
            <div class="case-number">02</div>
            <h3>智慧农业</h3>
            <p class="case-company">某农业科技公司</p>
            <p>为 5,000+ 农田传感器提供稳定连接，实现精准灌溉和施肥，节水 30%，增产 25%</p>
            <div class="case-stats">
              <span><strong>5K+</strong> 传感器</span>
              <span><strong>30%</strong> 节水</span>
            </div>
          </div>
          <div class="case-card">
            <div class="case-number">03</div>
            <h3>共享出行</h3>
            <p class="case-company">某共享单车品牌</p>
            <p>为 50,000+ 共享单车提供全球漫游服务，覆盖 30+ 城市，用户满意度 98%</p>
            <div class="case-stats">
              <span><strong>50K+</strong> 单车</span>
              <span><strong>98%</strong> 满意度</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="news" class="news">
      <div class="container">
        <div class="section-header">
          <h2>公司动态</h2>
          <p>了解 FREE CONNECT 的最新动态和行业资讯</p>
        </div>
        <div class="news-grid">
          <div class="news-card featured">
            <div class="news-badge">融资动态</div>
            <div class="news-date">2026-04-15</div>
            <h3>FREE CONNECT 完成 B 轮 5000 万美元融资</h3>
            <p>由红杉资本领投，腾讯、阿里巴巴跟投。本轮融资将主要用于全球市场拓展、5G 技术研发和团队扩充。</p>
          </div>
          <div class="news-card">
            <div class="news-badge">业务拓展</div>
            <div class="news-date">2026-04-10</div>
            <h3>新增 50 个国家和地区覆盖</h3>
            <p>与非洲、南美多家顶级运营商达成战略合作，进一步完善全球服务网络。</p>
          </div>
          <div class="news-card">
            <div class="news-badge">行业荣誉</div>
            <div class="news-date">2026-04-01</div>
            <h3>荣获"2026 年度最佳 eSIM 服务商"</h3>
            <p>在 2026 全球物联网大会上，FREE CONNECT 凭借卓越的技术创新和优质服务获得行业最高荣誉。</p>
          </div>
        </div>
      </div>
    </section>

    <section id="about" class="about">
      <div class="container">
        <div class="section-header">
          <h2>关于我们</h2>
          <p>深圳自由连接科技有限公司致力于为中国制造出海提供全球网络连接服务</p>
        </div>
        <div class="about-content">
          <div class="about-text">
            <h3>公司简介</h3>
            <p>深圳自由连接科技有限公司成立于2020年，是一家专注于物联网eSIM连接服务的高科技企业。我们为中国制造企业提供稳定、高效、安全的全球网络连接解决方案。</p>
            <p>凭借强大的技术研发能力和丰富的行业经验，我们与全球多家运营商建立了深度合作关系，覆盖超过200个国家和地区。</p>
          </div>
          <div class="about-features">
            <div class="about-item">
              <img :src="`${config.app.baseURL}icon-earth.png`" alt="" class="about-icon">
              <h4>全球化覆盖</h4>
              <p>200+国家和地区</p>
            </div>
            <div class="about-item">
              <img :src="`${config.app.baseURL}icon-esim.png`" alt="" class="about-icon">
              <h4>eSIM技术</h4>
              <p>领先的技术方案</p>
            </div>
            <div class="about-item">
              <img :src="`${config.app.baseURL}icon-nz.png`" alt="" class="about-icon">
              <h4>专业团队</h4>
              <p>经验丰富的专家</p>
            </div>
            <div class="about-item">
              <img :src="`${config.app.baseURL}icon-kf.png`" alt="" class="about-icon">
              <h4>24/7支持</h4>
              <p>全天候技术支持</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="contact" class="contact">
      <div class="container">
        <div class="contact-content">
          <h2>准备好开始了吗？</h2>
          <p>立即注册，获取 1000 条免费 eSIM 激活额度</p>
          <div class="contact-actions">
            <button class="btn-large btn-primary">免费开始</button>
            <button class="btn-large btn-ghost">联系销售</button>
          </div>
        </div>
      </div>
    </section>

    <footer class="footer">
      <div class="container">
        <p>© 2026 FREE CONNECT. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
const config = useRuntimeConfig()

// 平滑滚动
if (process.client) {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute('href'))
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    })
  })
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

.page {
  background: #000;
  color: #fff;
  font-family: 'Inter', sans-serif;
  min-height: 100vh;
}

.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 32px;
}

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.nav-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 18px;
  font-weight: 700;
}

.logo-icon {
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #6366F1, #8B5CF6);
  border-radius: 10px;
}

.nav-links {
  display: flex;
  gap: 40px;
}

.nav-links a {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  font-size: 15px;
  transition: color 0.2s;
}

.nav-links a:hover,
.nav-links a.active {
  color: #fff;
}

.nav-actions {
  display: flex;
  gap: 12px;
}

.btn-secondary,
.btn-primary {
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-secondary {
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: transparent;
  color: #fff;
}

.btn-primary {
  border: none;
  background: linear-gradient(135deg, #6366F1, #8B5CF6);
  color: #fff;
}

.hero {
  padding: 180px 0 120px;
}

.hero .container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border-radius: 100px;
  background: rgba(99, 102, 241, 0.1);
  border: 1px solid rgba(99, 102, 241, 0.2);
  color: #A5B4FC;
  font-size: 13px;
  margin-bottom: 32px;
}

.badge-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #6366F1;
}

.hero-title {
  font-size: 72px;
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 24px;
}

.gradient-text {
  background: linear-gradient(135deg, #6366F1, #8B5CF6, #EC4899);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-description {
  font-size: 20px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 40px;
}

.hero-actions {
  display: flex;
  gap: 16px;
}

.btn-large {
  padding: 16px 32px;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-large.btn-primary {
  border: none;
  background: linear-gradient(135deg, #6366F1, #8B5CF6);
  color: #fff;
}

.btn-large.btn-ghost {
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: transparent;
  color: #fff;
}

.globe-image {
  width: 100%;
  max-width: 600px;
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}

.features {
  padding: 120px 0;
}

.section-header {
  text-align: center;
  margin-bottom: 80px;
}

.section-header h2 {
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 16px;
}

.section-header p {
  font-size: 18px;
  color: rgba(255, 255, 255, 0.6);
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
}

.feature-card {
  padding: 40px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s;
}

.feature-card:hover {
  background: rgba(255, 255, 255, 0.04);
  border-color: rgba(99, 102, 241, 0.3);
  transform: translateY(-4px);
}

.feature-icon {
  width: 64px;
  height: 64px;
  margin-bottom: 24px;
}

.feature-card h3 {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 12px;
}

.feature-card p {
  font-size: 15px;
  color: rgba(255, 255, 255, 0.6);
}

.footer {
  padding: 80px 0 40px;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  text-align: center;
}

.footer p {
  color: rgba(255, 255, 255, 0.4);
  font-size: 14px;
}

.cases {
  padding: 120px 0;
  background: rgba(99, 102, 241, 0.02);
}

.cases-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
}

.case-card {
  padding: 40px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  position: relative;
  transition: all 0.3s;
}

.case-card:hover {
  background: rgba(255, 255, 255, 0.04);
  border-color: rgba(99, 102, 241, 0.3);
  transform: translateY(-4px);
}

.case-card.featured {
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(139, 92, 246, 0.1));
  border-color: rgba(99, 102, 241, 0.3);
}

.case-badge {
  position: absolute;
  top: 20px;
  right: 20px;
  background: linear-gradient(135deg, #6366F1, #8B5CF6);
  color: #fff;
  padding: 6px 16px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 700;
}

.case-number {
  font-size: 14px;
  font-weight: 700;
  color: #6366F1;
  margin-bottom: 16px;
}

.case-card h3 {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 8px;
}

.case-company {
  font-size: 13px;
  color: #6366F1;
  margin-bottom: 12px;
  font-weight: 600;
}

.case-card p {
  font-size: 15px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 24px;
}

.case-stats {
  display: flex;
  gap: 20px;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.case-stats span {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.5);
}

.case-stats strong {
  color: #6366F1;
  font-weight: 700;
}

.news {
  padding: 120px 0;
}

.news-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
}

.news-card {
  padding: 32px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s;
}

.news-card:hover {
  background: rgba(255, 255, 255, 0.04);
  border-color: rgba(99, 102, 241, 0.3);
  transform: translateY(-4px);
}

.news-card.featured {
  grid-column: span 3;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.05), rgba(139, 92, 246, 0.05));
}

.news-badge {
  display: inline-block;
  background: rgba(99, 102, 241, 0.2);
  color: #A5B4FC;
  padding: 6px 14px;
  border-radius: 16px;
  font-size: 12px;
  font-weight: 700;
  margin-bottom: 12px;
}

.news-date {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 12px;
}

.news-card h3 {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 12px;
}

.news-card p {
  font-size: 15px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.6);
}

.about {
  padding: 120px 0;
  background: rgba(99, 102, 241, 0.02);
}

.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: start;
}

.about-text h3 {
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 24px;
}

.about-text p {
  font-size: 16px;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 20px;
}

.about-features {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

.about-item {
  text-align: center;
  padding: 32px;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s;
}

.about-item:hover {
  background: rgba(255, 255, 255, 0.04);
  border-color: rgba(99, 102, 241, 0.3);
  transform: translateY(-4px);
}

.about-icon {
  width: 56px;
  height: 56px;
  margin: 0 auto 16px;
}

.about-item h4 {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 8px;
}

.about-item p {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.5);
}

.contact {
  padding: 120px 0;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(139, 92, 246, 0.1));
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.contact-content {
  text-align: center;
  max-width: 700px;
  margin: 0 auto;
}

.contact-content h2 {
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 16px;
}

.contact-content p {
  font-size: 18px;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 40px;
}

.contact-actions {
  display: flex;
  gap: 16px;
  justify-content: center;
}

@media (max-width: 1024px) {
  .hero .container {
    grid-template-columns: 1fr;
  }
  .hero-title {
    font-size: 56px;
  }
  .features-grid,
  .cases-grid,
  .news-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .about-content {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .nav-links {
    display: none;
  }
  .hero-title {
    font-size: 40px;
  }
  .features-grid,
  .cases-grid,
  .news-grid {
    grid-template-columns: 1fr;
  }
  .news-card.featured {
    grid-column: span 1;
  }
}
</style>
