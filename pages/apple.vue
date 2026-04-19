<template>
  <div class="apple-page">
    <NuxtLink to="/" class="back-home">← 返回首页</NuxtLink>
    
    <!-- 导航栏 -->
    <nav class="nav" :class="{ dark: isDarkSection }">
      <div class="nav-content">
        <a href="#" class="nav-logo">
          <img src="/logo1.png" alt="BEESIM Logo" class="logo-img" />
        </a>
        <div class="nav-links">
          <a href="#" @click.prevent="scrollToSection(0)" :class="{ active: currentSection === 0 }">首页</a>
          <a href="#" @click.prevent="scrollToSection(1)" :class="{ active: currentSection === 1 }">产品服务</a>
          <a href="#" @click.prevent="scrollToSection(2)" :class="{ active: currentSection === 2 }">我们的能力</a>
          <a href="#" @click.prevent="scrollToSection(3)" :class="{ active: currentSection === 3 }">成功案例</a>
          <a href="#" @click.prevent="scrollToSection(4)" :class="{ active: currentSection === 4 }">公司动态</a>
          <a href="#" @click.prevent="scrollToSection(5)" :class="{ active: currentSection === 5 }">关于我们</a>
          <a href="#" @click.prevent="scrollToSection(6)" :class="{ active: currentSection === 6 }">联系我们</a>
        </div>
        <div class="nav-actions">
          <button class="lang-switch" :class="{ active: currentLang === 'zh' }" @click="currentLang = 'zh'">中文</button>
          <button class="lang-switch" :class="{ active: currentLang === 'en' }" @click="currentLang = 'en'">EN</button>
        </div>
      </div>
    </nav>

    <!-- 页面指示器 -->
    <div class="page-indicator" :class="{ light: isDarkSection }">
      <span 
        v-for="i in 7" 
        :key="i" 
        class="dot" 
        :class="{ active: currentSection === i - 1 }"
        @click="scrollToSection(i - 1)"
      ></span>
    </div>

    <!-- 全屏容器 -->
    <div class="fullpage-container" :style="{ transform: `translateY(-${currentSection * 100}vh)` }">
      
      <!-- Section 0: Hero / 首页 -->
      <section class="fp-section" data-index="0">
        <div class="section-bg">
          <div class="banner-top-bg-wrapper">
            <img src="/banner-top-bg.png" alt="" class="banner-top-bg" />
          </div>
          <div class="bg-gradient-radial"></div>
          <div class="bg-dots-hero"></div>
          <div class="bg-circle-hero circle-hero-1"></div>
          <div class="bg-circle-hero circle-hero-2"></div>
          <div class="bg-circle-hero circle-hero-3"></div>
          <div class="floating-shapes">
            <div class="shape-float shape-1"></div>
            <div class="shape-float shape-2"></div>
            <div class="shape-float shape-3"></div>
            <div class="shape-float shape-4"></div>
          </div>
        </div>
        <div class="section-inner hero-section">
          <div class="hero-content-center">
            <h1 class="hero-title-large">全球eSIM连接</h1>
            <h2 class="hero-subtitle-large">赋能中国制造出海</h2>
            <p class="hero-desc-center">我们为物联网设备提供全球运营商基于eSIM技术的蜂窝连接，让您的设备随时随地保持连接。</p>
            <div class="hero-cta-center">
              <a href="#" class="btn-primary-large">立即购买</a>
              <a href="#" class="btn-secondary-large">了解更多 ›</a>
            </div>
            <div class="hero-stats-center">
              <span><strong>200+</strong> 国家</span>
              <span><strong>500万+</strong> 用户</span>
              <span><strong>¥29</strong> 起</span>
            </div>
          </div>
          <div class="scroll-hint">
            <span>向下滚动</span>
            <div class="scroll-arrow"></div>
          </div>
        </div>
      </section>

      <!-- Section 1: Product / 产品服务 -->
      <section class="fp-section" data-index="2">
        <div class="section-bg">
          <div class="bg-dots"></div>
          <div class="bg-circle circle-1"></div>
          <div class="bg-circle circle-2"></div>
          <div class="bg-line line-1"></div>
          <div class="bg-line line-2"></div>
        </div>
        <div class="section-inner product-section">
          <div class="product-layout">
            <div class="product-left">
              <h2 class="section-title">专业的物联网连接解决方案</h2>
              <p class="section-desc">为中国制造企业提供全球eSIM连接服务，覆盖200+国家和地区。</p>
              <div class="product-stats">
                <div class="p-stat">
                  <span class="p-stat-num">200+</span>
                  <span class="p-stat-label">覆盖国家</span>
                </div>
                <div class="p-stat">
                  <span class="p-stat-num">99.9%</span>
                  <span class="p-stat-label">网络稳定</span>
                </div>
                <div class="p-stat">
                  <span class="p-stat-num">3秒</span>
                  <span class="p-stat-label">激活时间</span>
                </div>
              </div>
              <div class="product-cta">
                <a href="#" class="btn-primary">立即体验</a>
                <a href="#" class="btn-text">查看更多方案 →</a>
              </div>
            </div>
            <div class="product-right">
              <div class="product-grid">
                <div class="product-card">
                  <div class="card-icon">
                    <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
                  </div>
                  <h3>智能车联网解决方案</h3>
                  <p>为某知名汽车制造商提供全球eSIM连接服务，支持车辆在200+国家和地区的实时数据传输。</p>
                  <a href="#" class="card-link">查看详情 →</a>
                </div>
                <div class="product-card">
                  <div class="card-icon">
                    <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                  </div>
                  <h3>智能制造监控系统</h3>
                  <p>帮助制造企业实现全球工厂设备的统一监控和管理，提升生产效率30%。</p>
                  <a href="#" class="card-link">查看详情 →</a>
                </div>
                <div class="product-card">
                  <div class="card-icon">
                    <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                  </div>
                  <h3>安防监控全球部署</h3>
                  <p>为安防企业提供全球视频监控设备的稳定连接，确保数据实时回传。</p>
                  <a href="#" class="card-link">查看详情 →</a>
                </div>
                <div class="product-card">
                  <div class="card-icon">
                    <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
                  </div>
                  <h3>更多解决方案</h3>
                  <p>智慧农业、智能家居、工业物联网等多种场景的定制化连接服务。</p>
                  <a href="#" class="card-link">查看详情 →</a>
                </div>
              </div>
            </div>
          </div>
          <div class="product-brands">
            <span class="brands-label">合作伙伴</span>
            <div class="brands-list">
              <span class="brand-item">中国移动</span>
              <span class="brand-item">中国联通</span>
              <span class="brand-item">中国电信</span>
              <span class="brand-item">Vodafone</span>
              <span class="brand-item">T-Mobile</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Section 2: Features / 我们的能力 -->
      <section class="fp-section" data-index="2">
        <div class="section-bg">
          <div class="bg-dots"></div>
          <div class="bg-circle circle-1"></div>
          <div class="bg-circle circle-2"></div>
        </div>
        <div class="section-inner capability-section">
          <div class="capability-header">
            <h2 class="section-title">全球领先的连接能力</h2>
          </div>
          
          <!-- 核心数据 - 横向排列 -->
          <div class="capability-stats">
            <div class="stat-card">
              <div class="stat-number">
                <span class="countup" data-target="200">200</span>
                <span class="stat-plus">+</span>
              </div>
              <div class="stat-label">全球覆盖</div>
              <div class="stat-desc">覆盖200+国家和地区</div>
            </div>
            
            <div class="stat-card">
              <div class="stat-number">
                <span class="countup" data-target="100">100</span>
                <span class="stat-plus">+</span>
              </div>
              <div class="stat-label">运营商合作</div>
              <div class="stat-desc">与100+主流运营商合作</div>
            </div>
            
            <div class="stat-card">
              <div class="stat-number">
                <span class="countup" data-target="1000">1000</span>
                <span class="stat-plus">+</span>
              </div>
              <div class="stat-label">设备支持</div>
              <div class="stat-desc">支持1000+设备型号</div>
            </div>
            
            <div class="stat-card">
              <div class="stat-number">
                <span class="countup" data-target="1">1</span>
                <span class="stat-unit">M+</span>
              </div>
              <div class="stat-label">API调用</div>
              <div class="stat-desc">每日处理百万级API调用</div>
            </div>
          </div>

          <!-- 技术能力 - 3列卡片 -->
          <div class="capability-cards">
            <div class="cap-card">
              <div class="cap-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
              </div>
              <h3>智能路由</h3>
              <p>AI 驱动的网络优化，自动选择最佳运营商</p>
              <div class="cap-metric">< 50ms 延迟</div>
            </div>

            <div class="cap-card">
              <div class="cap-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <h3>企业级安全</h3>
              <p>端到端加密，符合国际安全标准</p>
              <div class="cap-metric">AES-256 加密</div>
            </div>

            <div class="cap-card">
              <div class="cap-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              </div>
              <h3>实时监控</h3>
              <p>24/7 网络监控，智能故障转移</p>
              <div class="cap-metric">< 1min 恢复</div>
            </div>
          </div>

          <!-- 合作伙伴 -->
          <div class="capability-partners">
            <div class="partners-label">全球运营商合作伙伴</div>
            <div class="partners-list">
              <span>中国移动</span>
              <span>中国联通</span>
              <span>Vodafone</span>
              <span>T-Mobile</span>
              <span>AT&T</span>
              <span>+50 更多</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Section 3: Success Cases / 成功案例 -->
      <section class="fp-section" data-index="3">
        <div class="section-bg">
          <div class="bg-dots"></div>
          <div class="bg-circle circle-1"></div>
          <div class="bg-circle circle-2"></div>
          <div class="bg-line line-1"></div>
          <div class="bg-line line-2"></div>
        </div>
        <div class="section-inner cases-section">
          <div class="section-header">
            <h2 class="section-title">客户信赖，成果见证</h2>
            <p class="section-desc">服务全球数百家企业，助力业务遍布世界各地</p>
          </div>
          <div class="cases-grid">
            <div class="case-card">
              <div class="case-icon">
                <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
              </div>
              <h3>智能物流</h3>
              <p class="case-company">某跨境电商平台</p>
              <p class="case-desc">为 10,000+ 物流追踪设备提供全球连接，实时监控货物位置，配送效率提升 40%</p>
              <div class="case-stats">
                <span><strong>10K+</strong> 设备</span>
                <span><strong>40%</strong> 效率提升</span>
              </div>
            </div>
            <div class="case-card featured">
              <div class="case-badge">明星案例</div>
              <div class="case-icon">
                <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
              </div>
              <h3>智慧农业</h3>
              <p class="case-company">某农业科技公司</p>
              <p class="case-desc">为 5,000+ 农田传感器提供稳定连接，实现精准灌溉和施肥，节水 30%，增产 25%</p>
              <div class="case-stats">
                <span><strong>5K+</strong> 传感器</span>
                <span><strong>30%</strong> 节水</span>
                <span><strong>25%</strong> 增产</span>
              </div>
            </div>
            <div class="case-card">
              <div class="case-icon">
                <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              </div>
              <h3>共享出行</h3>
              <p class="case-company">某共享单车品牌</p>
              <p class="case-desc">为 50,000+ 共享单车提供全球漫游服务，覆盖 30+ 城市，用户满意度 98%</p>
              <div class="case-stats">
                <span><strong>50K+</strong> 单车</span>
                <span><strong>98%</strong> 满意度</span>
              </div>
            </div>
          </div>
          
          <!-- 用户反馈 - 横向滚动 -->
          <div class="user-testimonials">
            <div class="testimonials-scroll-container">
              <div class="testimonials-scroll">
                <div class="testimonial-card">
                  <div class="testimonial-rating">
                    <span class="star">★</span>
                    <span class="star">★</span>
                    <span class="star">★</span>
                    <span class="star">★</span>
                    <span class="star">★</span>
                  </div>
                  <p class="testimonial-text">"去日本旅游用的 BEESIM，信号超级稳定，网速也很快。再也不用担心找不到路或者联系不上人了。价格比机场租 WiFi 便宜多了！"</p>
                  <div class="testimonial-author">
                    <div class="author-avatar">李</div>
                    <div class="author-info">
                      <div class="author-name">李女士</div>
                      <div class="author-location">上海 · 日本旅游</div>
                    </div>
                  </div>
                </div>

                <div class="testimonial-card">
                  <div class="testimonial-rating">
                    <span class="star">★</span>
                    <span class="star">★</span>
                    <span class="star">★</span>
                    <span class="star">★</span>
                    <span class="star">★</span>
                  </div>
                  <p class="testimonial-text">"经常出差欧洲，BEESIM 一张卡就能在多个国家使用，太方便了。激活速度很快，客服响应也及时，强烈推荐！"</p>
                  <div class="testimonial-author">
                    <div class="author-avatar">张</div>
                    <div class="author-info">
                      <div class="author-name">张先生</div>
                      <div class="author-location">北京 · 商务出差</div>
                    </div>
                  </div>
                </div>

                <div class="testimonial-card">
                  <div class="testimonial-rating">
                    <span class="star">★</span>
                    <span class="star">★</span>
                    <span class="star">★</span>
                    <span class="star">★</span>
                    <span class="star">★</span>
                  </div>
                  <p class="testimonial-text">"留学生必备！在美国用了一年多，网络一直很稳定。套餐灵活，可以根据需要随时充值。比当地运营商的合约便宜太多了。"</p>
                  <div class="testimonial-author">
                    <div class="author-avatar">王</div>
                    <div class="author-info">
                      <div class="author-name">王同学</div>
                      <div class="author-location">深圳 · 美国留学</div>
                    </div>
                  </div>
                </div>

                <div class="testimonial-card">
                  <div class="testimonial-rating">
                    <span class="star">★</span>
                    <span class="star">★</span>
                    <span class="star">★</span>
                    <span class="star">★</span>
                    <span class="star">★</span>
                  </div>
                  <p class="testimonial-text">"全家去泰国度假，每人买了一张 BEESIM。孩子们可以随时发朋友圈，我们也能用导航和翻译软件。整个旅程都很顺利！"</p>
                  <div class="testimonial-author">
                    <div class="author-avatar">陈</div>
                    <div class="author-info">
                      <div class="author-name">陈女士</div>
                      <div class="author-location">广州 · 家庭旅游</div>
                    </div>
                  </div>
                </div>

                <!-- 复制一遍用于无缝滚动 -->
                <div class="testimonial-card">
                  <div class="testimonial-rating">
                    <span class="star">★</span>
                    <span class="star">★</span>
                    <span class="star">★</span>
                    <span class="star">★</span>
                    <span class="star">★</span>
                  </div>
                  <p class="testimonial-text">"去日本旅游用的 BEESIM，信号超级稳定，网速也很快。再也不用担心找不到路或者联系不上人了。价格比机场租 WiFi 便宜多了！"</p>
                  <div class="testimonial-author">
                    <div class="author-avatar">李</div>
                    <div class="author-info">
                      <div class="author-name">李女士</div>
                      <div class="author-location">上海 · 日本旅游</div>
                    </div>
                  </div>
                </div>

                <div class="testimonial-card">
                  <div class="testimonial-rating">
                    <span class="star">★</span>
                    <span class="star">★</span>
                    <span class="star">★</span>
                    <span class="star">★</span>
                    <span class="star">★</span>
                  </div>
                  <p class="testimonial-text">"经常出差欧洲，BEESIM 一张卡就能在多个国家使用，太方便了。激活速度很快，客服响应也及时，强烈推荐！"</p>
                  <div class="testimonial-author">
                    <div class="author-avatar">张</div>
                    <div class="author-info">
                      <div class="author-name">张先生</div>
                      <div class="author-location">北京 · 商务出差</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="fp-section" data-index="4">
        <div class="section-bg">
          <div class="bg-dots"></div>
          <div class="bg-circle circle-1"></div>
          <div class="bg-circle circle-2"></div>
          <div class="bg-line line-1"></div>
          <div class="bg-line line-2"></div>
        </div>
        <div class="section-inner news-section">
          <div class="section-header">
            <h2 class="section-title">最新资讯</h2>
            <p class="section-desc">了解 BEESIM 的最新动态和行业资讯</p>
          </div>
          <div class="news-grid">
            <div class="news-card featured-news">
              <div class="news-category">融资动态</div>
              <div class="news-date">2026-04-15</div>
              <h3>BEESIM 完成 B 轮 5000 万美元融资</h3>
              <p>由红杉资本领投，腾讯、阿里巴巴跟投。本轮融资将主要用于全球市场拓展、5G 技术研发和团队扩充。BEESIM 计划在未来一年内将服务覆盖扩展至 250+ 国家和地区。</p>
              <div class="news-tags">
                <span class="tag">融资</span>
                <span class="tag">战略发展</span>
              </div>
              <a href="#" class="news-link">阅读全文 →</a>
            </div>
            
            <div class="news-card">
              <div class="news-category">业务拓展</div>
              <div class="news-date">2026-04-10</div>
              <h3>新增 50 个国家和地区覆盖</h3>
              <p>与非洲、南美多家顶级运营商达成战略合作，包括 MTN、Claro、Movistar 等。进一步完善全球服务网络，为用户提供更广泛的连接选择。</p>
              <div class="news-tags">
                <span class="tag">合作</span>
                <span class="tag">网络扩展</span>
              </div>
              <a href="#" class="news-link">阅读全文 →</a>
            </div>
            
            <div class="news-card">
              <div class="news-category">行业荣誉</div>
              <div class="news-date">2026-04-01</div>
              <h3>荣获"2026 年度最佳 eSIM 服务商"</h3>
              <p>在 2026 全球物联网大会上，BEESIM 凭借卓越的技术创新和优质服务，从 200+ 参选企业中脱颖而出，获得行业最高荣誉奖项。</p>
              <div class="news-tags">
                <span class="tag">奖项</span>
                <span class="tag">行业认可</span>
              </div>
              <a href="#" class="news-link">阅读全文 →</a>
            </div>
            
            <div class="news-card">
              <div class="news-category">产品更新</div>
              <div class="news-date">2026-03-28</div>
              <h3>推出企业级 API 管理平台</h3>
              <p>全新的企业级 API 管理平台正式上线，支持批量设备管理、实时流量监控、自动化运维等功能。为企业客户提供更强大的管理工具。</p>
              <div class="news-tags">
                <span class="tag">产品</span>
                <span class="tag">企业服务</span>
              </div>
              <a href="#" class="news-link">阅读全文 →</a>
            </div>
            
            <div class="news-card">
              <div class="news-category">技术创新</div>
              <div class="news-date">2026-03-20</div>
              <h3>AI 智能网络优化系统上线</h3>
              <p>基于机器学习的智能网络优化系统正式投入使用，可根据用户位置、时间、使用习惯自动选择最优网络，网络切换速度提升 60%。</p>
              <div class="news-tags">
                <span class="tag">AI</span>
                <span class="tag">技术</span>
              </div>
              <a href="#" class="news-link">阅读全文 →</a>
            </div>
          </div>
        </div>
      </section>

      <!-- Section 5: About Us / 关于我们 -->
      <section class="fp-section" data-index="5">
        <div class="section-bg">
          <div class="bg-dots"></div>
          <div class="bg-circle circle-1"></div>
          <div class="bg-circle circle-2"></div>
          <div class="bg-line line-1"></div>
          <div class="bg-line line-2"></div>
        </div>
        <div class="section-inner about-section">
          <div class="section-header">
            <h2 class="section-title">关于我们</h2>
            <p class="section-desc">深圳自由连接科技有限公司致力于为中国制造出海提供全球网络连接服务。</p>
          </div>
          
          <div class="about-content">
            <div class="about-intro">
              <h3 class="intro-title">公司简介</h3>
              <div class="intro-text">
                <p>深圳自由连接科技有限公司成立于2020年，是一家专注于物联网eSIM连接服务的高科技企业。我们为中国制造企业提供稳定、高效、安全的全球网络连接解决方案。</p>
                <p>凭借强大的技术研发能力和丰富的行业经验，我们与全球多家运营商建立了深度合作关系，覆盖超过200个国家和地区，为各类物联网设备提供一站式的eSIM连接服务。</p>
              </div>
            </div>

            <div class="about-features-grid">
              <div class="feature-box">
                <svg class="feature-box-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                <h4>全球化覆盖</h4>
              </div>
              <div class="feature-box">
                <svg class="feature-box-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
                <h4>eSIM技术</h4>
              </div>
              <div class="feature-box">
                <svg class="feature-box-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                <h4>专业团队</h4>
              </div>
              <div class="feature-box">
                <svg class="feature-box-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                <h4>24/7支持</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Section 6: Contact / 联系我们 -->
      <AppleCTASection />

    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

