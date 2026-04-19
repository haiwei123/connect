<template>
  <div>
    <NuxtLink to="/" class="back-home">← 返回首页</NuxtLink>
    <!-- 粒子背景 -->
    <div id="particles-bg"></div>
    
    <!-- 导航栏 -->
    <nav class="navbar">
        <div class="nav-container">
            <div class="logo">
                <span class="logo-text">BeeSIM</span>
            </div>
            <ul class="nav-links">
                <li><a href="#" data-section="0">首页</a></li>
                <li><a href="#" data-section="1">特性</a></li>
                <li><a href="#" data-section="2">使用指南</a></li>
                <li><a href="#" data-section="3">套餐</a></li>
                <li><a href="#" data-section="4">评价</a></li>
                <li><a href="#" data-section="5">联系</a></li>
            </ul>
            <div class="nav-actions">
                <button class="btn-ghost">登录</button>
                <button class="btn-primary">立即注册</button>
            </div>
        </div>
    </nav>

    <!-- 页面指示器 -->
    <div class="page-dots">
        <span class="dot active" data-section="0"></span>
        <span class="dot" data-section="1"></span>
        <span class="dot" data-section="2"></span>
        <span class="dot" data-section="3"></span>
        <span class="dot" data-section="4"></span>
        <span class="dot" data-section="5"></span>
    </div>

    <!-- 全屏容器 -->
    <div class="fullpage-wrapper" id="fullpage">

        <!-- Section 0: Hero -->
        <section class="fp-section" data-index="0">
            <div class="section-bg">
                <div class="gradient-orb orb-1"></div>
                <div class="gradient-orb orb-2"></div>
                <div class="grid-overlay"></div>
            </div>
            <div class="section-container hero-section">
                <div class="hero-content">
                    <div class="hero-badge">
                        <span class="badge-dot"></span>
                        <span>全球200+国家和地区覆盖</span>
                    </div>
                    <h1 class="hero-title">
                        <span class="title-line">让世界</span>
                        <span class="title-line gradient-text">触手可及</span>
                    </h1>
                    <p class="hero-subtitle">
                        BeeSIM 为您提供即时激活的全球eSIM服务，告别传统SIM卡的繁琐，
                        一部手机畅游全球，享受无缝连接的数字生活。
                    </p>
                    <div class="hero-cta">
                        <button class="btn-primary btn-large">
                            <span>开始体验</span>
                            <span class="btn-arrow">→</span>
                        </button>
                        <button class="btn-outline btn-large">观看演示</button>
                    </div>
                    <div class="hero-stats">
                        <div class="stat-item">
                            <span class="stat-number">200+</span>
                            <span class="stat-label">覆盖国家</span>
                        </div>
                        <div class="stat-divider"></div>
                        <div class="stat-item">
                            <span class="stat-number">500万+</span>
                            <span class="stat-label">活跃用户</span>
                        </div>
                        <div class="stat-divider"></div>
                        <div class="stat-item">
                            <span class="stat-number">99.9%</span>
                            <span class="stat-label">网络稳定性</span>
                        </div>
                    </div>
                </div>
                <div class="hero-visual">
                    <div class="phone-mockup">
                        <div class="phone-frame">
                            <div class="phone-notch"></div>
                            <div class="phone-screen">
                                <div class="app-header">
                                    <span class="app-logo">🐝 BeeSIM</span>
                                    <span class="app-status online">● 已连接</span>
                                </div>
                                <div class="app-content">
                                    <div class="data-card">
                                        <div class="data-icon">🌏</div>
                                        <div class="data-info">
                                            <span class="data-location">日本 · 东京</span>
                                            <span class="data-plan">10GB 高速流量</span>
                                        </div>
                                        <div class="data-speed">
                                            <span class="speed-value">156</span>
                                            <span class="speed-unit">Mbps</span>
                                        </div>
                                    </div>
                                    <div class="usage-chart">
                                        <div class="chart-header">
                                            <span>流量使用</span>
                                            <span>3.2GB / 10GB</span>
                                        </div>
                                        <div class="chart-bar">
                                            <div class="chart-fill"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="phone-glow"></div>
                    </div>
                    <div class="floating-cards">
                        <div class="float-card card-1">🇯🇵 日本 eSIM 已激活</div>
                        <div class="float-card card-2">⚡ 5G 网络可用</div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Section 1: Features -->
        <section class="fp-section" data-index="1">
            <div class="section-bg">
                <div class="bg-dots"></div>
            </div>
            <div class="section-container">
                <div class="section-header">
                    <span class="section-tag">产品特性</span>
                    <h2 class="section-title">为什么选择 <span class="gradient-text">BeeSIM</span></h2>
                    <p class="section-desc">我们重新定义了全球移动连接体验</p>
                </div>
                <div class="features-grid">
                    <div class="feature-card featured">
                        <div class="feature-icon">⚡</div>
                        <h3>即时激活</h3>
                        <p>扫码即用，无需等待实体卡邮寄。落地即可连接网络。</p>
                        <div class="feature-stats">
                            <div class="f-stat"><span class="f-num">3秒</span><span class="f-label">激活</span></div>
                            <div class="f-stat"><span class="f-num">0等待</span><span class="f-label">即用</span></div>
                        </div>
                    </div>
                    <div class="feature-card">
                        <div class="feature-icon">🌍</div>
                        <h3>全球覆盖</h3>
                        <p>200+国家和地区无缝漫游</p>
                    </div>
                    <div class="feature-card">
                        <div class="feature-icon">💰</div>
                        <h3>超值价格</h3>
                        <p>相比传统漫游节省90%</p>
                    </div>
                    <div class="feature-card">
                        <div class="feature-icon">🔒</div>
                        <h3>安全可靠</h3>
                        <p>企业级加密保护数据</p>
                    </div>
                    <div class="feature-card">
                        <div class="feature-icon">📱</div>
                        <h3>便捷管理</h3>
                        <p>小程序轻松管理eSIM</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Section 2: How It Works -->
        <section class="fp-section section-dark" data-index="2">
            <div class="section-bg">
                <div class="glow-center"></div>
                <div class="particles" id="particles"></div>
            </div>
            <div class="section-container">
                <div class="section-header">
                    <span class="section-tag">使用指南</span>
                    <h2 class="section-title">简单 <span class="gradient-text">四步</span> 开启全球连接</h2>
                </div>
                <div class="steps-wrapper">
                    <div class="steps-line"></div>
                    <div class="steps-grid">
                        <div class="step-card">
                            <div class="step-number">01</div>
                            <div class="step-icon">🛒</div>
                            <h3>购买 BeeSIM 卡</h3>
                            <p>选择您需要的BeeSIM实体卡</p>
                        </div>
                        <div class="step-card">
                            <div class="step-number">02</div>
                            <div class="step-icon">🌐</div>
                            <h3>选购 eSIM 套餐</h3>
                            <p>根据目的地选择流量套餐</p>
                        </div>
                        <div class="step-card">
                            <div class="step-number">03</div>
                            <div class="step-icon">📲</div>
                            <h3>扫码添加 eSIM</h3>
                            <p>扫描二维码完成安装</p>
                        </div>
                        <div class="step-card">
                            <div class="step-number">04</div>
                            <div class="step-icon">✨</div>
                            <h3>激活开始使用</h3>
                            <p>到达目的地即刻享用</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Section 3: Pricing -->
        <section class="fp-section" data-index="3">
            <div class="section-bg">
                <div class="bg-gradient-soft"></div>
            </div>
            <div class="section-container">
                <div class="section-header">
                    <span class="section-tag">套餐价格</span>
                    <h2 class="section-title">选择适合您的 <span class="gradient-text">套餐</span></h2>
                </div>
                <div class="pricing-tabs">
                    <button class="tab active">🇯🇵 日本</button>
                    <button class="tab">🇰🇷 韩国</button>
                    <button class="tab">🇹🇭 泰国</button>
                    <button class="tab">🇺🇸 美国</button>
                    <button class="tab">🇪🇺 欧洲</button>
                </div>
                <div class="pricing-grid">
                    <div class="pricing-card">
                        <h3>轻量版</h3>
                        <div class="pricing-price"><span>¥</span>29</div>
                        <div class="pricing-meta"><span class="data-badge">1GB</span> 3天有效</div>
                        <ul><li>✓ 4G LTE</li><li>✓ 即时激活</li><li>✓ 在线客服</li></ul>
                        <button class="btn-card">选择套餐</button>
                    </div>
                    <div class="pricing-card popular">
                        <div class="popular-badge">最受欢迎</div>
                        <h3>标准版</h3>
                        <div class="pricing-price"><span>¥</span>68</div>
                        <div class="pricing-meta"><span class="data-badge">5GB</span> 7天有效</div>
                        <ul><li>✓ 5G 网络</li><li>✓ 即时激活</li><li>✓ 热点共享</li><li>✓ 优先客服</li></ul>
                        <button class="btn-primary btn-card">选择套餐</button>
                    </div>
                    <div class="pricing-card">
                        <h3>无限版</h3>
                        <div class="pricing-price"><span>¥</span>128</div>
                        <div class="pricing-meta"><span class="data-badge">无限</span> 15天有效</div>
                        <ul><li>✓ 5G 网络</li><li>✓ 无限流量</li><li>✓ 热点共享</li><li>✓ VIP客服</li></ul>
                        <button class="btn-card">选择套餐</button>
                    </div>
                </div>
            </div>
        </section>

        <!-- Section 4: Testimonials -->
        <section class="fp-section section-dark" data-index="4">
            <div class="section-bg">
                <div class="glow-center"></div>
            </div>
            <div class="section-container">
                <div class="section-header">
                    <span class="section-tag">用户评价</span>
                    <h2 class="section-title">来自全球用户的 <span class="gradient-text">真实反馈</span></h2>
                </div>
                <div class="testimonials-grid">
                    <div class="testimonial-card">
                        <div class="testimonial-stars">★★★★★</div>
                        <p class="testimonial-text">"去日本旅游用的BeeSIM，落地就能用，网速超快！再也不用担心找WiFi了，强烈推荐给经常出国的朋友。"</p>
                        <div class="testimonial-author">
                            <div class="author-avatar">L</div>
                            <div class="author-info">
                                <span class="author-name">李明</span>
                                <span class="author-location">上海 · 日本旅行</span>
                            </div>
                        </div>
                    </div>
                    <div class="testimonial-card">
                        <div class="testimonial-stars">★★★★★</div>
                        <p class="testimonial-text">"作为经常出差的商务人士，BeeSIM帮我省了很多漫游费，而且操作特别简单，3秒激活不是吹的！"</p>
                        <div class="testimonial-author">
                            <div class="author-avatar">W</div>
                            <div class="author-info">
                                <span class="author-name">王芳</span>
                                <span class="author-location">北京 · 商务出行</span>
                            </div>
                        </div>
                    </div>
                    <div class="testimonial-card">
                        <div class="testimonial-stars">★★★★★</div>
                        <p class="testimonial-text">"欧洲多国游用了BeeSIM的欧洲套餐，一张卡走遍十几个国家，太方便了！价格也比机场买的便宜很多。"</p>
                        <div class="testimonial-author">
                            <div class="author-avatar">Z</div>
                            <div class="author-info">
                                <span class="author-name">张伟</span>
                                <span class="author-location">深圳 · 欧洲旅行</span>
                            </div>
                        </div>
                    </div>
                    <div class="testimonial-card">
                        <div class="testimonial-stars">★★★★★</div>
                        <p class="testimonial-text">"客服响应很快，有问题随时解决。第一次用eSIM有点担心，结果完全多虑了，体验非常顺畅！"</p>
                        <div class="testimonial-author">
                            <div class="author-avatar">C</div>
                            <div class="author-info">
                                <span class="author-name">陈静</span>
                                <span class="author-location">广州 · 泰国旅行</span>
                            </div>
                        </div>
                    </div>
                    <div class="testimonial-card">
                        <div class="testimonial-stars">★★★★★</div>
                        <p class="testimonial-text">"带父母出国旅游，给他们也买了BeeSIM，老人家都能自己操作，界面很友好，点赞！"</p>
                        <div class="testimonial-author">
                            <div class="author-avatar">H</div>
                            <div class="author-info">
                                <span class="author-name">黄磊</span>
                                <span class="author-location">杭州 · 家庭出游</span>
                            </div>
                        </div>
                    </div>
                    <div class="testimonial-card">
                        <div class="testimonial-stars">★★★★★</div>
                        <p class="testimonial-text">"留学生必备！比学校推荐的运营商便宜太多了，网速稳定，视频通话完全没问题。"</p>
                        <div class="testimonial-author">
                            <div class="author-avatar">S</div>
                            <div class="author-info">
                                <span class="author-name">孙悦</span>
                                <span class="author-location">成都 · 美国留学</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Section 5: CTA + Footer -->
        <section class="fp-section" data-index="5">
            <div class="section-bg">
                <div class="gradient-orb orb-1"></div>
                <div class="gradient-orb orb-2"></div>
            </div>
            <div class="section-container cta-section">
                <div class="cta-content">
                    <h2>准备好开启您的全球连接之旅了吗？</h2>
                    <p>立即注册，获取您的第一张eSIM，享受无缝的全球网络体验</p>
                    <div class="cta-buttons">
                        <button class="btn-primary btn-large">立即开始 →</button>
                        <button class="btn-outline btn-large">联系我们</button>
                    </div>
                    <div class="cta-trust">
                        <span>🔒 安全支付</span>
                        <span>⚡ 即时发货</span>
                        <span>💬 24/7客服</span>
                        <span>↩️ 无忧退款</span>
                    </div>
                </div>
                <footer class="footer">
                    <div class="footer-content">
                        <div class="footer-brand">
                            <div class="logo">
                                <div class="logo-icon">🐝</div>
                                <span class="logo-text">BeeSIM</span>
                            </div>
                            <p>让世界触手可及</p>
                        </div>
                        <div class="footer-links">
                            <div class="footer-col">
                                <h4>产品</h4>
                                <a href="#">eSIM套餐</a>
                                <a href="#">覆盖范围</a>
                                <a href="#">企业服务</a>
                            </div>
                            <div class="footer-col">
                                <h4>支持</h4>
                                <a href="#">帮助中心</a>
                                <a href="#">使用指南</a>
                                <a href="#">联系我们</a>
                            </div>
                            <div class="footer-col">
                                <h4>公司</h4>
                                <a href="#">关于我们</a>
                                <a href="#">加入我们</a>
                                <a href="#">隐私政策</a>
                            </div>
                        </div>
                    </div>
                    <div class="footer-bottom">
                        <p>© 2026 BeeSIM. All Rights Reserved. | support@beesim.com</p>
                    </div>
                </footer>
            </div>
        </section>

    </div>
  </div>
</template>


<style scoped>
.back-home {
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 10000;
  background: rgba(59, 130, 246, 0.9);
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  font-size: 14px;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.back-home:hover {
  background: rgba(59, 130, 246, 1);
  transform: translateX(-4px);
}
</style>
