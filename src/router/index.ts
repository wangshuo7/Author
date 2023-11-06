import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/views/Layout/index.vue'
import Login from '@/views/Login/index.vue'
const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Layout,
    children: [
      {
        path: '/welcome',
        name: 'Welcome',
        component: () => import('@/views/Welcome/index.vue')
      },
      // test
      {
        path: '/welcome/next',
        name: 'next',
        component: () => import('@/views/Welcome/next.vue')
      },
      {
        path: '/software',
        name: 'Software',
        component: () => import('@/views/Software/index.vue')
      },
      {
        path: '/software/version',
        name: 'Version',
        component: () => import('@/views/Software/version.vue')
      },
      {
        path: '/software/feedback',
        name: 'Feedback',
        component: () => import('@/views/Software/feedback.vue')
      },
      {
        path: '/controls',
        name: 'Controls',
        component: () => import('@/views/Controls/index.vue')
      },
      {
        path: '/feedback',
        name: 'Feedback1',
        component: () => import('@/views/Feedback/index.vue')
      },
      {
        path: '/revenue',
        name: 'Revenue',
        component: () => import('@/views/Revenue/index.vue')
      },
      {
        path: '/discount',
        name: 'Discount',
        component: () => import('@/views/Discount/index.vue')
      },
      {
        path: '/personal',
        name: 'Personal',
        component: () => import('@/views/Personal/index.vue')
      },
      {
        path: '/personal/transfer',
        name: 'Transfer',
        component: () => import('@/views/Personal/transfer.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/',
    redirect: '/login'
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
