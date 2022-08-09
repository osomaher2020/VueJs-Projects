import { createRouter, createWebHistory } from 'vue-router'
import About from '../views/About.vue'
import Home from '../views/Home.vue'
import Todos from '../views/todos/Todos.vue'
import TodoDetails from '../views/todos/TodoDetails.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/todos',
    name: 'Todos',
    component: Todos
  },
  {
    path: '/todos/:id',
    name: 'TodoDetails',
    component: TodoDetails,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
