import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { mount, flushPromises } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import ProductEdit from './ProductEdit.vue'
import { useProductsStore } from '@/stores/products'

// Mock vue-router
const mockPush = vi.fn()
const mockRoute = {
  params: { id: '1' },
  path: '/app/ecommerce/management/1'
}

vi.mock('vue-router', () => ({
  useRoute: () => mockRoute,
  useRouter: () => ({
    push: mockPush
  })
}))

// Mock components
vi.mock('@/components/Widget/Widget.vue', () => ({
  default: {
    name: 'Widget',
    template: '<div class="widget-stub"><slot /></div>',
    props: ['title', 'collapse', 'close']
  }
}))

vi.mock('@/components/Loader/Loader.vue', () => ({
  default: {
    name: 'Loader',
    template: '<div class="loader-stub">Loading...</div>',
    props: ['size']
  }
}))

// Mock vue-toastification
const mockToastSuccess = vi.fn()
const mockToastError = vi.fn()
vi.mock('vue-toastification', () => ({
  useToast: () => ({
    success: mockToastSuccess,
    error: mockToastError
  })
}))

describe('ProductEdit.vue', () => {
  let wrapper
  let productsStore

  const mockProduct = {
    id: 1,
    title: 'Test Product',
    subtitle: 'Test Subtitle',
    price: '99.99',
    discount: 10,
    description_1: 'Description 1',
    description_2: 'Description 2',
    code: 'TEST123',
    hashtag: '#test',
    technology: ['Vue', 'JavaScript'],
    rating: '4.5',
    img: 'test-image.jpg'
  }

  function createWrapper() {
    const pinia = createPinia()
    setActivePinia(pinia)

    productsStore = useProductsStore()
    productsStore.products = [mockProduct]
    productsStore.images = ['img1.jpg', 'img2.jpg', 'img3.jpg']
    productsStore.isReceiving = false
    productsStore.isUpdating = false
    productsStore.isDeleting = false
    productsStore.loadProductRequest = vi.fn()
    productsStore.getProductsImagesRequest = vi.fn()
    productsStore.receiveProduct = vi.fn()

    return mount(ProductEdit, {
      global: {
        plugins: [pinia]
      }
    })
  }

  function createWrapperNewProduct() {
    // Set route to create mode
    mockRoute.params = { id: 'create' }
    mockRoute.path = '/app/ecommerce/management/create'

    const pinia = createPinia()
    setActivePinia(pinia)

    productsStore = useProductsStore()
    productsStore.products = []
    productsStore.images = ['img1.jpg', 'img2.jpg', 'img3.jpg']
    productsStore.isReceiving = false
    productsStore.isUpdating = false
    productsStore.isDeleting = false
    productsStore.loadProductRequest = vi.fn()
    productsStore.getProductsImagesRequest = vi.fn()
    productsStore.receiveProduct = vi.fn()

    return mount(ProductEdit, {
      global: {
        plugins: [pinia]
      }
    })
  }

  beforeEach(() => {
    // Reset route to edit mode by default
    mockRoute.params = { id: '1' }
    mockRoute.path = '/app/ecommerce/management/1'
    mockPush.mockClear()
    mockToastSuccess.mockClear()
    mockToastError.mockClear()
  })

  afterEach(() => {
    wrapper?.unmount()
    vi.clearAllMocks()
  })

  describe('rendering', () => {
    it('renders page title', () => {
      wrapper = createWrapper()
      expect(wrapper.find('.page-title').text()).toContain('Product')
    })

    it('renders form when not loading', () => {
      wrapper = createWrapper()
      expect(wrapper.find('form').exists()).toBe(true)
    })

    it('renders loader when receiving data', async () => {
      wrapper = createWrapper()
      productsStore.isReceiving = true
      await wrapper.vm.$nextTick()

      expect(wrapper.findComponent({ name: 'Loader' }).exists()).toBe(true)
    })

    it('renders all form fields', () => {
      wrapper = createWrapper()
      expect(wrapper.find('#productTitle').exists()).toBe(true)
      expect(wrapper.find('#productSubtitle').exists()).toBe(true)
      expect(wrapper.find('#productPrice').exists()).toBe(true)
      expect(wrapper.find('#productDiscount').exists()).toBe(true)
      expect(wrapper.find('#productDescription_1').exists()).toBe(true)
      expect(wrapper.find('#productDescription_2').exists()).toBe(true)
      expect(wrapper.find('#productCode').exists()).toBe(true)
      expect(wrapper.find('#productHashtag').exists()).toBe(true)
      expect(wrapper.find('#productTechnology').exists()).toBe(true)
      expect(wrapper.find('#productRating').exists()).toBe(true)
    })
  })

  describe('create vs edit mode', () => {
    it('detects create mode when id is create', () => {
      wrapper = createWrapperNewProduct()
      // In create mode, Widget title prop contains 'New'
      const widget = wrapper.findComponent({ name: 'Widget' })
      expect(widget.props('title')).toContain('New')
    })

    it('detects edit mode when valid id', () => {
      wrapper = createWrapper()
      // In edit mode, Widget title prop contains 'Edit'
      const widget = wrapper.findComponent({ name: 'Widget' })
      expect(widget.props('title')).toContain('Edit')
    })

    it('does not show delete button in create mode', () => {
      wrapper = createWrapperNewProduct()
      const deleteBtn = wrapper.find('.btn-danger')
      expect(deleteBtn.exists()).toBe(false)
    })

    it('shows delete button in edit mode', () => {
      wrapper = createWrapper()
      const deleteBtn = wrapper.find('.btn-danger')
      expect(deleteBtn.exists()).toBe(true)
    })
  })

  describe('form values', () => {
    it('displays product title', () => {
      wrapper = createWrapper()
      const titleInput = wrapper.find('#productTitle')
      expect(titleInput.element.value).toBe('Test Product')
    })

    it('displays product price', () => {
      wrapper = createWrapper()
      const priceInput = wrapper.find('#productPrice')
      expect(priceInput.element.value).toBe('99.99')
    })

    it('displays technology as comma-separated string', () => {
      wrapper = createWrapper()
      const techInput = wrapper.find('#productTechnology')
      expect(techInput.element.value).toBe('Vue, JavaScript')
    })
  })

  describe('form updates', () => {
    it('updates product title on change', async () => {
      wrapper = createWrapper()
      const spy = vi.spyOn(productsStore, 'updateProduct')

      const titleInput = wrapper.find('#productTitle')
      await titleInput.setValue('New Title')
      await titleInput.trigger('change')

      expect(spy).toHaveBeenCalled()
    })

    it('updates product price on change', async () => {
      wrapper = createWrapper()
      const spy = vi.spyOn(productsStore, 'updateProduct')

      const priceInput = wrapper.find('#productPrice')
      await priceInput.setValue('199.99')
      await priceInput.trigger('change')

      expect(spy).toHaveBeenCalled()
    })

    it('parses technology input into array', async () => {
      wrapper = createWrapper()
      const spy = vi.spyOn(productsStore, 'updateProduct')

      const techInput = wrapper.find('#productTechnology')
      await techInput.setValue('React, Node, Express')
      await techInput.trigger('change')

      expect(spy).toHaveBeenCalledWith(expect.objectContaining({
        technology: ['React', 'Node', 'Express']
      }))
    })
  })

  describe('save functionality', () => {
    it('renders save button', () => {
      wrapper = createWrapper()
      const saveBtn = wrapper.find('.btn-success')
      expect(saveBtn.exists()).toBe(true)
      expect(saveBtn.text()).toContain('Save')
    })

    it('shows loader when saving', async () => {
      wrapper = createWrapper()
      productsStore.isUpdating = true
      await wrapper.vm.$nextTick()

      const saveBtn = wrapper.find('.btn-success')
      expect(saveBtn.findComponent({ name: 'Loader' }).exists()).toBe(true)
    })

    it('calls updateProductRequest on save for existing product', async () => {
      wrapper = createWrapper()
      const spy = vi.spyOn(productsStore, 'updateProductRequest').mockResolvedValue({ success: true })

      const saveBtn = wrapper.find('.btn-success')
      await saveBtn.trigger('click')
      await wrapper.vm.$nextTick()

      expect(spy).toHaveBeenCalled()
    })

    it('calls createProductRequest on save for new product', async () => {
      wrapper = createWrapperNewProduct()
      const spy = vi.spyOn(productsStore, 'createProductRequest').mockResolvedValue({ success: true })

      const saveBtn = wrapper.find('.btn-success')
      await saveBtn.trigger('click')
      await wrapper.vm.$nextTick()

      expect(spy).toHaveBeenCalled()
    })

    it('redirects after successful save', async () => {
      wrapper = createWrapper()
      vi.spyOn(productsStore, 'updateProductRequest').mockResolvedValue({
        success: true,
        redirect: '/app/ecommerce/management'
      })

      const saveBtn = wrapper.find('.btn-success')
      await saveBtn.trigger('click')
      await wrapper.vm.$nextTick()

      expect(mockPush).toHaveBeenCalledWith('/app/ecommerce/management')
    })
  })

  describe('delete functionality', () => {
    it('shows delete confirmation popover on click', async () => {
      wrapper = createWrapper()

      const deleteBtn = wrapper.find('.btn-danger')
      await deleteBtn.trigger('click')

      expect(wrapper.find('.popover').exists()).toBe(true)
      expect(wrapper.text()).toContain('Are you sure?')
    })

    it('hides popover on No click', async () => {
      wrapper = createWrapper()

      const deleteBtn = wrapper.find('.btn-danger')
      await deleteBtn.trigger('click')

      const noBtn = wrapper.find('.popover .btn-danger.btn-xs')
      await noBtn.trigger('click')

      expect(wrapper.find('.popover').exists()).toBe(false)
    })

    it('calls deleteProductRequest on Yes click', async () => {
      wrapper = createWrapper()
      const spy = vi.spyOn(productsStore, 'deleteProductRequest').mockResolvedValue({ success: true })

      // Open popover
      const deleteBtn = wrapper.find('.btn-danger')
      await deleteBtn.trigger('click')

      // Click Yes
      const yesBtn = wrapper.find('.popover .btn-success')
      await yesBtn.trigger('click')
      await wrapper.vm.$nextTick()

      expect(spy).toHaveBeenCalledWith({ id: 1 })
    })

    it('shows loader when deleting', async () => {
      wrapper = createWrapper()
      productsStore.isDeleting = true
      await wrapper.vm.$nextTick()

      const deleteBtn = wrapper.find('.btn-danger')
      expect(deleteBtn.findComponent({ name: 'Loader' }).exists()).toBe(true)
    })
  })

  describe('back navigation', () => {
    it('renders back button', () => {
      wrapper = createWrapper()
      const backBtn = wrapper.find('.btn-default')
      expect(backBtn.exists()).toBe(true)
      expect(backBtn.text()).toBe('Back')
    })

    it('navigates back on click', async () => {
      wrapper = createWrapper()

      const backBtn = wrapper.find('.btn-default')
      await backBtn.trigger('click')

      expect(mockPush).toHaveBeenCalledWith('/app/ecommerce/management')
    })
  })

  describe('image selection', () => {
    it('renders image dropdown', () => {
      wrapper = createWrapper()
      expect(wrapper.find('#productImage').exists()).toBe(true)
    })

    it('displays current product image', () => {
      wrapper = createWrapper()
      const img = wrapper.find('.product-image')
      expect(img.exists()).toBe(true)
      expect(img.attributes('src')).toBe('test-image.jpg')
    })

    it('toggles dropdown on click', async () => {
      wrapper = createWrapper()

      const dropdownBtn = wrapper.find('#productImage')
      await dropdownBtn.trigger('click')

      expect(wrapper.find('.dropdown-menu.show').exists()).toBe(true)
    })

    it('renders image options', async () => {
      wrapper = createWrapper()

      const dropdownBtn = wrapper.find('#productImage')
      await dropdownBtn.trigger('click')

      const options = wrapper.findAll('.dropdown-item')
      expect(options.length).toBe(3)
    })
  })

  describe('store actions on mount', () => {
    it('calls loadProductRequest for existing product', () => {
      wrapper = createWrapper()
      expect(productsStore.loadProductRequest).toHaveBeenCalledWith(1)
    })

    it('calls getProductsImagesRequest on mount', () => {
      wrapper = createWrapper()
      expect(productsStore.getProductsImagesRequest).toHaveBeenCalled()
    })
  })
})
