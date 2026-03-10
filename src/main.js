import { createApp } from 'vue'
import { createPinia } from 'pinia'
import axios from 'axios'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'
import 'driver.js/dist/driver.css'
import VueApexCharts from 'vue3-apexcharts'
import * as bootstrap from 'bootstrap'

// Expose bootstrap globally for data-api attributes to work
window.bootstrap = bootstrap

import App from './App.vue'
import router from './router'
import config from './config'

// Global components
import Widget from './components/Widget/Widget.vue'

// Configure axios defaults
axios.defaults.baseURL = config.baseURLApi
axios.defaults.headers.common['Content-Type'] = "application/json"
const token = localStorage.getItem('token')
if (token) {
  axios.defaults.headers.common['Authorization'] = "Bearer " + token
}

// Create Vue app
const app = createApp(App)

// Create Pinia instance
const pinia = createPinia()
app.use(pinia)

// Use router
app.use(router)

// Use ApexCharts
app.use(VueApexCharts)

// Provide global app configuration
app.provide('appConfig', config.app)

// Toast configuration
app.use(Toast, { timeout: 10000 })

// Register global components
app.component('Widget', Widget)

// Mount the app
app.mount('#app')
