import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import UserAgreement from '@/views/UserAgreement.vue'
import Privacy from '@/views/Privacy.vue'
import Contact from '@/views/Contact.vue'
import Help from '@/views/Help.vue'
import Category from '@/views/Category.vue'
import Popular from '@/views/Popular.vue'
import UserProfile from '@/views/UserProfile.vue'
import VideoPlay from '@/views/VideoPlay.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/category/:id',
    name: 'Category',
    component: Category,
    props: true
  },
  {
    path: '/popular',
    name: 'Popular',
    component: Popular
  },
  {
    path: '/user/:id',
    name: 'UserProfile',
    component: UserProfile,
    props: true
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/agreement',
    name: 'UserAgreement',
    component: UserAgreement
  },
  {
    path: '/privacy',
    name: 'Privacy',
    component: Privacy
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/help',
    name: 'Help',
    component: Help
  },
  {
    path: '/video/:id',
    name: 'VideoPlay',
    component: VideoPlay,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router 