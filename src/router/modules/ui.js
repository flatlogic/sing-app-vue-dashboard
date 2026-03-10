// UI component demo pages routes
export default [
  {
    path: 'ui/alerts',
    name: 'AlertsPage',
    component: () => import('@/pages/Ui/Alerts/Alerts.vue')
  },
  {
    path: 'ui/badge',
    name: 'BadgePage',
    component: () => import('@/pages/Ui/Badge/Badge.vue')
  },
  {
    path: 'ui/buttons',
    name: 'ButtonsPage',
    component: () => import('@/pages/Ui/Buttons/Buttons.vue')
  },
  {
    path: 'ui/card',
    name: 'CardPage',
    component: () => import('@/pages/Ui/Card/Card.vue')
  },
  {
    path: 'ui/carousel',
    name: 'CarouselPage',
    component: () => import('@/pages/Ui/Carousel/Carousel.vue')
  },
  {
    path: 'ui/jumbotron',
    name: 'JumbotronPage',
    component: () => import('@/pages/Ui/Jumbotron/Jumbotron.vue')
  },
  {
    path: 'ui/icons',
    name: 'IconsPage',
    component: () => import('@/pages/Ui/Icons/Icons.vue')
  },
  {
    path: 'ui/list-groups',
    name: 'ListGroupsPage',
    component: () => import('@/pages/Ui/ListGroups/ListGroups.vue')
  },
  {
    path: 'ui/modal',
    name: 'ModalPage',
    component: () => import('@/pages/Ui/Modal/Modal.vue')
  },
  {
    path: 'ui/nav',
    name: 'NavPage',
    component: () => import('@/pages/Ui/Nav/Nav.vue')
  },
  {
    path: 'ui/navbar',
    name: 'NavbarPage',
    component: () => import('@/pages/Ui/Navbar/Navbar.vue')
  },
  {
    path: 'ui/notifications',
    name: 'NotificationsPage',
    component: () => import('@/pages/Ui/Notifications/Notifications.vue')
  },
  {
    path: 'ui/popovers',
    name: 'PopoversPage',
    component: () => import('@/pages/Ui/Popovers/Popovers.vue')
  },
  {
    path: 'ui/progress',
    name: 'ProgressPage',
    component: () => import('@/pages/Ui/Progress/Progress.vue')
  },
  {
    path: 'ui/tabs',
    name: 'TabsPage',
    component: () => import('@/pages/Ui/Tabs/Tabs.vue')
  }
]
