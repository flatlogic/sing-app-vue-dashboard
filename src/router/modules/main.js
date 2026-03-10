// Main pages routes (Dashboard, Visits, Widgets)
export default [
  {
    path: 'main/analytics',
    name: 'AnalyticsPage',
    component: () => import('@/pages/Dashboard/Dashboard.vue')
  },
  {
    path: 'main/visits',
    name: 'VisitsPage',
    component: () => import('@/pages/Visits/Visits.vue')
  },
  {
    path: 'main/widgets',
    name: 'WidgetsPage',
    component: () => import('@/pages/Widgets/Widgets.vue')
  }
]
