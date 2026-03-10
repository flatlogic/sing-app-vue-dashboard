import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'
import config from '../config'
import mock from '../pages/Ecommerce/mock'

export const useProductsStore = defineStore('products', () => {
  const products = ref([])
  const images = ref([])
  const isReceiving = ref(false)
  const isUpdating = ref(false)
  const isDeleting = ref(false)
  const idToDelete = ref(null)
  const error = ref(null)

  async function getProductsRequest() {
    error.value = null
    // We check if app runs with backend mode
    if (!config.isBackend) {
      receiveProducts(mock)
      return { success: true }
    }

    receivingProducts()
    try {
      const res = await axios.get('/products')
      receiveProducts(res.data)
      return { success: true }
    } catch (err) {
      console.error('Failed to fetch products:', err)
      error.value = 'Failed to fetch products'
      isReceiving.value = false
      return { success: false, error: 'Failed to fetch products' }
    }
  }

  async function loadProductRequest(id) {
    error.value = null
    // We check if app runs with backend mode
    if (!config.isBackend) {
      receiveProduct(mock.find(arr => arr.id === id))
      return { success: true }
    }

    receivingProduct()
    try {
      const res = await axios.get('/products/' + id)
      receiveProduct(res.data)
      return { success: true }
    } catch (err) {
      console.error('Failed to load product:', err)
      error.value = 'Failed to load product'
      isReceiving.value = false
      return { success: false, error: 'Failed to load product' }
    }
  }

  async function updateProductRequest(payload) {
    error.value = null
    // We check if app runs with backend mode
    if (!config.isBackend) {
      return { success: true, message: 'Product updated (demo mode)' }
    }

    updatingProduct()
    try {
      const res = await axios.put('/products/' + payload.product.id, payload.product)
      updateProduct(res.data)
      return { success: true, message: 'Product has been Updated!' }
    } catch (err) {
      console.error('Failed to update product:', err)
      error.value = 'Failed to update product'
      isUpdating.value = false
      return { success: false, error: 'Failed to update product' }
    }
  }

  async function createProductRequest(payload) {
    error.value = null
    // We check if app runs with backend mode
    if (!config.isBackend) {
      return { success: true, message: 'Product created (demo mode)', redirect: '/app/ecommerce/management' }
    }

    updatingProduct()
    try {
      const res = await axios.post('/products', payload.product)
      updateProduct(res.data)
      return { success: true, message: 'Product has been Created!', redirect: '/app/ecommerce/management' }
    } catch (err) {
      console.error('Failed to create product:', err)
      error.value = 'Failed to create product'
      isUpdating.value = false
      return { success: false, error: 'Failed to create product' }
    }
  }

  async function deleteProductRequest(payload) {
    error.value = null
    // We check if app runs with backend mode
    if (!config.isBackend) {
      // In demo mode, just remove from local state
      deleteProduct({ id: payload.id })
      return { success: true, message: 'Product has been Deleted!' }
    }

    deletingProduct(payload)
    try {
      await axios.delete('/products/' + payload.id)
      deleteProduct({ id: payload.id })
      return { success: true, message: 'Product has been Deleted!', redirect: '/app/ecommerce/management' }
    } catch (err) {
      console.error('Failed to delete product:', err)
      error.value = 'Failed to delete product'
      isDeleting.value = false
      idToDelete.value = null
      return { success: false, error: 'Failed to delete product' }
    }
  }

  async function getProductsImagesRequest(payload) {
    // We check if app runs with backend mode
    if (!config.isBackend) return { success: true }

    try {
      const res = await axios.get('/products/images-list')
      receiveProductImages(res.data)
      if (!payload.img && res.data.length) {
        updateProduct({ id: payload.id, img: res.data[0] })
      }
      return { success: true }
    } catch (err) {
      console.error('Failed to fetch product images:', err)
      return { success: false, error: 'Failed to fetch product images' }
    }
  }

  function receiveProductImages(payload) {
    images.value = payload
  }

  function receiveProducts(payload) {
    products.value = payload
    isReceiving.value = false
  }

  function receivingProducts() {
    isReceiving.value = true
  }

  function receiveProduct(payload) {
    products.value = [...products.value, payload]
    isReceiving.value = false
  }

  function receivingProduct() {
    isReceiving.value = true
  }

  function updateProduct(payload) {
    const index = products.value.findIndex(p => p.id === payload.id)
    if (index !== -1) {
      products.value = products.value.map((p, i) => {
        if (i === index) {
          return { ...p, ...payload }
        }
        return p
      })
    }
    isUpdating.value = false
  }

  function updatingProduct() {
    isUpdating.value = true
  }

  function deleteProduct(payload) {
    const indexToDelete = products.value.findIndex(p => p.id === payload.id)
    if (indexToDelete !== -1) {
      const newProducts = [...products.value]
      newProducts.splice(indexToDelete, 1)
      products.value = newProducts
    }
    isDeleting.value = false
    idToDelete.value = null
  }

  function deletingProduct(payload) {
    isDeleting.value = true
    idToDelete.value = payload.id
  }

  function clearError() {
    error.value = null
  }

  return {
    products,
    images,
    isReceiving,
    isUpdating,
    isDeleting,
    idToDelete,
    error,
    getProductsRequest,
    loadProductRequest,
    updateProductRequest,
    createProductRequest,
    deleteProductRequest,
    getProductsImagesRequest,
    receiveProductImages,
    receiveProducts,
    receivingProducts,
    receiveProduct,
    receivingProduct,
    updateProduct,
    updatingProduct,
    deleteProduct,
    deletingProduct,
    clearError
  }
})
