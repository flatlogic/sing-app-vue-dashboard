// Table pages routes
export default [
  {
    path: 'tables/basic',
    name: 'TablesBasicPage',
    component: () => import('@/pages/Tables/Basic/Basic.vue')
  },
  {
    path: 'tables/dynamic',
    name: 'TablesDynamicPage',
    component: () => import('@/pages/Tables/Dynamic/Dynamic.vue')
  }
]
