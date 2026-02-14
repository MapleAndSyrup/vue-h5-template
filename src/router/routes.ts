import type { RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/biz-pool',
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: 'biz-pool',
        component: () => import('@/views/bizPool/index.vue'),
        meta: {
          title: 'bizPool',
          keepAlive: true
        }
      },
      {
        path: 'industry-trends',
        component: () => import('@/views/industryTrends/index.vue'),
        meta: {
          title: 'industryTrends',
          keepAlive: true
        }
      },
      {
        path: 'merchant-recruitment',
        component: () => import('@/views/merchantRecruitment/index.vue'),
        meta: {
          title: 'merchantRecruitment',
          keepAlive: true
        }
      },
      {
        path: 'work-orders',
        component: () => import('@/views/workOrders/index.vue'),
        meta: {
          title: 'workOrders',
          keepAlive: true
        }
      }
    ]
  },
  // {
  //   name: 'login',
  //   path: '/login',
  //   component: () => import('@/views/login/index.vue'),
  //   meta: {
  //     title: '',
  //     keepAlive: true
  //   }
  // },
  // 匹配不到重定向会主页
  {
    // 找不到路由重定向到404页面
    path: '/:pathMatch(.*)',
    redirect: '/Home'
  }
]

export default routes
