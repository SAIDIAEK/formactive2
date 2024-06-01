import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from "./router";
import './assets/index.css'
import App from './App.vue'

const pinia = createPinia()

createApp(App).use(router).use(pinia).mount('#app')
