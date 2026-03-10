// Chart pages routes
export default [
  {
    path: 'charts/overview',
    name: 'ChartsPage',
    component: () => import('@/pages/Charts/Charts.vue')
  },
  {
    path: 'charts/apex',
    name: 'ApexPage',
    component: () => import('@/pages/Charts/Apex/Apex.vue')
  },
  {
    path: 'charts/echarts',
    name: 'EchartsPage',
    component: () => import('@/pages/Charts/Echarts/Echarts.vue')
  },
  {
    path: 'charts/highcharts',
    name: 'HighchartsPage',
    component: () => import('@/pages/Charts/Highcharts/Highcharts.vue')
  }
]
