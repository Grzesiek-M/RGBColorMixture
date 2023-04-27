import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/pages/HomePage.vue'
import About from '@/pages/AboutPage.vue'
import Mixin from '@/pages/MixinPage.vue'
import MyColors from '@/pages/MyColorPage.vue'
import ErrorPage from '@/pages/ErrorPage.vue'
import Color from '@/pages/ColorPage.vue'

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
    path: '/mixin',
    name: 'Mixin',
    component: Mixin
  },
  {
    path: '/mycolor',
    name: 'MyColor',
    component: MyColors
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'ErrorPage',
    component: ErrorPage
  },
  {
    path: '/color/:red?/:green?/:blue?',
    name: 'Color',
    component: Color
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
