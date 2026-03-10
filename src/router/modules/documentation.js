// Documentation pages routes
export default {
  path: '/documentation',
  name: 'Documentation',
  component: () => import('@/documentation/DocumentationLayout.vue'),
  redirect: '/documentation/getting-started/overview',
  children: [
    {
      path: 'getting-started/overview',
      name: 'Overview',
      component: () => import('@/documentation/pages/getting-started/Overview.vue')
    },
    {
      path: 'getting-started/licenses',
      name: 'Licenses',
      component: () => import('@/documentation/pages/getting-started/Licenses.vue')
    },
    {
      path: 'getting-started/quick-start',
      name: 'QuickStart',
      component: () => import('@/documentation/pages/getting-started/QuickStart.vue')
    },
    {
      path: 'components/alerts',
      name: 'DocAlerts',
      component: () => import('@/documentation/pages/components/Alerts.vue')
    },
    {
      path: 'components/badge',
      name: 'DocBadge',
      component: () => import('@/documentation/pages/components/Badge.vue')
    },
    {
      path: 'components/buttons',
      name: 'DocButtons',
      component: () => import('@/documentation/pages/components/Buttons.vue')
    },
    {
      path: 'components/card',
      name: 'DocCard',
      component: () => import('@/documentation/pages/components/Card.vue')
    },
    {
      path: 'components/carousel',
      name: 'DocCarousel',
      component: () => import('@/documentation/pages/components/Carousel.vue')
    },
    {
      path: 'components/modal',
      name: 'DocModal',
      component: () => import('@/documentation/pages/components/Modal.vue')
    },
    {
      path: 'components/nav',
      name: 'DocNav',
      component: () => import('@/documentation/pages/components/Nav.vue')
    },
    {
      path: 'components/navbar',
      name: 'DocNavbar',
      component: () => import('@/documentation/pages/components/Navbar.vue')
    },
    {
      path: 'components/popovers',
      name: 'DocPopovers',
      component: () => import('@/documentation/pages/components/Popovers.vue')
    },
    {
      path: 'components/progress',
      name: 'DocProgress',
      component: () => import('@/documentation/pages/components/Progress.vue')
    },
    {
      path: 'components/tabs',
      name: 'DocTabs',
      component: () => import('@/documentation/pages/components/Tabs.vue')
    },
    {
      path: 'libs',
      name: 'Libs',
      component: () => import('@/documentation/pages/Libs.vue')
    },
    {
      path: 'pages',
      name: 'Pages',
      component: () => import('@/documentation/pages/Pages.vue')
    }
  ]
}
