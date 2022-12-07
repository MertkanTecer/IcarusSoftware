import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home'
import iletisim from '../views/İletişim'

const routes = [
  {
    path: "",
    name: "Home",
    component: Home
  },
  {
    path: "/iletisim",
    name: "iletisim",
    component: iletisim
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
