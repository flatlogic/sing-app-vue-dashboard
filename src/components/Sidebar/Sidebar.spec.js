import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import Sidebar from './Sidebar.vue'
import { useLayoutStore } from '@/stores/layout'

// Mock vue-router
const mockRoute = {
  path: '/app/main/analytics',
  fullPath: '/app/main/analytics',
  name: 'Analytics'
}

vi.mock('vue-router', () => ({
  useRoute: () => mockRoute,
  useRouter: () => ({
    push: vi.fn()
  })
}))

// Mock isScreen helper
vi.mock('@/core/screenHelper', () => ({
  default: vi.fn((size) => {
    const width = window.innerWidth
    const screens = {
      'xs-max': 543,
      'sm-min': 544,
      'sm-max': 767,
      'md-min': 768,
      'md-max': 991,
      'lg-min': 992,
      'lg-max': 1199,
      'xl-min': 1200,
    }
    return (width >= (screens[`${size}-min`] || 0) || size === 'xs')
      && (width <= (screens[`${size}-max`] || Infinity) || size === 'xl')
  })
}))

// Mock NavLink component
vi.mock('./NavLink/NavLink.vue', () => ({
  default: {
    name: 'NavLink',
    template: '<li class="navlink-stub" :data-link="link" :data-header="header"><slot /></li>',
    props: ['activeItem', 'header', 'link', 'iconName', 'iconImg', 'index', 'childrenLinks', 'isHeader', 'label', 'labelColor', 'badge']
  }
}))

