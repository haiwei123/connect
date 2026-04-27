<template>
  <div>
    <NuxtPage />
  </div>
</template>

<script setup>
const config = useRuntimeConfig()

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
      href: `${config.app.baseURL}beesim.css`
    }
  ],
  script: [
    {
      src: `${config.app.baseURL}beesim.js`,
      defer: true
    }
  ]
})
</script>
