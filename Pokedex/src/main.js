import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
console.log("sdasd")
app.use(router)
app.mount('#app-vue')
