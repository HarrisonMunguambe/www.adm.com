// src/main.js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// 1. PRIMEIRO: CSS
import './assets/css/bootstrap.min.css'
import './assets/css/animate.css'
import './assets/css/aos.css'
import './assets/css/swiper.min.css'
import './assets/css/lightcase.css'
import './assets/css/odometer.css'
import './assets/css/nice-select.css'
import './assets/css/fontawesome-all.min.css'
import './assets/css/line-awesome.min.css'
import './assets/css/icomoon.css'
import './assets/css/style.css'


createApp(App).use(router).mount('#app')
