import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'

import './style.css'

declare global {
  interface Window {
    CESIUM_BASE_URL: string
  }
}

createApp(App).use(ElementPlus).mount('#app')
