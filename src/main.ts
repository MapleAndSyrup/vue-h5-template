import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import { setupRequestMiddleware } from '@/utils/request/middleware'
import './assets/font/iconfont.css'
import '@/styles/index.scss'

const app = createApp(App)

// 路由
app.use(router)

// 状态管理
app.use(store)

// 请求中间层（需在 pinia 初始化后调用）
setupRequestMiddleware()

app.mount('#app')
