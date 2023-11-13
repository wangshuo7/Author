import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/views/Layout/index.vue'
import Login from '@/views/Login/index.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Layout,
    children: [
      // 游戏软件
      {
        path: '/software',
        name: 'Software',
        component: () => import('@/views/Software/index.vue'),
        meta: { keepAlive: true } // 标记需要缓存的组件
      },
      // 游戏软件-版本
      {
        path: '/software/version',
        name: 'Version',
        component: () => import('@/views/Software/version.vue')
      },
      // 游戏软件-反馈
      {
        path: '/software/feedback',
        name: 'Feedback',
        component: () => import('@/views/Software/feedback.vue')
      },
      // 游戏软件-折扣
      {
        path: '/software/discount',
        name: 'Discount',
        component: () => import('@/views/Software/discount.vue')
      },
      // 个人中心
      {
        path: '/info',
        name: 'Info',
        component: () => import('@/views/Personal/info.vue')
      },
      // 个人中心-转账
      {
        path: '/transfer',
        name: 'Transfer',
        component: () => import('@/views/Personal/transfer.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export function useRouter() {
  return router
}

export function useRoute() {
  return router.currentRoute
}

export default router