useHead({
  title: 'BEESIM - Apple Style',
  link: [
    {
      rel: 'stylesheet',
      href: '/beesim-apple.css'
    }
  ]
})

const currentSection = ref(0)
const isScrolling = ref(false)
const currentLang = ref('zh')

const isDarkSection = computed(() => {
  return false // 所有屏幕都是浅色背景
})

const activeRegion = ref('japan')

function setActiveRegion(region) {
  activeRegion.value = region
}

function scrollToSection(index) {
  if (index < 0 || index >= 7 || isScrolling.value) return
  
  isScrolling.value = true
  currentSection.value = index
  
  setTimeout(() => {
    isScrolling.value = false
  }, 800)
}

// 鼠标滚轮事件
let wheelTimeout
function handleWheel(e) {
  e.preventDefault()
  if (isScrolling.value) return
  
  clearTimeout(wheelTimeout)
  wheelTimeout = setTimeout(() => {
    if (e.deltaY > 0) {
      scrollToSection(currentSection.value + 1)
    } else {
      scrollToSection(currentSection.value - 1)
    }
  }, 50)
}

// 触摸事件
let touchStartY = 0
function handleTouchStart(e) {
  touchStartY = e.touches[0].clientY
}

function handleTouchEnd(e) {
  const diff = touchStartY - e.changedTouches[0].clientY
  if (Math.abs(diff) > 50) {
    scrollToSection(currentSection.value + (diff > 0 ? 1 : -1))
  }
}

