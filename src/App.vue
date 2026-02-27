<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { RouterView } from 'vue-router'
import SitePreloader from './components/layout/SitePreloader.vue'
import SiteHeader from './components/layout/SiteHeader.vue'
import SiteFooter from './components/layout/SiteFooter.vue'
import ScrollToTop from './components/layout/ScrollToTop.vue'

const showPreloader = ref(true)
let preloaderTimer = null

onMounted(() => {
  preloaderTimer = setTimeout(() => {
    showPreloader.value = false
  }, 3000)
})

onUnmounted(() => {
  if (preloaderTimer) {
    clearTimeout(preloaderTimer)
  }
})
</script>

<template>
  <div class="page-wrapper">
    <SitePreloader v-if="showPreloader" />
    <SiteHeader />
    <RouterView />
    <ScrollToTop />
    <SiteFooter />
  </div>
</template>
