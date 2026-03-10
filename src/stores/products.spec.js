import { describe, it, expect, vi, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useProductsStore } from './products'

// Mock products data
const mockProducts = [
  { id: 1, title: 'Product 1', price: 100 },
  { id: 2, title: 'Product 2', price: 200 },
  { id: 3, title: 'Product 3', price: 300 }
]

// Mock axios
vi.mock('axios', () => ({
  default: {
    get: vi.fn(),
    post: vi.fn(),
    put: vi.fn(),
    delete: vi.fn()
  }
}))

// Mock config
vi.mock('../config', () => ({
  default: {
    isBackend: false
  }
}))

// Mock the products mock data
vi.mock('../pages/Ecommerce/mock', () => ({
  default: [
    { id: 1, title: 'Mock Product 1', price: 100 },
    { id: 2, title: 'Mock Product 2', price: 200 },
    { id: 3, title: 'Mock Product 3', price: 300 }
  ]
}))

describe('products store', () => {
  let store

  beforeEach(async () => {
    setActivePinia(createPinia())
    store = useProductsStore()
    vi.clearAllMocks()
  })

  describe('initial state', () => {
    it('has empty products array', () => {
      expect(store.products).toEqual([])
    })

    it('has empty images array', () => {
      expect(store.images).toEqual([])
    })

    it('has isReceiving set to false', () => {
      expect(store.isReceiving).toBe(false)
    })

    it('has isUpdating set to false', () => {
      expect(store.isUpdating).toBe(false)
    })

    it('has isDeleting set to false', () => {
      expect(store.isDeleting).toBe(false)
    })

    it('has idToDelete set to null', () => {
      expect(store.idToDelete).toBe(null)
    })

    it('has error set to null', () => {
      expect(store.error).toBe(null)
    })
  })

  describe('getProductsRequest', () => {
    it('returns success in non-backend mode', async () => {
      const result = await store.getProductsRequest()

      expect(result.success).toBe(true)
    })

    it('populates products from mock in non-backend mode', async () => {
      await store.getProductsRequest()

      expect(store.products.length).toBe(3)
      expect(store.products[0].title).toBe('Mock Product 1')
    })

    it('calls API in backend mode', async () => {
      vi.doMock('../config', () => ({
        default: { isBackend: true }
      }))
      vi.resetModules()

      const axiosMock = (await import('axios')).default
      axiosMock.get.mockResolvedValue({ data: mockProducts })

      setActivePinia(createPinia())
      const { useProductsStore: useProductsBackend } = await import('./products')
      const backendStore = useProductsBackend()

      const result = await backendStore.getProductsRequest()

      expect(axiosMock.get).toHaveBeenCalledWith('/products')
      expect(result.success).toBe(true)
    })

    it('handles API error in backend mode', async () => {
      vi.doMock('../config', () => ({
        default: { isBackend: true }
      }))
      vi.resetModules()

      const axiosMock = (await import('axios')).default
      axiosMock.get.mockRejectedValue(new Error('Network error'))

      setActivePinia(createPinia())
      const { useProductsStore: useProductsBackend } = await import('./products')
      const backendStore = useProductsBackend()

      const result = await backendStore.getProductsRequest()

      expect(result.success).toBe(false)
      expect(result.error).toBe('Failed to fetch products')
      expect(backendStore.error).toBe('Failed to fetch products')
    })

    it('sets isReceiving to true when fetching starts', () => {
      store.receivingProducts()
      expect(store.isReceiving).toBe(true)
    })
  })

  describe('loadProductRequest', () => {
    it('finds product by ID in mock mode', async () => {
      await store.getProductsRequest()

      // Load individual product
      await store.loadProductRequest(1)

      // Product should be in the array
      expect(store.products.some(p => p.id === 1)).toBe(true)
    })

    it('handles product not found gracefully', async () => {
      await store.getProductsRequest()

      // Try to load non-existent product
      const result = await store.loadProductRequest(999)

      expect(result.success).toBe(true) // In mock mode, it just adds undefined
    })

    it('calls API with product ID in backend mode', async () => {
      vi.doMock('../config', () => ({
        default: { isBackend: true }
      }))
      vi.resetModules()

      const axiosMock = (await import('axios')).default
      axiosMock.get.mockResolvedValue({ data: mockProducts[0] })

      setActivePinia(createPinia())
      const { useProductsStore: useProductsBackend } = await import('./products')
      const backendStore = useProductsBackend()

      await backendStore.loadProductRequest(1)

      expect(axiosMock.get).toHaveBeenCalledWith('/products/1')
    })
  })

  describe('updateProductRequest', () => {
    it('returns success message in mock mode', async () => {
      const result = await store.updateProductRequest({
        product: { id: 1, title: 'Updated Product' }
      })

      expect(result.success).toBe(true)
      expect(result.message).toBe('Product updated (demo mode)')
    })

    it('calls PUT API in backend mode', async () => {
      vi.doMock('../config', () => ({
        default: { isBackend: true }
      }))
      vi.resetModules()

      const axiosMock = (await import('axios')).default
      axiosMock.put.mockResolvedValue({ data: { id: 1, title: 'Updated' } })

      setActivePinia(createPinia())
      const { useProductsStore: useProductsBackend } = await import('./products')
      const backendStore = useProductsBackend()

      const payload = { product: { id: 1, title: 'Updated Product' } }
      const result = await backendStore.updateProductRequest(payload)

      expect(axiosMock.put).toHaveBeenCalledWith('/products/1', payload.product)
      expect(result.success).toBe(true)
      expect(result.message).toBe('Product has been Updated!')
    })

    it('handles update error in backend mode', async () => {
      vi.doMock('../config', () => ({
        default: { isBackend: true }
      }))
      vi.resetModules()

      const axiosMock = (await import('axios')).default
      axiosMock.put.mockRejectedValue(new Error('Update failed'))

      setActivePinia(createPinia())
      const { useProductsStore: useProductsBackend } = await import('./products')
      const backendStore = useProductsBackend()

      const result = await backendStore.updateProductRequest({
        product: { id: 1, title: 'Updated' }
      })

      expect(result.success).toBe(false)
      expect(backendStore.error).toBe('Failed to update product')
    })
  })

  describe('createProductRequest', () => {
    it('returns success with redirect in mock mode', async () => {
      const result = await store.createProductRequest({
        product: { title: 'New Product', price: 500 }
      })

      expect(result.success).toBe(true)
      expect(result.message).toBe('Product created (demo mode)')
      expect(result.redirect).toBe('/app/ecommerce/management')
    })

    it('calls POST API in backend mode', async () => {
      vi.doMock('../config', () => ({
        default: { isBackend: true }
      }))
      vi.resetModules()

      const axiosMock = (await import('axios')).default
      axiosMock.post.mockResolvedValue({ data: { id: 4, title: 'New Product' } })

      setActivePinia(createPinia())
      const { useProductsStore: useProductsBackend } = await import('./products')
      const backendStore = useProductsBackend()

      const payload = { product: { title: 'New Product', price: 500 } }
      const result = await backendStore.createProductRequest(payload)

      expect(axiosMock.post).toHaveBeenCalledWith('/products', payload.product)
      expect(result.success).toBe(true)
      expect(result.redirect).toBe('/app/ecommerce/management')
    })
  })

  describe('deleteProductRequest', () => {
    it('removes product from state in mock mode', async () => {
      // First load products
      await store.getProductsRequest()
      const initialCount = store.products.length

      // Delete product
      const result = await store.deleteProductRequest({ id: 1 })

      expect(result.success).toBe(true)
      expect(result.message).toBe('Product has been Deleted!')
      expect(store.products.length).toBe(initialCount - 1)
      expect(store.products.find(p => p.id === 1)).toBeUndefined()
    })

    it('calls DELETE API in backend mode', async () => {
      vi.doMock('../config', () => ({
        default: { isBackend: true }
      }))
      vi.resetModules()

      const axiosMock = (await import('axios')).default
      axiosMock.delete.mockResolvedValue({})

      setActivePinia(createPinia())
      const { useProductsStore: useProductsBackend } = await import('./products')
      const backendStore = useProductsBackend()

      // Add a product first
      backendStore.products = [...mockProducts]

      const result = await backendStore.deleteProductRequest({ id: 1 })

      expect(axiosMock.delete).toHaveBeenCalledWith('/products/1')
      expect(result.success).toBe(true)
      expect(result.redirect).toBe('/app/ecommerce/management')
    })

    it('handles delete error in backend mode', async () => {
      vi.doMock('../config', () => ({
        default: { isBackend: true }
      }))
      vi.resetModules()

      const axiosMock = (await import('axios')).default
      axiosMock.delete.mockRejectedValue(new Error('Delete failed'))

      setActivePinia(createPinia())
      const { useProductsStore: useProductsBackend } = await import('./products')
      const backendStore = useProductsBackend()

      const result = await backendStore.deleteProductRequest({ id: 1 })

      expect(result.success).toBe(false)
      expect(backendStore.error).toBe('Failed to delete product')
    })
  })

  describe('state mutation functions', () => {
    describe('receiveProducts', () => {
      it('sets products array', () => {
        store.receiveProducts(mockProducts)

        expect(store.products).toEqual(mockProducts)
      })

      it('sets isReceiving to false', () => {
        store.receivingProducts()
        store.receiveProducts(mockProducts)

        expect(store.isReceiving).toBe(false)
      })
    })

    describe('receivingProducts', () => {
      it('sets isReceiving to true', () => {
        store.receivingProducts()

        expect(store.isReceiving).toBe(true)
      })
    })

    describe('updateProduct', () => {
      it('updates existing product in array', () => {
        store.products = [...mockProducts]

        store.updateProduct({ id: 1, title: 'Updated Title' })

        expect(store.products[0].title).toBe('Updated Title')
        expect(store.products[0].price).toBe(100) // Original value preserved
      })

      it('does not add new product if not found', () => {
        store.products = [...mockProducts]
        const initialLength = store.products.length

        store.updateProduct({ id: 999, title: 'New Product' })

        expect(store.products.length).toBe(initialLength)
      })

      it('sets isUpdating to false', () => {
        store.products = [...mockProducts]
        store.updatingProduct()

        store.updateProduct({ id: 1, title: 'Updated' })

        expect(store.isUpdating).toBe(false)
      })
    })

    describe('deleteProduct', () => {
      it('removes product from array', () => {
        store.products = [...mockProducts]

        store.deleteProduct({ id: 2 })

        expect(store.products.length).toBe(2)
        expect(store.products.find(p => p.id === 2)).toBeUndefined()
      })

      it('sets isDeleting to false', () => {
        store.products = [...mockProducts]
        store.deletingProduct({ id: 1 })

        store.deleteProduct({ id: 1 })

        expect(store.isDeleting).toBe(false)
        expect(store.idToDelete).toBe(null)
      })
    })

    describe('deletingProduct', () => {
      it('sets isDeleting to true', () => {
        store.deletingProduct({ id: 1 })

        expect(store.isDeleting).toBe(true)
      })

      it('sets idToDelete', () => {
        store.deletingProduct({ id: 1 })

        expect(store.idToDelete).toBe(1)
      })
    })

    describe('clearError', () => {
      it('clears error', () => {
        store.error = 'Some error'

        store.clearError()

        expect(store.error).toBe(null)
      })
    })
  })

  describe('getProductsImagesRequest', () => {
    it('returns success in mock mode without API call', async () => {
      const result = await store.getProductsImagesRequest({ id: 1 })

      expect(result.success).toBe(true)
    })

    it('calls API in backend mode', async () => {
      vi.doMock('../config', () => ({
        default: { isBackend: true }
      }))
      vi.resetModules()

      const axiosMock = (await import('axios')).default
      axiosMock.get.mockResolvedValue({ data: ['image1.jpg', 'image2.jpg'] })

      setActivePinia(createPinia())
      const { useProductsStore: useProductsBackend } = await import('./products')
      const backendStore = useProductsBackend()
      backendStore.products = [...mockProducts]

      await backendStore.getProductsImagesRequest({ id: 1 })

      expect(axiosMock.get).toHaveBeenCalledWith('/products/images-list')
    })
  })
})
