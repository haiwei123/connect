<template>
  <section class="fp-section" data-index="6">
    <div class="section-bg">
      <div class="bg-dots"></div>
      <div class="bg-circle circle-1"></div>
      <div class="bg-circle circle-2"></div>
      <div class="bg-line line-1"></div>
      <div class="bg-line line-2"></div>
    </div>
    <div class="section-inner cta-section">
      <div class="cta-content">
        <h2 style="color: var(--white);">准备好开始了吗？</h2>
        <p style="color: rgba(255, 255, 255, 0.7);">立即联系我们，开启全球连接之旅</p>
        <a href="#" class="btn-primary btn-large" @click.prevent="openContactModal">联系我们</a>
        <div class="cta-features">
          <span style="display: flex; align-items: center; gap: 6px; color: rgba(255, 255, 255, 0.7);">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
            200+ 国家覆盖
          </span>
          <span style="display: flex; align-items: center; gap: 6px; color: rgba(255, 255, 255, 0.7);">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
            即时激活
          </span>
          <span style="display: flex; align-items: center; gap: 6px; color: rgba(255, 255, 255, 0.7);">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
            24/7 客服
          </span>
        </div>
      </div>
      <footer class="mini-footer">
        <p style="color: rgba(255, 255, 255, 0.4);">© 2026 深圳自由连接科技有限公司. All Rights Reserved.</p>
      </footer>
    </div>

    <!-- Contact Modal -->
    <Teleport to="body">
      <div v-if="showModal" class="modal-overlay" @click="closeContactModal">
        <div class="modal-container" @click.stop>
          <button class="modal-close" @click="closeContactModal">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
          
          <div class="modal-content">
            <div class="modal-left">
              <h2>联系我们</h2>
              <p class="modal-desc">填写您的信息，我们将尽快与您联系</p>
              
              <form class="contact-form" @submit.prevent="handleSubmit">
                <div class="form-group">
                  <label>姓名 <span class="required">*</span></label>
                  <input type="text" v-model="formData.name" placeholder="请输入您的姓名" required>
                </div>
                
                <div class="form-group">
                  <label>邮箱 <span class="required">*</span></label>
                  <input type="email" v-model="formData.email" placeholder="请输入您的邮箱" required>
                </div>
                
                <div class="form-group">
                  <label>电话 <span class="required">*</span></label>
                  <input type="tel" v-model="formData.phone" placeholder="请输入您的电话" required>
                </div>
                
                <div class="form-group">
                  <label>公司名称</label>
                  <input type="text" v-model="formData.company" placeholder="请输入公司名称">
                </div>
                
                <div class="form-group">
                  <label>留言内容</label>
                  <textarea v-model="formData.message" placeholder="请输入您的需求或问题" rows="4"></textarea>
                </div>
                
                <button type="submit" class="btn-submit">提交</button>
              </form>
            </div>
            
            <div class="modal-right">
              <h3>公司信息</h3>
              
              <div class="info-grid">
                <div class="info-item">
                  <svg class="info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  <div>
                    <strong>公司地址</strong>
                    <p>深圳市南山区科技园南区</p>
                  </div>
                </div>
                
                <div class="info-item">
                  <svg class="info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                  <div>
                    <strong>联系电话</strong>
                    <p>XXXXXXXXXX</p>
                  </div>
                </div>
                
                <div class="info-item">
                  <svg class="info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                  <div>
                    <strong>电子邮箱</strong>
                    <p>huwei@freeconniot.com</p>
                  </div>
                </div>
                
                <div class="info-item">
                  <svg class="info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                  <div>
                    <strong>工作时间</strong>
                    <p>周一至周五 9:00-18:00</p>
                  </div>
                </div>
              </div>

              <div class="divider"></div>

              <div class="quick-stats">
                <div class="stat-item">
                  <div class="stat-number">200+</div>
                  <div class="stat-label">覆盖国家</div>
                </div>
                <div class="stat-item">
                  <div class="stat-number">99.9%</div>
                  <div class="stat-label">网络稳定</div>
                </div>
                <div class="stat-item">
                  <div class="stat-number">24/7</div>
                  <div class="stat-label">在线支持</div>
                </div>
              </div>

              <div class="trust-badges">
                <div class="badge-item">
                  <svg class="badge-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                  <span>企业级安全</span>
                </div>
                <div class="badge-item">
                  <svg class="badge-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  <span>ISO 27001认证</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Teleport>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const showModal = ref(false)
const formData = ref({
  name: '',
  email: '',
  phone: '',
  company: '',
  message: ''
})

const openContactModal = () => {
  showModal.value = true
  document.body.style.overflow = 'hidden'
}

const closeContactModal = () => {
  showModal.value = false
  document.body.style.overflow = ''
}

