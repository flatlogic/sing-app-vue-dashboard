// E-commerce routes
export default [
  {
    path: 'ecommerce/management',
    name: 'ProductsManagement',
    component: () => import('@/pages/Ecommerce/Management/Management.vue')
  },
  {
    path: 'ecommerce/management/:id',
    name: 'ProductEdit',
    component: () => import('@/pages/Ecommerce/Management/components/ProductEdit/ProductEdit.vue')
  },
  {
    path: 'ecommerce/management/create',
    name: 'ProductCreate',
    component: () => import('@/pages/Ecommerce/Management/components/ProductEdit/ProductEdit.vue')
  },
  {
    path: 'ecommerce/products',
    name: 'ProductsPage',
    component: () => import('@/pages/Ecommerce/ProductsGrid/ProductsGrid.vue')
  },
  {
    path: 'ecommerce/product',
    name: 'ProductPage',
    component: () => import('@/pages/Ecommerce/ProductPage/ProductPage.vue')
  },
  {
    path: 'ecommerce/product/:id',
    name: 'DefiniteProductPage',
    component: () => import('@/pages/Ecommerce/ProductPage/ProductPage.vue')
  }
]
