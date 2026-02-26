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
// 2. SEGUNDO: jQuery (deve vir antes do Bootstrap)

// 3. TERCEIRO: Bootstrap JS (depende do jQuery)

// 4. QUARTO: Resto dos plugins

// 5. POR ÚLTIMO: main.js do template

createApp(App).use(router).mount('#app')
