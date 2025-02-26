import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'


//引入公共样式
import './assets/css/common.css'
createApp(App).use(router).mount('#app')
