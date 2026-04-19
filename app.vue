<template>
  <div>
    <NuxtPage />
  </div>
</template>

<script setup>
useHead({
  link: [
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com'
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap'
    },
    {
      rel: 'stylesheet',
      href: '/beesim.css'
    }
  ],
  script: [
    {
      src: '/beesim.js',
      defer: true
    }
  ]
})
</script>
