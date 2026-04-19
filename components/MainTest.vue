<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  console.log('MainTest component mounted!')
})
</script>

<template>
<div style="background: #0a0a0f; color: white; min-height: 100vh; padding: 20px;">
  <h1>MainTest Component Loaded!</h1>
  <p>If you see this, the component system is working.</p>
</div>
</template>
