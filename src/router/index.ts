import { createRouter, createWebHistory } from 'vue-router'
import type { Router } from 'vue-router'
import routes from './routes'

const router: Router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

router.beforeEach((to, _from, next) => {
  const token = localStorage.getItem('token')
  if (!token && to.path !== '/login') {
    next('/login')
  } else if (token && to.path === '/login') {
    next('/biz-pool')
  } else {
    next()
  }
})

export default router
