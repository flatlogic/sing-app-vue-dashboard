import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import Management from './Management.vue'
import { useProductsStore } from '@/stores/products'

// Mock vue-router at module level
const mockPush = vi.fn()

vi.mock('vue-router', () => ({
  useRoute: () => ({
    path: '/app/ecommerce/management',
    params: {}
  }),
  useRouter: () => ({
    push: mockPush
  })
}))

// Mock components
vi.mock('@/components/Widget/Widget.vue', () => ({
  default: {
    name: 'Widget',
    template: '<div class="widget-stub"><slot /></div>',
    props: ['title', 'collapse', 'close', 'fetchingData']
  }
}))

vi.mock('@/components/Loader/Loader.vue', () => ({
  default: {
    name: 'Loader',
    template: '<div class="loader-stub">Loading...</div>',
    props: ['size']
  }
}))

vi.mock('@/components/Rating/Rating.vue', () => ({
  default: {
    name: 'Rating',
    template: '<div class="rating-stub">{{ rating }}</div>',
    props: ['rating']
  }
}))

// Mock vue-toastification
vi.mock('vue-toastification', () => ({
  useToast: () => ({
    success: vi.fn(),
    error: vi.fn()
  })
}))

describe('Management.vue', () => {
  let wrapper
  let productsStore

  const mockProducts = [
    { id: 1, title: 'Product 1', subtitle: 'Subtitle 1', price: '99.99', rating: '4.5', img: 'img1.jpg' },
    { id: 2, title: 'Product 2', subtitle: 'Subtitle 2', price: '149.99', rating: '3.8', img: 'img2.jpg' },
    { id: 3, title: null, subtitle: 'No Title Product', price: '29.99', rating: '5.0', img: 'img3.jpg' }
  ]

  function createWrapper() {
    const pinia = createPinia()
    setActivePinia(pinia)

    productsStore = useProductsStore()
    productsStore.products = [...mockProducts]
    productsStore.isReceiving = false
    productsStore.isDeleting = false
    productsStore.idToDelete = null

    // Create mock router for $router in template
    const mockRouter = {
      push: mockPush,
      replace: vi.fn(),
      currentRoute: { value: { path: '/app/ecommerce/management' } }
    }

    return mount(Management, {
      global: {
        plugins: [pinia],
        mocks: {
          $router: mockRouter
        },
        stubs: {
          RouterLink: {
            template: '<a :href="to"><slot /></a>',
            props: ['to']
          }
        }
      }
    })
  }

  beforeEach(() => {
    vi.useFakeTimers()
    mockPush.mockClear()
  })

  afterEach(() => {
    wrapper?.unmount()
    vi.useRealTimers()
    vi.clearAllMocks()
  })

  describe('rendering', () => {
    it('renders page title', () => {
      wrapper = createWrapper()
      expect(wrapper.find('.page-title').text()).toContain('Product')
      expect(wrapper.find('.page-title').text()).toContain('Management')
    })

    it('renders create product button', () => {
      wrapper = createWrapper()
      const createBtn = wrapper.find('.btn-success')
      expect(createBtn.exists()).toBe(true)
      expect(createBtn.text()).toBe('Create Product')
    })

    it('renders products table', () => {
      wrapper = createWrapper()
      expect(wrapper.find('table').exists()).toBe(true)
    })

    it('renders table headers', () => {
      wrapper = createWrapper()
      const headers = wrapper.findAll('th')
      expect(headers.length).toBe(7)
      expect(headers[0].text()).toBe('ID')
      expect(headers[1].text()).toBe('Image')
      expect(headers[2].text()).toBe('Title')
    })

    it('renders product rows', () => {
      wrapper = createWrapper()
      const rows = wrapper.findAll('tbody tr')
      expect(rows.length).toBe(3)
    })
  })

  describe('product display', () => {
    it('displays product ID', () => {
      wrapper = createWrapper()
      const rows = wrapper.findAll('tbody tr')
      expect(rows[0].text()).toContain('1')
    })

    it('displays product title with capitalized first letter', () => {
      wrapper = createWrapper()
      expect(wrapper.text()).toContain('Product 1')
    })

    it('displays "No Title" for products without title', () => {
      wrapper = createWrapper()
      expect(wrapper.text()).toContain('No Title')
    })

    it('displays product price', () => {
      wrapper = createWrapper()
      expect(wrapper.text()).toContain('99.99')
      expect(wrapper.text()).toContain('149.99')
    })

    it('displays product images', () => {
      wrapper = createWrapper()
      const images = wrapper.findAll('tbody img')
      expect(images.length).toBe(3)
      expect(images[0].attributes('src')).toBe('img1.jpg')
    })

    it('renders Rating component for each product', () => {
      wrapper = createWrapper()
      const ratings = wrapper.findAllComponents({ name: 'Rating' })
      expect(ratings.length).toBe(3)
    })
  })

  describe('product loading', () => {
    it('calls getProductsRequest on mount', () => {
      const spy = vi.fn()
      const pinia = createPinia()
      setActivePinia(pinia)

      productsStore = useProductsStore()
      productsStore.getProductsRequest = spy

      wrapper = mount(Management, {
        global: {
          plugins: [pinia],
          mocks: {
            $router: { push: vi.fn() }
          },
          stubs: { RouterLink: true }
        }
      })

      expect(spy).toHaveBeenCalled()
    })

    it('passes fetchingData to Widget', async () => {
      wrapper = createWrapper()
      productsStore.isReceiving = true
      await wrapper.vm.$nextTick()

      const widget = wrapper.findComponent({ name: 'Widget' })
      expect(widget.props('fetchingData')).toBe(true)
    })
  })

  describe('create new product', () => {
    it('navigates to create page on button click', async () => {
      wrapper = createWrapper()

      const createBtn = wrapper.find('.btn-success')
      await createBtn.trigger('click')

      expect(mockPush).toHaveBeenCalledWith('/app/ecommerce/management/create')
    })
  })

  describe('edit product', () => {
    it('renders edit buttons for each product', () => {
      wrapper = createWrapper()
      const editBtns = wrapper.findAll('.btn-info')
      expect(editBtns.length).toBe(3)
    })

    it('navigates to edit page on edit click', async () => {
      wrapper = createWrapper()

      const editBtns = wrapper.findAll('.btn-info')
      await editBtns[0].trigger('click')

      expect(mockPush).toHaveBeenCalledWith('/app/ecommerce/management/1')
    })
  })

  describe('delete product', () => {
    it('renders delete buttons for each product', () => {
      wrapper = createWrapper()
      const deleteBtns = wrapper.findAll('.btn-danger')
      expect(deleteBtns.length).toBe(3)
    })

    it('shows confirmation popover on delete click', async () => {
      wrapper = createWrapper()

      const deleteBtns = wrapper.findAll('.btn-danger')
      await deleteBtns[0].trigger('click')

      expect(wrapper.find('.popover').exists()).toBe(true)
      expect(wrapper.text()).toContain('Are you sure')
    })

    it('hides popover on No click', async () => {
      wrapper = createWrapper()

      // Open popover
      const deleteBtns = wrapper.findAll('.btn-danger')
      await deleteBtns[0].trigger('click')

      // Click No
      const noBtn = wrapper.find('.popover .btn-danger')
      await noBtn.trigger('click')

      expect(wrapper.find('.popover.show').exists()).toBe(false)
    })

    it('calls deleteProductRequest on Yes click', async () => {
      wrapper = createWrapper()
      const spy = vi.spyOn(productsStore, 'deleteProductRequest').mockResolvedValue({ success: true })

      // Open popover
      const deleteBtns = wrapper.findAll('.btn-danger')
      await deleteBtns[0].trigger('click')

      // Click Yes
      const yesBtn = wrapper.find('.popover .btn-success')
      await yesBtn.trigger('click')

      expect(spy).toHaveBeenCalledWith({ id: 1 })
    })

    it('shows loader when deleting specific product', async () => {
      wrapper = createWrapper()
      productsStore.isDeleting = true
      productsStore.idToDelete = 1
      await wrapper.vm.$nextTick()

      const firstDeleteBtn = wrapper.findAll('.btn-danger')[0]
      expect(firstDeleteBtn.findComponent({ name: 'Loader' }).exists()).toBe(true)
    })

    it('toggles popover off when clicking same button twice', async () => {
      wrapper = createWrapper()

      const deleteBtns = wrapper.findAll('.btn-danger')

      // First click - open
      await deleteBtns[0].trigger('click')
      expect(wrapper.find('.popover.show').exists()).toBe(true)

      // Second click - close
      await deleteBtns[0].trigger('click')
      expect(wrapper.find('.popover.show').exists()).toBe(false)
    })
  })

  describe('alert banner', () => {
    it('renders promo alert', () => {
      wrapper = createWrapper()
      expect(wrapper.find('.promo-alert').exists()).toBe(true)
    })

    it('shows alert after timeout', async () => {
      wrapper = createWrapper()

      // Initially not shown
      expect(wrapper.find('.show-alert').exists()).toBe(false)

      // Advance timer
      vi.advanceTimersByTime(200)
      await wrapper.vm.$nextTick()

      expect(wrapper.find('.show-alert').exists()).toBe(true)
    })

    it('contains link to full version', () => {
      wrapper = createWrapper()
      const link = wrapper.find('.promo-alert a')
      expect(link.exists()).toBe(true)
      expect(link.attributes('href')).toContain('flatlogic.com')
    })
  })

  describe('product links', () => {
    it('creates correct link to product page', () => {
      wrapper = createWrapper()
      const productLinks = wrapper.findAll('a[href^="/app/ecommerce/product/"]')
      expect(productLinks[0].attributes('href')).toBe('/app/ecommerce/product/1')
    })
  })
})
