import { createRouter, createWebHistory } from 'vue-router'
import { isAuthenticated } from '@/utils/auth'

// Import route modules
import mainRoutes from './modules/main'
import ecommerceRoutes from './modules/ecommerce'
import uiRoutes from './modules/ui'
import formsRoutes from './modules/forms'
import chartsRoutes from './modules/charts'
import tablesRoutes from './modules/tables'
import mapsRoutes from './modules/maps'
import extraRoutes from './modules/extra'
import coreRoutes from './modules/core'
import documentationRoute from './modules/documentation'

// Lazy-loaded standalone pages
const Layout = () => import('@/components/Layout/Layout.vue')
const Login = () => import('@/pages/Login/Login.vue')
const LoginExample = () => import('@/pages/Extra/LoginExample/LoginExample.vue')
const Register = () => import('@/pages/Register/Register.vue')
const ErrorPage = () => import('@/pages/Error/Error.vue')

// Additional app routes (profile, chat, email, etc.)
const miscRoutes = [
  {
    path: 'package',
    name: 'PackagePage',
    component: () => import('@/pages/Package/Package.vue')
  },
  {
    path: 'chat',
    name: 'ChatPage',
    component: () => import('@/pages/Chat/Chat.vue')
  },
  {
    path: 'profile',
    name: 'ProfilePage',
    component: () => import('@/pages/Profile/Profile.vue')
  },
  {
    path: 'email',
    name: 'EmailPage',
    component: () => import('@/pages/Email/Email.vue')
  },
  {
    path: 'grid',
    name: 'GridPage',
    component: () => import('@/pages/Grid/Grid.vue')
  }
]

// Combine all app child routes
const appChildRoutes = [
  ...mainRoutes,
  ...ecommerceRoutes,
  ...uiRoutes,
  ...formsRoutes,
  ...chartsRoutes,
  ...tablesRoutes,
  ...mapsRoutes,
  ...extraRoutes,
  ...coreRoutes,
  ...miscRoutes
]

const routes = [
  // Redirects
  { path: '/', redirect: '/app/main/analytics' },

  // Auth pages (public)
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/extra/login',
    name: 'LoginExample',
    component: LoginExample
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },

  // Documentation (public)
  documentationRoute,

  // Main app layout (protected)
  {
    path: '/app',
    name: 'Layout',
    component: Layout,
    beforeEnter: (_to, _from, next) => {
      const token = localStorage.getItem('token')
      isAuthenticated(token) ? next() : next({ path: '/login' })
    },
    children: appChildRoutes
  },

  // 404 catch-all
  {
    path: '/:pathMatch(.*)*',
    name: 'Error',
    component: ErrorPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
