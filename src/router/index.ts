import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
// layouts
import BasicLayout from '@/layouts/BasicLayout.vue'
// components
// import TestArea from '@/views/TestArea/index.vue'
// views
import TwoReactive from '@/views/TwoReactive/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'BasicLayout',
    component: BasicLayout,
    children: [
      {
        path: '/TwoReactive',
        name: 'TwoReactive',
        component: TwoReactive
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
