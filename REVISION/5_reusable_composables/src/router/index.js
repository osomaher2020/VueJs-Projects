import PostDetails from '@/views/PostDetails.vue'
import PostsView from '@/views/PostsView.vue'
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/posts',
    name: 'posts',
    component: PostsView
  },
  {
    path: '/posts/:id',
    name: 'postDetails',
    component: PostDetails,
    props: true
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