// 键盘事件
function handleKeydown(e) {
  if (e.key === 'ArrowDown' || e.key === 'PageDown') {
    e.preventDefault()
    scrollToSection(currentSection.value + 1)
  } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
    e.preventDefault()
    scrollToSection(currentSection.value - 1)
  }
}

onMounted(() => {
  window.addEventListener('wheel', handleWheel, { passive: false })
  window.addEventListener('touchstart', handleTouchStart, { passive: true })
  window.addEventListener('touchend', handleTouchEnd, { passive: true })
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('wheel', handleWheel)
  window.removeEventListener('touchstart', handleTouchStart)
  window.removeEventListener('touchend', handleTouchEnd)
  window.removeEventListener('keydown', handleKeydown)
})
</script>

<style scoped>
.apple-page {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

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

/* SVG 图标尺寸 */
:deep(.icon) { 
  width: 1em; 
  height: 1em; 
  display: inline-block; 
  vertical-align: middle; 
}

:deep(.card-icon .icon) { 
  width: 28px; 
  height: 28px; 
}

:deep(.step-icon .icon) { 
  width: 28px; 
  height: 28px; 
}

:deep(.showcase-icon .icon) { 
  width: 24px; 
  height: 24px; 
}

:deep(.card-icon-small .icon) { 
  width: 28px; 
  height: 28px; 
}

:deep(.trust-icon .icon) { 
  width: 18px; 
  height: 18px; 
}

/* 其他样式从 beesim-apple.css 继承 */
</style>
