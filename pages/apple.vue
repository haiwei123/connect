<template>
  <div style="position: relative;">
    <NuxtLink to="/" class="back-home">← 返回首页</NuxtLink>
    <iframe src="/apple.html" style="width: 100%; height: 100vh; border: none;"></iframe>
  </div>
</template>

<script setup>
useHead({
  title: 'BEESIM Apple Style'
})
</script>

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

