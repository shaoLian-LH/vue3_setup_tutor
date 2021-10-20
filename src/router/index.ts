import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
// layouts
import BasicLayout from '@/layouts/BasicLayout.vue'
// components
import Home from '@/views/Home/index.vue'
import Reactivity from '@/views/Reactivity/index.vue'
import AsyncLibrary from '@/views/AsyncLibrary/index.vue'
import PropsAndEmits from '@/views/PropsAndEmit/index.vue'
import SlotsAndAttrs from '@/views/SlotsAndAttrs/index.vue'
import OrthogonalComp from '@/views/OrthogonalComp/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'BasicLayout',
    component: BasicLayout,
    children: [
      {
        path: '/',
        name: 'Home',
        component: Home
      },
      {
        path: '/Reactivity',
        name: 'Reactivity',
        component: Reactivity
      },
      {
        path: '/PropsAndEmit',
        name: 'PropsAndEmit',
        component: PropsAndEmits
      },
      {
        path: '/SlotsAndAttrs',
        name: 'SlotsAndAttrs',
        component: SlotsAndAttrs
      },
      {
        path: '/OrthogonalComp',
        name: 'OrthogonalComp',
        component: OrthogonalComp
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
