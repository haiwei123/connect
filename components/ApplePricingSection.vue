<template>
  <section class="fp-section" data-index="4">
    <div class="section-bg">
      <div class="bg-dots"></div>
      <div class="bg-circle circle-1"></div>
      <div class="bg-circle circle-2"></div>
      <div class="bg-line line-1"></div>
      <div class="bg-line line-2"></div>
    </div>
    <div class="section-inner pricing-section">
      <div class="pricing-layout">
        <div class="pricing-left">
          <span class="section-label">透明定价</span>
          <h2 class="section-title">选择适合您的套餐</h2>
          <p class="section-desc">无隐藏费用，用多少付多少，随时可以升级或续费</p>
          
          <div class="pricing-tabs">
            <button 
              class="p-tab" 
              :class="{ active: activeRegion === 'japan' }"
              @click="$emit('update:activeRegion', 'japan')"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
              日本
            </button>
            <button 
              class="p-tab" 
              :class="{ active: activeRegion === 'korea' }"
              @click="$emit('update:activeRegion', 'korea')"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
              韩国
            </button>
            <button 
              class="p-tab" 
              :class="{ active: activeRegion === 'thailand' }"
              @click="$emit('update:activeRegion', 'thailand')"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
              泰国
            </button>
            <button 
              class="p-tab" 
              :class="{ active: activeRegion === 'usa' }"
              @click="$emit('update:activeRegion', 'usa')"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
              美国
            </button>
            <button 
              class="p-tab" 
              :class="{ active: activeRegion === 'europe' }"
              @click="$emit('update:activeRegion', 'europe')"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
              欧洲
            </button>
          </div>
          
          <div class="pricing-benefits">
            <div class="benefit-item">
              <span class="benefit-icon">✓</span>
              <span>购买后立即收到 eSIM</span>
            </div>
            <div class="benefit-item">
              <span class="benefit-icon">✓</span>
              <span>支持支付宝/微信支付</span>
            </div>
            <div class="benefit-item">
              <span class="benefit-icon">✓</span>
              <span>7天无理由退款</span>
            </div>
            <div class="benefit-item">
              <span class="benefit-icon">✓</span>
              <span>24/7 在线客服支持</span>
            </div>
          </div>
        </div>
        
        <div class="pricing-right">
          <div class="pricing-grid">
            <div class="pricing-card">
              <div class="card-header">
                <span class="card-icon-small">
                  <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                </span>
                <h3>轻量版</h3>
                <p>短途旅行首选</p>
              </div>
              <div class="price">
                <span class="price-currency">¥</span>
                <span class="price-amount">29</span>
              </div>
              <div class="price-meta">
                <span class="price-data">1 GB</span>
                <span class="price-days">3 天有效</span>
              </div>
              <ul class="price-features">
                <li><span class="check">✓</span> 4G LTE 网络</li>
                <li><span class="check">✓</span> 即时激活</li>
                <li><span class="check">✓</span> 在线客服</li>
                <li class="disabled"><span class="check">-</span> 热点共享</li>
              </ul>
              <a href="#" class="btn-card">选择套餐</a>
            </div>
            
            <div class="pricing-card featured">
              <div class="featured-badge">最受欢迎</div>
              <div class="card-header">
                <span class="card-icon-small">
                  <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 8h1a4 4 0 1 1 0 8h-1M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8z"/><line x1="6" y1="2" x2="6" y2="4"/><line x1="10" y1="2" x2="10" y2="4"/><line x1="14" y1="2" x2="14" y2="4"/></svg>
                </span>
                <h3>标准版</h3>
                <p>性价比之选</p>
              </div>
              <div class="price">
                <span class="price-currency">¥</span>
                <span class="price-amount">68</span>
              </div>
              <div class="price-meta">
                <span class="price-data">5 GB</span>
                <span class="price-days">7 天有效</span>
              </div>
              <ul class="price-features">
                <li><span class="check">✓</span> 5G 网络支持</li>
                <li><span class="check">✓</span> 即时激活</li>
                <li><span class="check">✓</span> 优先客服</li>
                <li><span class="check">✓</span> 热点共享</li>
              </ul>
              <a href="#" class="btn-card-primary">选择套餐</a>
              <div class="save-badge">省 ¥20</div>
            </div>
            
            <div class="pricing-card">
              <div class="card-header">
                <span class="card-icon-small">
                  <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                </span>
                <h3>无限版</h3>
                <p>长途旅行必备</p>
              </div>
              <div class="price">
                <span class="price-currency">¥</span>
                <span class="price-amount">128</span>
              </div>
              <div class="price-meta">
                <span class="price-data">无限流量</span>
                <span class="price-days">15 天有效</span>
              </div>
              <ul class="price-features">
                <li><span class="check">✓</span> 5G 网络支持</li>
                <li><span class="check">✓</span> 即时激活</li>
                <li><span class="check">✓</span> VIP 专属客服</li>
                <li><span class="check">✓</span> 热点共享</li>
              </ul>
              <a href="#" class="btn-card">选择套餐</a>
            </div>
          </div>
        </div>
      </div>
      
      <div class="pricing-footer">
        <div class="trust-badges">
          <div class="trust-item">
            <span class="trust-icon">
              <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
            </span>
            <span>安全支付</span>
          </div>
          <div class="trust-item">
            <span class="trust-icon">
              <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
            </span>
            <span>即时发货</span>
          </div>
          <div class="trust-item">
            <span class="trust-icon">
              <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
            </span>
            <span>24/7 客服</span>
          </div>
          <div class="trust-item">
            <span class="trust-icon">
              <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
            </span>
            <span>无忧退款</span>
          </div>
        </div>
        <p class="pricing-note">需要更多流量？<a href="#">查看全部套餐</a> 或 <a href="#">联系我们</a> 获取企业定制方案</p>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  activeRegion: {
    type: String,
    default: 'japan'
  }
})

defineEmits(['update:activeRegion'])
</script>
