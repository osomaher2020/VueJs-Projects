import RefsReactivity from '@/views/1_Refs_reactivity.vue'
import ReactiveVsRefs from '@/views/2_ReactiveVsRefs.vue'
import ComputedVal from '@/views/3_ComputedVal.vue'
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/reactive_refs',
    name: 'RefsReactivity',
    component: RefsReactivity
  },
  {
    path: '/reactive_vs_refs',
    name: 'ReactiveVsRefs',
    component: ReactiveVsRefs
  },
  {
    path: '/computed_val',
    name: 'ComputedVal',
    component: ComputedVal
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
