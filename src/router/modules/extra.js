// Extra pages routes (Calendar, Invoice, Gallery, etc.)
export default [
  {
    path: 'extra/calendar',
    name: 'CalendarPage',
    component: () => import('@/pages/Extra/Calendar/Calendar.vue')
  },
  {
    path: 'extra/invoice',
    name: 'InvoicePage',
    component: () => import('@/pages/Extra/Invoice/Invoice.vue')
  },
  {
    path: 'extra/search',
    name: 'SearchPage',
    component: () => import('@/pages/Extra/Search/Search.vue')
  },
  {
    path: 'extra/time-line',
    name: 'TimelinePage',
    component: () => import('@/pages/Extra/Timeline/Timeline.vue')
  },
  {
    path: 'extra/gallery',
    name: 'GalleryPage',
    component: () => import('@/pages/Extra/Gallery/Gallery.vue')
  }
]
