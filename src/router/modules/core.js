// Core pages routes (Typography, Colors, Grid)
export default [
  {
    path: 'core/typography',
    name: 'TypographyPage',
    component: () => import('@/pages/Core/Typography/Typography.vue')
  },
  {
    path: 'core/colors',
    name: 'ColorsPage',
    component: () => import('@/pages/Core/Colors/Colors.vue')
  },
  {
    path: 'core/grid',
    name: 'CoreGridPage',
    component: () => import('@/pages/Core/Grid/Grid.vue')
  }
]
