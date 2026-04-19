<template>
  <div class="home-page">
    <div class="home-container">
      <h1 class="home-title">BEESIM 设计版本</h1>
      <p class="home-subtitle">选择一个版本查看</p>
      
      <div class="version-grid">
        <NuxtLink to="/blue" class="version-card">
          <div class="card-icon">🔵</div>
          <h2>蓝色版本</h2>
          <p>现代蓝色主题，全屏滚动设计</p>
          <span class="card-arrow">→</span>
        </NuxtLink>
        
        <NuxtLink to="/pro" class="version-card">
          <div class="card-icon">⚡</div>
          <h2>Pro 版本</h2>
          <p>专业版设计，功能完整</p>
          <span class="card-arrow">→</span>
        </NuxtLink>
        
        <NuxtLink to="/apple" class="version-card">
          <div class="card-icon">🍎</div>
          <h2>Apple 风格</h2>
          <p>苹果风格设计，简洁优雅</p>
          <span class="card-arrow">→</span>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
}

.home-container {
  max-width: 1200px;
  width: 100%;
  text-align: center;
}

.home-title {
  font-size: 56px;
  font-weight: 800;
  background: linear-gradient(135deg, #3b82f6, #60a5fa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 16px;
}

.home-subtitle {
  font-size: 20px;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 60px;
}

.version-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  max-width: 1000px;
  margin: 0 auto;
}

.version-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 40px 30px;
  text-decoration: none;
  color: white;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.version-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), transparent);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.version-card:hover {
  transform: translateY(-8px);
  border-color: rgba(59, 130, 246, 0.5);
  box-shadow: 0 20px 40px rgba(59, 130, 246, 0.2);
}

.version-card:hover::before {
  opacity: 1;
}

.card-icon {
  font-size: 48px;
  margin-bottom: 20px;
}

.version-card h2 {
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 12px;
  position: relative;
  z-index: 1;
}

.version-card p {
  font-size: 16px;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 20px;
  position: relative;
  z-index: 1;
}

.card-arrow {
  font-size: 24px;
  color: #3b82f6;
  transition: transform 0.3s ease;
  display: inline-block;
  position: relative;
  z-index: 1;
}

.version-card:hover .card-arrow {
  transform: translateX(8px);
}

@media (max-width: 768px) {
  .home-title {
    font-size: 36px;
  }
  
  .version-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
}
</style>
