// Map pages routes
export default [
  {
    path: 'maps/google',
    name: 'GoogleMapPage',
    component: () => import('@/pages/Maps/Google/Google.vue')
  },
  {
    path: 'maps/amcharts',
    name: 'AmchartsMapPage',
    component: () => import('@/pages/Maps/Amcharts/Amcharts.vue')
  }
]