const handleSubmit = () => {
  console.log('Form submitted:', formData.value)
  alert('感谢您的留言！我们会尽快与您联系。')
  closeContactModal()
  // Reset form
  formData.value = {
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  }
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.modal-container {
  background: white;
  border-radius: 20px;
  max-width: 600px;
  width: 100%;
  max-height: 85vh;
  overflow-y: auto;
  position: relative;
  animation: slideUp 0.3s ease;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

.modal-container {
  background: linear-gradient(135deg, #0d1b2a 0%, #1b263b 100%);
  border: 1px solid rgba(0, 168, 232, 0.3);
  border-radius: 20px;
  max-width: 700px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  animation: slideUp 0.3s ease;
  box-shadow: 0 20px 60px rgba(0, 168, 232, 0.4);
}

@keyframes slideUp {
  from { 
    opacity: 0;
    transform: translateY(20px);
  }
  to { 
    opacity: 1;
    transform: translateY(0);
  }
}

.modal-close {
  position: absolute;
  top: 16px;
  right: 16px;
  width: 36px;
  height: 36px;
  border: none;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  z-index: 1;
}

.modal-close:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: rotate(90deg);
}

.modal-close svg {
  width: 18px;
  height: 18px;
  color: var(--white);
}

.modal-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0;
  min-height: 0;
}

.modal-left {
  padding: 40px 32px 32px;
  display: flex;
  flex-direction: column;
}

.modal-left h2 {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 6px;
  color: var(--white);
}

.modal-desc {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 20px;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.form-group label {
  font-size: 12px;
  font-weight: 500;
  color: var(--white);
}

.required {
  color: var(--accent);
}

.form-group input,
.form-group textarea {
  padding: 9px 12px;
  border: 1px solid rgba(0, 168, 232, 0.3);
  border-radius: 8px;
  font-size: 13px;
  font-family: inherit;
  transition: all 0.2s;
  background: rgba(255, 255, 255, 0.05);
  color: var(--white);
}

.form-group input::placeholder,
.form-group textarea::placeholder {
  color: rgba(255, 255, 255, 0.4);
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--accent);
  background: rgba(255, 255, 255, 0.08);
  box-shadow: 0 0 0 3px rgba(0, 168, 232, 0.2);
}

.form-group textarea {
  resize: vertical;
  min-height: 60px;
}

.btn-submit {
  background: var(--accent);
  color: white;
  border: none;
  padding: 11px 20px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  margin-top: 4px;
}

.btn-submit:hover {
  background: var(--accent-light);
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0, 168, 232, 0.4);
}

.modal-right {
  background: linear-gradient(135deg, rgba(0, 168, 232, 0.1) 0%, rgba(0, 168, 232, 0.05) 100%);
  padding: 40px 28px 32px;
  border-radius: 0 20px 20px 0;
  border-left: 1px solid rgba(0, 168, 232, 0.3);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100%;
}

.modal-right h3 {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 24px;
  color: var(--white);
  text-align: left;
  flex-shrink: 0;
}

.info-grid {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  flex-shrink: 0;
}

.info-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
}

.info-icon {
  width: 20px;
  height: 20px;
  color: var(--accent);
  flex-shrink: 0;
  margin-top: 1px;
  stroke-width: 2;
}

.info-item > div {
  flex: 1;
  min-width: 0;
}

.info-item strong {
  display: block;
  font-size: 13px;
  font-weight: 600;
  color: var(--white);
  margin-bottom: 3px;
  line-height: 1.3;
}

.info-item p {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.6);
  line-height: 1.5;
  margin: 0;
  word-break: break-word;
}

.divider {
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(0, 168, 232, 0.3), transparent);
  margin: 28px 0;
  flex-shrink: 0;
}

.quick-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  margin-bottom: 20px;
  flex-shrink: 0;
}

.stat-item {
  text-align: center;
  padding: 16px 8px;
  background: rgba(0, 168, 232, 0.1);
  border: 1px solid rgba(0, 168, 232, 0.2);
  border-radius: 12px;
  transition: all 0.3s;
}

.stat-item:hover {
  background: rgba(0, 168, 232, 0.15);
  border-color: rgba(0, 168, 232, 0.4);
  transform: translateY(-2px);
}

.stat-number {
  font-size: 22px;
  font-weight: 700;
  background: linear-gradient(90deg, #00a8ff 0%, #0066ff 40%, #6366f1 70%, #a855f7 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.2;
  margin-bottom: 6px;
}

.stat-label {
  font-size: 11px;
  color: rgba(255, 255, 255, 0.7);
  font-weight: 500;
}

.trust-badges {
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex-shrink: 0;
}

.badge-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 14px;
  background: rgba(0, 168, 232, 0.1);
  border-radius: 10px;
  border: 1px solid rgba(0, 168, 232, 0.3);
}

.badge-icon {
  width: 18px;
  height: 18px;
  color: var(--accent);
  flex-shrink: 0;
}

.badge-item span {
  font-size: 12px;
  font-weight: 500;
  color: var(--white);
}

@media (max-width: 900px) {
  .modal-content {
    grid-template-columns: 1fr;
  }
  
  .modal-right {
    border-left: none;
    border-top: 1px solid rgba(0, 168, 232, 0.3);
    border-radius: 0 0 20px 20px;
  }
  
  .info-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px 20px;
  }
}

@media (max-width: 768px) {
  .modal-container {
    max-width: 95%;
  }
  
  .modal-left,
  .modal-right {
    padding: 32px 24px 24px;
  }
  
  .modal-left h2 {
    font-size: 22px;
  }
}

@media (max-width: 480px) {
  .modal-left,
  .modal-right {
    padding: 28px 20px 20px;
  }
  
  .info-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }
  
  .form-group input,
  .form-group textarea {
    font-size: 16px;
  }
}
</style>
