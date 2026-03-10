import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import NavLink from './NavLink.vue'
import { useLayoutStore } from '@/stores/layout'

// Mock vue-router at module level
const mockRoute = {
  path: '/app/main/analytics',
  fullPath: '/app/main/analytics',
  name: 'Analytics',
  params: {},
  query: {}
}

vi.mock('vue-router', () => ({
  useRoute: () => mockRoute,
  useRouter: () => ({
    push: vi.fn()
  })
}))

describe('NavLink.vue', () => {
  let wrapper

  function createWrapper(options = {}) {
    const pinia = createPinia()
    setActivePinia(pinia)

    const {
      props = {},
      route = { path: '/app/main/analytics', fullPath: '/app/main/analytics' }
    } = options

    // Update mock route
    Object.assign(mockRoute, route)

    return mount(NavLink, {
      props: {
        header: 'Test Link',
        link: '/app/test',
        index: 'test',
        ...props
      },
      global: {
        plugins: [pinia],
        stubs: {
          RouterLink: {
            template: '<a :href="to" class="router-link"><slot /></a>',
            props: ['to']
          }
        }
      }
    })
  }

  beforeEach(() => {
    // Reset route before each test
    mockRoute.path = '/app/main/analytics'
    mockRoute.fullPath = '/app/main/analytics'
  })

  afterEach(() => {
    wrapper?.unmount()
  })

  describe('header link rendering', () => {
    it('renders header link when isHeader is true and no children', () => {
      wrapper = createWrapper({
        props: {
          header: 'Dashboard',
          link: '/app/main',
          isHeader: true
        }
      })
      expect(wrapper.find('.headerLink').exists()).toBe(true)
      expect(wrapper.find('.sidebar-link').exists()).toBe(true)
    })

    it('renders header text', () => {
      wrapper = createWrapper({
        props: {
          header: 'Dashboard',
          link: '/app/main',
          isHeader: true
        }
      })
      expect(wrapper.text()).toContain('Dashboard')
    })

    it('renders RouterLink with correct to prop', () => {
      wrapper = createWrapper({
        props: {
          header: 'Dashboard',
          link: '/app/main',
          isHeader: true
        }
      })
      const routerLink = wrapper.find('.router-link')
      expect(routerLink.attributes('href')).toBe('/app/main')
    })
  })

  describe('label rendering', () => {
    it('renders label when provided', () => {
      wrapper = createWrapper({
        props: {
          header: 'Chat',
          link: '/app/chat',
          isHeader: true,
          label: 'awesome'
        }
      })
      const label = wrapper.find('.headerLabel')
      expect(label.exists()).toBe(true)
      expect(label.text()).toBe('awesome')
    })

    it('applies label color class', () => {
      wrapper = createWrapper({
        props: {
          header: 'Chat',
          link: '/app/chat',
          isHeader: true,
          label: 'awesome',
          labelColor: 'success'
        }
      })
      const label = wrapper.find('.headerLabel')
      expect(label.classes()).toContain('text-success')
    })

    it('defaults to warning color', () => {
      wrapper = createWrapper({
        props: {
          header: 'Chat',
          link: '/app/chat',
          isHeader: true,
          label: 'new'
        }
      })
      const label = wrapper.find('.headerLabel')
      expect(label.classes()).toContain('text-warning')
    })

    it('does not render label when not provided', () => {
      wrapper = createWrapper({
        props: {
          header: 'Dashboard',
          link: '/app/main',
          isHeader: true
        }
      })
      expect(wrapper.find('.headerLabel').exists()).toBe(false)
    })
  })

  describe('badge rendering', () => {
    it('renders badge when provided', () => {
      wrapper = createWrapper({
        props: {
          header: 'Email',
          link: '/app/email',
          isHeader: true,
          badge: '9'
        }
      })
      const badge = wrapper.find('.badge')
      expect(badge.exists()).toBe(true)
      expect(badge.text()).toBe('9')
    })

    it('applies badge styling', () => {
      wrapper = createWrapper({
        props: {
          header: 'Email',
          link: '/app/email',
          isHeader: true,
          badge: '5'
        }
      })
      const badge = wrapper.find('.badge')
      expect(badge.classes()).toContain('rounded-pill')
      expect(badge.classes()).toContain('bg-danger')
    })

    it('does not render badge when not provided', () => {
      wrapper = createWrapper({
        props: {
          header: 'Dashboard',
          link: '/app/main',
          isHeader: true
        }
      })
      expect(wrapper.find('.badge').exists()).toBe(false)
    })
  })

  describe('icon rendering', () => {
    it('renders icon element when iconName is provided', () => {
      wrapper = createWrapper({
        props: {
          header: 'Dashboard',
          link: '/app/main',
          isHeader: true,
          iconName: 'flaticon-home'
        }
      })
      const icon = wrapper.find('.icon i')
      expect(icon.exists()).toBe(true)
      expect(icon.classes()).toContain('fi')
      expect(icon.classes()).toContain('flaticon-home')
    })

    it('renders icon span wrapper', () => {
      wrapper = createWrapper({
        props: {
          header: 'Dashboard',
          link: '/app/main',
          isHeader: true,
          iconName: 'flaticon-home'
        }
      })
      expect(wrapper.find('.icon').exists()).toBe(true)
    })
  })

  describe('children links rendering', () => {
    it('renders as expandable when childrenLinks provided', () => {
      wrapper = createWrapper({
        props: {
          header: 'Dashboard',
          link: '/app/main',
          childrenLinks: [
            { header: 'Analytics', link: '/app/main/analytics' },
            { header: 'Visits', link: '/app/main/visits' }
          ]
        }
      })
      expect(wrapper.find('.collapse').exists()).toBe(true)
      expect(wrapper.find('.sub-menu').exists()).toBe(true)
    })

    it('renders caret icon for expandable links', () => {
      wrapper = createWrapper({
        props: {
          header: 'Dashboard',
          link: '/app/main',
          childrenLinks: [
            { header: 'Analytics', link: '/app/main/analytics' }
          ]
        }
      })
      expect(wrapper.find('.caretWrapper').exists()).toBe(true)
      expect(wrapper.find('.fa-angle-right').exists()).toBe(true)
    })

    it('renders nested NavLink components', () => {
      wrapper = createWrapper({
        props: {
          header: 'Dashboard',
          link: '/app/main',
          childrenLinks: [
            { header: 'Analytics', link: '/app/main/analytics' },
            { header: 'Visits', link: '/app/main/visits' }
          ]
        }
      })
      const nestedLinks = wrapper.findAllComponents({ name: 'NavLink' })
      // Component renders itself recursively, so we should have children
      expect(nestedLinks.length).toBeGreaterThanOrEqual(2)
    })
  })

  describe('active state', () => {
    it('applies active class when activeItem includes index', () => {
      wrapper = createWrapper({
        props: {
          header: 'Dashboard',
          link: '/app/main',
          index: 'main',
          activeItem: '/app/main',
          childrenLinks: [
            { header: 'Analytics', link: '/app/main/analytics' }
          ]
        }
      })
      expect(wrapper.find('.collapse').classes()).toContain('show')
    })

    it('applies carretActive class when active', () => {
      wrapper = createWrapper({
        props: {
          header: 'Dashboard',
          link: '/app/main',
          index: 'main',
          activeItem: '/app/main',
          childrenLinks: [
            { header: 'Analytics', link: '/app/main/analytics' }
          ]
        }
      })
      expect(wrapper.find('.caretWrapper').classes()).toContain('carretActive')
    })

    it('does not show collapse when not active', () => {
      wrapper = createWrapper({
        props: {
          header: 'Dashboard',
          link: '/app/main',
          index: 'main',
          activeItem: '/app/other',
          childrenLinks: [
            { header: 'Analytics', link: '/app/main/analytics' }
          ]
        }
      })
      expect(wrapper.find('.collapse').classes()).not.toContain('show')
    })
  })

  describe('parent active state', () => {
    it('applies router-link-active class when route starts with link', () => {
      wrapper = createWrapper({
        props: {
          header: 'Dashboard',
          link: '/app/main',
          childrenLinks: [
            { header: 'Analytics', link: '/app/main/analytics' }
          ]
        },
        route: { path: '/app/main/analytics', fullPath: '/app/main/analytics' }
      })
      const link = wrapper.find('.sidebar-link')
      expect(link.classes()).toContain('router-link-active')
    })

    it('does not apply router-link-active when route does not match', () => {
      wrapper = createWrapper({
        props: {
          header: 'Dashboard',
          link: '/app/main',
          childrenLinks: [
            { header: 'Analytics', link: '/app/main/analytics' }
          ]
        },
        route: { path: '/app/other', fullPath: '/app/other' }
      })
      const link = wrapper.find('.sidebar-link')
      expect(link.classes()).not.toContain('router-link-active')
    })
  })

  describe('toggle behavior', () => {
    it('toggles collapse on click', async () => {
      wrapper = createWrapper({
        props: {
          header: 'Dashboard',
          link: '/app/main',
          index: 'main',
          activeItem: '',
          childrenLinks: [
            { header: 'Analytics', link: '/app/main/analytics' }
          ]
        }
      })

      const clickArea = wrapper.find('.sidebar-link').element.parentElement
      await wrapper.find('.sidebar-link').trigger('click')

      // Should update layout store
      const layoutStore = useLayoutStore()
      expect(layoutStore.sidebarActiveElement).toBe('/app/main')
    })

    it('updates store on toggle', async () => {
      wrapper = createWrapper({
        props: {
          header: 'Dashboard',
          link: '/app/main',
          index: 'main',
          childrenLinks: [
            { header: 'Analytics', link: '/app/main/analytics' }
          ]
        }
      })

      const layoutStore = useLayoutStore()
      const changeSpy = vi.spyOn(layoutStore, 'changeSidebarActive')

      // Find and click the wrapper div that has the click handler
      const linkWrapper = wrapper.find('.headerLink > div')
      await linkWrapper.trigger('click')

      expect(changeSpy).toHaveBeenCalledWith('/app/main')
    })
  })

  describe('simple link rendering', () => {
    it('renders simple link when not header and no children', () => {
      wrapper = createWrapper({
        props: {
          header: 'Child Item',
          link: '/app/main/child',
          index: 'child',
          isHeader: false
        }
      })
      // Should render third template branch (simple li)
      const li = wrapper.find('li')
      expect(li.exists()).toBe(true)
    })

    it('simple link renders header text', () => {
      wrapper = createWrapper({
        props: {
          header: 'Child Item',
          link: '/app/main/child',
          index: 'child'
        }
      })
      expect(wrapper.text()).toContain('Child Item')
    })
  })

  describe('className prop', () => {
    it('applies custom className to header link', () => {
      wrapper = createWrapper({
        props: {
          header: 'Dashboard',
          link: '/app/main',
          isHeader: true,
          className: 'custom-class'
        }
      })
      expect(wrapper.find('.headerLink').classes()).toContain('custom-class')
    })

    it('applies custom className to expandable link', () => {
      wrapper = createWrapper({
        props: {
          header: 'Dashboard',
          link: '/app/main',
          className: 'custom-class',
          childrenLinks: [
            { header: 'Analytics', link: '/app/main/analytics' }
          ]
        }
      })
      expect(wrapper.find('.headerLink').classes()).toContain('custom-class')
    })
  })

  describe('menu index handling', () => {
    it('renders empty href for menu index in simple link', () => {
      wrapper = createWrapper({
        props: {
          header: 'Level 1',
          link: '/app/menu/level1',
          index: 'menu'
        }
      })
      const routerLink = wrapper.find('.router-link')
      expect(routerLink.attributes('href')).toBe('')
    })

    it('renders actual href for non-menu index', () => {
      wrapper = createWrapper({
        props: {
          header: 'Level 1',
          link: '/app/other/level1',
          index: 'other'
        }
      })
      const routerLink = wrapper.find('.router-link')
      expect(routerLink.attributes('href')).toBe('/app/other/level1')
    })
  })

  describe('recursive nesting', () => {
    it('supports deeply nested children', () => {
      wrapper = createWrapper({
        props: {
          header: 'Menu Levels',
          link: '/app/menu',
          index: 'menu',
          childrenLinks: [
            {
              header: 'Level 1.2',
              link: '/app/menu/level_12',
              index: 'level_12',
              childrenLinks: [
                {
                  header: 'Level 2.1',
                  link: '/app/menu/level_12/level_21'
                }
              ]
            }
          ]
        }
      })

      // The component should render nested structure
      expect(wrapper.find('.sub-menu').exists()).toBe(true)
      const nestedComponents = wrapper.findAllComponents({ name: 'NavLink' })
      expect(nestedComponents.length).toBeGreaterThanOrEqual(1)
    })
  })
})
