<script setup>
import { RouterView } from 'vue-router'
import SiteHeader from './components/layout/SiteHeader.vue'
import SiteFooter from './components/layout/SiteFooter.vue'
import ScrollToTop from './components/layout/ScrollToTop.vue'
</script>

<template>
  <div class="page-wrapper">
    <SiteHeader />
    <RouterView />
    <ScrollToTop />
    <SiteFooter />
  </div>
</template>