describe('Sidebar.vue', () => {
  let wrapper

  function createWrapper(options = {}) {
    const pinia = createPinia()
    setActivePinia(pinia)

    // Update mock route if provided
    if (options.route) {
      Object.assign(mockRoute, options.route)
    }

    return mount(Sidebar, {
      global: {
        plugins: [pinia],
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
    Object.defineProperty(window, 'innerWidth', { value: 1200, writable: true })
    // Reset mock route
    mockRoute.path = '/app/main/analytics'
    mockRoute.fullPath = '/app/main/analytics'
  })

  afterEach(() => {
    wrapper?.unmount()
  })

  describe('rendering', () => {
    it('renders sidebar wrapper', () => {
      wrapper = createWrapper()
      expect(wrapper.find('.sidebar-wrapper').exists()).toBe(true)
    })

    it('renders nav element', () => {
      wrapper = createWrapper()
      expect(wrapper.find('nav.sidebar').exists()).toBe(true)
    })

    it('renders logo with link to analytics', () => {
      wrapper = createWrapper()
      const logo = wrapper.find('.logo a')
      expect(logo.exists()).toBe(true)
      expect(logo.attributes('href')).toBe('/app/main/analytics')
    })

    it('renders Sing App brand name', () => {
      wrapper = createWrapper()
      expect(wrapper.find('.primary-word').text()).toBe('Sing')
      expect(wrapper.find('.secondary-word').text()).toContain('App')
    })

    it('renders APP section title', () => {
      wrapper = createWrapper()
      const navTitle = wrapper.find('.navTitle.first')
      expect(navTitle.exists()).toBe(true)
      expect(navTitle.text()).toBe('APP')
    })

    it('renders TEMPLATE section title', () => {
      wrapper = createWrapper()
      const navTitles = wrapper.findAll('.navTitle')
      const templateTitle = navTitles.find(t => t.text() === 'TEMPLATE')
      expect(templateTitle).toBeDefined()
    })

    it('renders LABELS section', () => {
      wrapper = createWrapper()
      expect(wrapper.find('.sidebarLabels').exists()).toBe(true)
    })

    it('renders PROJECTS section', () => {
      wrapper = createWrapper()
      expect(wrapper.find('.sidebarAlerts').exists()).toBe(true)
    })

    it('renders sidebar alerts with progress bars', () => {
      wrapper = createWrapper()
      const alerts = wrapper.findAll('.sidebarAlert')
      expect(alerts.length).toBe(2)
    })
  })

  describe('NavLink components', () => {
    it('renders Dashboard NavLink', () => {
      wrapper = createWrapper()
      const dashboardLink = wrapper.find('[data-header="Dashboard"]')
      expect(dashboardLink.exists()).toBe(true)
    })

    it('renders Chat NavLink with label', () => {
      wrapper = createWrapper()
      const chatLink = wrapper.find('[data-header="Chat"]')
      expect(chatLink.exists()).toBe(true)
    })

    it('renders E-commerce NavLink', () => {
      wrapper = createWrapper()
      const ecommerceLink = wrapper.find('[data-header="E-commerce"]')
      expect(ecommerceLink.exists()).toBe(true)
    })

    it('renders Email NavLink with badge', () => {
      wrapper = createWrapper()
      const emailLink = wrapper.find('[data-header="Email"]')
      expect(emailLink.exists()).toBe(true)
    })

    it('renders Documentation NavLink', () => {
      wrapper = createWrapper()
      const docsLink = wrapper.find('[data-header="Documentation"]')
      expect(docsLink.exists()).toBe(true)
    })

    it('renders Menu Levels NavLink with nested children', () => {
      wrapper = createWrapper()
      const menuLevels = wrapper.find('[data-header="Menu Levels"]')
      expect(menuLevels.exists()).toBe(true)
    })
  })

  describe('store integration', () => {
    it('applies sidebarStatic class when sidebar is static', async () => {
      wrapper = createWrapper()
      const layoutStore = useLayoutStore()
      layoutStore.sidebarStatic = true
      await wrapper.vm.$nextTick()
      expect(wrapper.find('nav').classes()).toContain('sidebarStatic')
    })

    it('applies sidebarOpened class when sidebar is open', async () => {
      wrapper = createWrapper()
      const layoutStore = useLayoutStore()
      layoutStore.sidebarClose = false
      await wrapper.vm.$nextTick()
      expect(wrapper.find('nav').classes()).toContain('sidebarOpened')
    })

    it('does not apply sidebarOpened class when sidebar is closed', async () => {
      wrapper = createWrapper()
      const layoutStore = useLayoutStore()
      layoutStore.sidebarClose = true
      await wrapper.vm.$nextTick()
      expect(wrapper.find('nav').classes()).not.toContain('sidebarOpened')
    })

    it('passes activeItem from store to NavLink components', async () => {
      wrapper = createWrapper()
      const layoutStore = useLayoutStore()
      layoutStore.sidebarActiveElement = '/app/main'
      await wrapper.vm.$nextTick()

      // NavLinks should receive the activeItem prop
      const navLinks = wrapper.findAllComponents({ name: 'NavLink' })
      navLinks.forEach(link => {
        expect(link.props('activeItem')).toBe('/app/main')
      })
    })
  })

  describe('mouse interactions', () => {
    it('opens sidebar on mouse enter when not static (large screen)', async () => {
      Object.defineProperty(window, 'innerWidth', { value: 1200, writable: true })

      wrapper = createWrapper()
      const layoutStore = useLayoutStore()
      layoutStore.sidebarStatic = false
      layoutStore.sidebarClose = true

      await wrapper.find('nav').trigger('mouseenter')

      expect(layoutStore.sidebarClose).toBe(false)
    })

    it('closes sidebar on mouse leave when not static (large screen)', async () => {
      Object.defineProperty(window, 'innerWidth', { value: 1200, writable: true })

      wrapper = createWrapper()
      const layoutStore = useLayoutStore()
      layoutStore.sidebarStatic = false
      layoutStore.sidebarClose = false

      await wrapper.find('nav').trigger('mouseleave')

      expect(layoutStore.sidebarClose).toBe(true)
    })

    it('does not change sidebar state on mouse enter when static', async () => {
      wrapper = createWrapper()
      const layoutStore = useLayoutStore()
      layoutStore.sidebarStatic = true
      layoutStore.sidebarClose = true

      await wrapper.find('nav').trigger('mouseenter')

      // Should remain closed since it's static
      expect(layoutStore.sidebarClose).toBe(true)
    })

    it('does not change sidebar state on mouse leave when static', async () => {
      wrapper = createWrapper()
      const layoutStore = useLayoutStore()
      layoutStore.sidebarStatic = true
      layoutStore.sidebarClose = false

      await wrapper.find('nav').trigger('mouseleave')

      // Should remain open since it's static
      expect(layoutStore.sidebarClose).toBe(false)
    })

    it('does not open sidebar on small screens', async () => {
      Object.defineProperty(window, 'innerWidth', { value: 767, writable: true })

      wrapper = createWrapper()
      const layoutStore = useLayoutStore()
      layoutStore.sidebarStatic = false
      layoutStore.sidebarClose = true

      await wrapper.find('nav').trigger('mouseenter')

      // Should remain closed on small screen
      expect(layoutStore.sidebarClose).toBe(true)
    })
  })

  describe('setActiveByRoute', () => {
    it('sets active element based on current route', () => {
      wrapper = createWrapper({
        route: { path: '/app/main/analytics', fullPath: '/app/main/analytics' }
      })
      const layoutStore = useLayoutStore()

      // On mount, setActiveByRoute is called
      expect(layoutStore.sidebarActiveElement).toBe('/app/main')
    })

    it('handles nested routes correctly', () => {
      wrapper = createWrapper({
        route: { path: '/app/ecommerce/management', fullPath: '/app/ecommerce/management' }
      })
      const layoutStore = useLayoutStore()

      expect(layoutStore.sidebarActiveElement).toBe('/app/ecommerce')
    })

    it('handles deep nested routes', () => {
      wrapper = createWrapper({
        route: { path: '/app/menu/level_12/level_22', fullPath: '/app/menu/level_12/level_22' }
      })
      const layoutStore = useLayoutStore()

      expect(layoutStore.sidebarActiveElement).toBe('/app/menu/level_12')
    })
  })

  describe('sidebar alerts', () => {
    it('renders Sales Report alert', () => {
      wrapper = createWrapper()
      expect(wrapper.text()).toContain('Sales Report')
    })

    it('renders Personal Responsibility alert', () => {
      wrapper = createWrapper()
      expect(wrapper.text()).toContain('Personal Responsibility')
    })

    it('renders progress bars with correct widths', () => {
      wrapper = createWrapper()
      const progressBars = wrapper.findAll('.progress-bar')
      expect(progressBars.length).toBe(2)
      expect(progressBars[0].attributes('style')).toContain('width: 15%')
      expect(progressBars[1].attributes('style')).toContain('width: 20%')
    })

    it('renders progress bars with correct colors', () => {
      wrapper = createWrapper()
      const progressBars = wrapper.findAll('.progress-bar')
      expect(progressBars[0].classes()).toContain('bg-danger')
      expect(progressBars[1].classes()).toContain('bg-primary')
    })

    it('renders alert footers', () => {
      wrapper = createWrapper()
      expect(wrapper.text()).toContain('Calculating x-axis bias')
      expect(wrapper.text()).toContain('Provide required notes')
    })
  })

  describe('sidebar labels', () => {
    it('renders Core label', () => {
      wrapper = createWrapper()
      const labels = wrapper.findAll('.sidebarLabels li')
      expect(labels[0].text()).toContain('Core')
    })

    it('renders UI Elements label', () => {
      wrapper = createWrapper()
      const labels = wrapper.findAll('.sidebarLabels li')
      expect(labels[1].text()).toContain('UI Elements')
    })

    it('renders Forms label', () => {
      wrapper = createWrapper()
      const labels = wrapper.findAll('.sidebarLabels li')
      expect(labels[2].text()).toContain('Forms')
    })

    it('renders colored indicators', () => {
      wrapper = createWrapper()
      const indicators = wrapper.findAll('.sidebarLabels .fa-circle')
      expect(indicators.length).toBe(3)
      expect(indicators[0].classes()).toContain('text-danger')
      expect(indicators[1].classes()).toContain('text-primary')
      expect(indicators[2].classes()).toContain('text-success')
    })
  })
})
