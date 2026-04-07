import type { RouteRecordRaw } from 'vue-router'

import { BOTTOM_BAR } from '@/constant'

export const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    meta: { title: '登录' }
  },
  {
    path: '/',
    redirect: '/biz-pool',
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: 'biz-pool',
        component: () => import('@/views/bizPool/index.vue'),
        meta: {
          title: '招商线索池',
          mainPage: true,
          key: BOTTOM_BAR.BIZ_POOL
        }
      },
      {
        path: 'industry-trends',
        component: () => import('@/views/industryTrends/index.vue'),
        meta: {
          title: '行业动态',
          mainPage: true,
          key: BOTTOM_BAR.INDUSTRY_TRENDS
        }
      },
      {
        path: 'merchant-recruitment',
        component: () => import('@/views/merchantRecruitment/index.vue'),
        meta: {
          title: '招商UNI',
          mainPage: true,
          key: BOTTOM_BAR.MERCHANT_RECRUITMENT
        }
      },
      {
        path: 'work-orders',
        component: () => import('@/views/workOrders/index.vue'),
        meta: {
          title: '我的线索',
          mainPage: true,
          key: BOTTOM_BAR.WORK_ORDERS
        }
      }
    ]
  },
  {
    path: '/sub',
    redirect: '/sub/detail-page',
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: 'detail-page',
        component: () => import('@/views/detailPage/index.vue'),
        meta: {
          title: '线索详情',
          mainPage: false,
          key: 10
        }
      },
      {
        path: 'follow-up',
        component: () => import('@/views/followUp/index.vue'),
        meta: {
          title: '线索跟进详情',
          mainPage: false,
          key: 11
        }
      }
    ]
  },
  {
    path: '/:pathMatch(.*)',
    redirect: '/login'
  }
]

export default routes
