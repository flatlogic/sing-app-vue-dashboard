import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import Header from './Header.vue'
import { useLayoutStore } from '@/stores/layout'
import { useAuthStore } from '@/stores/auth'

// Mock vue-router at module level
const mockPush = vi.fn()
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
    push: mockPush,
    replace: vi.fn()
  })
}))

// Mock SVG imports
vi.mock('@/assets/sidebar/Fill/Menu.svg?url', () => ({ default: 'menu.svg' }))
vi.mock('@/assets/sidebar/Fill/Exchange.svg?url', () => ({ default: 'exchange.svg' }))
vi.mock('@/assets/sidebar/Fill/Cross.svg?url', () => ({ default: 'cross.svg' }))
vi.mock('@/assets/sidebar/Fill/Search.svg?url', () => ({ default: 'search.svg' }))
vi.mock('@/assets/sidebar/Fill/Caret down.svg?url', () => ({ default: 'caretdown.svg' }))
vi.mock('@/assets/sidebar/Outline/Settings-alt.svg?url', () => ({ default: 'settings.svg' }))
vi.mock('@/assets/sidebar/Outline/User.svg?url', () => ({ default: 'user.svg' }))
vi.mock('@/assets/sidebar/Outline/Document.svg?url', () => ({ default: 'document.svg' }))
vi.mock('@/assets/sidebar/Outline/Envelope.svg?url', () => ({ default: 'envelope.svg' }))
vi.mock('@/assets/sidebar/Outline/Cancel.svg?url', () => ({ default: 'cancel.svg' }))
vi.mock('@/assets/people/a7.png', () => ({ default: 'avatar.png' }))

// Mock Notifications component
vi.mock('@/components/Notifications/Notifications.vue', () => ({
  default: {
    name: 'Notifications',
    template: '<div class="notifications-stub">Notifications</div>'
  }
}))

describe('Header.vue', () => {
  let wrapper

  function createWrapper(options = {}) {
    const pinia = createPinia()
    setActivePinia(pinia)

    const {
      route = { path: '/app/main/analytics', fullPath: '/app/main/analytics' },
      user = {}
    } = options

    // Update mock route
    Object.assign(mockRoute, route)

    // Set user in localStorage
    localStorage.setItem('user', JSON.stringify(user))

    return mount(Header, {
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
    localStorage.clear()
    mockPush.mockClear()
    // Reset route
    mockRoute.path = '/app/main/analytics'
    mockRoute.fullPath = '/app/main/analytics'
  })

  afterEach(() => {
    wrapper?.unmount()
    localStorage.clear()
  })

  describe('rendering', () => {
    it('renders navbar element', () => {
      wrapper = createWrapper()
      expect(wrapper.find('nav.navbar').exists()).toBe(true)
      expect(wrapper.find('nav.app-header').exists()).toBe(true)
    })

    it('renders menu toggle button', () => {
      wrapper = createWrapper()
      expect(wrapper.find('img[alt="menu"]').exists()).toBe(true)
    })

    it('renders search input', () => {
      wrapper = createWrapper()
      expect(wrapper.find('#search-input').exists()).toBe(true)
      expect(wrapper.find('#search-input').attributes('placeholder')).toBe('Search Dashboard')
    })

    it('renders mobile brand', () => {
      wrapper = createWrapper()
      expect(wrapper.find('.navbarBrand').exists()).toBe(true)
      expect(wrapper.find('.navbarBrand').text()).toContain('sing')
    })

    it('renders Notifications component in dropdown', () => {
      wrapper = createWrapper()
      expect(wrapper.find('.notifications-stub').exists()).toBe(true)
    })

    it('renders settings dropdown', () => {
      wrapper = createWrapper()
      expect(wrapper.find('#settingsDropdown').exists()).toBe(true)
    })
  })

  describe('user display', () => {
    it('shows first letter of user email when no avatar', () => {
      wrapper = createWrapper({
        user: { email: 'test@example.com' }
      })
      const avatar = wrapper.find('.avatar')
      expect(avatar.text()).toBe('T')
    })

    it('shows first letter of user name when available', () => {
      wrapper = createWrapper({
        user: { name: 'John Doe', email: 'john@example.com' }
      })
      const avatar = wrapper.find('.avatar')
      expect(avatar.text()).toBe('J')
    })

    it('shows default "P" when no user data', () => {
      wrapper = createWrapper({
        user: {}
      })
      const avatar = wrapper.find('.avatar')
      expect(avatar.text()).toBe('P')
    })

    it('displays user name in dropdown', () => {
      wrapper = createWrapper({
        user: { name: 'John Doe', email: 'john@example.com' }
      })
      expect(wrapper.find('#notificationsDropdown').text()).toContain('John Doe')
    })

    it('displays user email when name is not available', () => {
      wrapper = createWrapper({
        user: { email: 'john@example.com' }
      })
      expect(wrapper.find('#notificationsDropdown').text()).toContain('john@example.com')
    })

    it('displays default name when no user info', () => {
      wrapper = createWrapper({
        user: {}
      })
      expect(wrapper.find('#notificationsDropdown').text()).toContain('Philip smith')
    })

    it('shows avatar image for admin user', () => {
      wrapper = createWrapper({
        user: { email: 'admin@flatlogic.com' }
      })
      const avatarImg = wrapper.find('.avatar img.rounded-circle')
      expect(avatarImg.exists()).toBe(true)
    })

    it('shows custom avatar when user has avatar', () => {
      wrapper = createWrapper({
        user: { email: 'user@example.com', avatar: 'custom-avatar.png' }
      })
      const avatarImg = wrapper.find('.avatar img.rounded-circle')
      expect(avatarImg.exists()).toBe(true)
      expect(avatarImg.attributes('src')).toBe('custom-avatar.png')
    })
  })

  describe('navbar type styling', () => {
    it('applies static navbar type class by default', () => {
      wrapper = createWrapper()
      expect(wrapper.find('nav').classes()).toContain('navbar-static-type')
    })

    it('applies floating navbar type class when set', async () => {
      wrapper = createWrapper()
      const layoutStore = useLayoutStore()
      layoutStore.navbarType = 'floating'
      await wrapper.vm.$nextTick()
      expect(wrapper.find('nav').classes()).toContain('navbar-floating-type')
    })

    it('applies navbar color scheme class', () => {
      wrapper = createWrapper()
      expect(wrapper.find('nav').classes()).toContain('header-light')
    })

    it('applies dark color scheme when set', async () => {
      wrapper = createWrapper()
      const layoutStore = useLayoutStore()
      layoutStore.navbarColorScheme = 'dark'
      await wrapper.vm.$nextTick()
      expect(wrapper.find('nav').classes()).toContain('header-dark')
    })
  })

  describe('sidebar toggle', () => {
    it('calls switchSidebarMethod on mobile menu click', async () => {
      wrapper = createWrapper()
      const layoutStore = useLayoutStore()
      const switchSidebarSpy = vi.spyOn(layoutStore, 'switchSidebar')

      const mobileMenuLink = wrapper.find('.d-md-none[href="#"]')
      await mobileMenuLink.trigger('click')

      expect(switchSidebarSpy).toHaveBeenCalled()
    })

    it('calls toggleSidebarMethod on desktop menu click', async () => {
      wrapper = createWrapper()
      const layoutStore = useLayoutStore()
      const toggleSidebarSpy = vi.spyOn(layoutStore, 'toggleSidebar')

      const desktopMenuLink = wrapper.find('.d-md-down-none[href="#"]')
      await desktopMenuLink.trigger('click')

      expect(toggleSidebarSpy).toHaveBeenCalled()
    })

    it('switchSidebarMethod opens sidebar when closed', async () => {
      wrapper = createWrapper()
      const layoutStore = useLayoutStore()
      layoutStore.sidebarClose = true

      const mobileMenuLink = wrapper.find('.d-md-none[href="#"]')
      await mobileMenuLink.trigger('click')

      expect(layoutStore.sidebarClose).toBe(false)
    })

    it('switchSidebarMethod closes sidebar when open', async () => {
      wrapper = createWrapper()
      const layoutStore = useLayoutStore()
      layoutStore.sidebarClose = false

      const mobileMenuLink = wrapper.find('.d-md-none[href="#"]')
      await mobileMenuLink.trigger('click')

      expect(layoutStore.sidebarClose).toBe(true)
    })
  })

  describe('logout functionality', () => {
    it('renders logout button', () => {
      wrapper = createWrapper()
      const logoutBtn = wrapper.find('button.dropdown-item')
      expect(logoutBtn.exists()).toBe(true)
      expect(logoutBtn.text()).toContain('Log Out')
    })

    it('calls logoutUser on logout button click', async () => {
      wrapper = createWrapper()
      const authStore = useAuthStore()
      const logoutSpy = vi.spyOn(authStore, 'logoutUser')

      const logoutBtn = wrapper.find('button.dropdown-item')
      await logoutBtn.trigger('click')

      expect(logoutSpy).toHaveBeenCalled()
    })

    it('redirects to login after logout', async () => {
      wrapper = createWrapper()

      const logoutBtn = wrapper.find('button.dropdown-item')
      await logoutBtn.trigger('click')

      expect(mockPush).toHaveBeenCalledWith('/login')
    })

    it('clears auth data on logout', async () => {
      localStorage.setItem('token', 'test-token')
      localStorage.setItem('user', JSON.stringify({ email: 'test@example.com' }))

      wrapper = createWrapper()

      const logoutBtn = wrapper.find('button.dropdown-item')
      await logoutBtn.trigger('click')

      expect(localStorage.getItem('token')).toBeNull()
      expect(localStorage.getItem('user')).toBeNull()
    })
  })

  describe('navigation links', () => {
    it('has link to My Account', () => {
      wrapper = createWrapper()
      const accountLink = wrapper.find('a[href="/app/profile"]')
      expect(accountLink.exists()).toBe(true)
      expect(accountLink.text()).toContain('My Account')
    })

    it('has link to Calendar', () => {
      wrapper = createWrapper()
      const calendarLink = wrapper.find('a[href="/app/extra/calendar"]')
      expect(calendarLink.exists()).toBe(true)
      expect(calendarLink.text()).toContain('Calendar')
    })

    it('has link to Inbox with badge', () => {
      wrapper = createWrapper()
      const inboxLink = wrapper.find('a[href="/app/email"]')
      expect(inboxLink.exists()).toBe(true)
      expect(inboxLink.text()).toContain('Inbox')
      expect(inboxLink.find('.circle').text()).toBe('9')
    })
  })

  describe('store integration', () => {
    it('reads sidebarClose from layout store', async () => {
      wrapper = createWrapper()
      const layoutStore = useLayoutStore()

      // Initially false
      expect(layoutStore.sidebarClose).toBe(false)

      // Change store state
      layoutStore.sidebarClose = true
      await wrapper.vm.$nextTick()

      // Component should reflect the change (visible in sidebar toggle behavior)
      const mobileMenuLink = wrapper.find('.d-md-none[href="#"]')
      await mobileMenuLink.trigger('click')
      expect(layoutStore.sidebarClose).toBe(false) // Should toggle back
    })

    it('reads sidebarStatic from layout store', async () => {
      wrapper = createWrapper()
      const layoutStore = useLayoutStore()

      expect(layoutStore.sidebarStatic).toBe(false)

      layoutStore.sidebarStatic = true
      await wrapper.vm.$nextTick()

      // toggleSidebar behavior changes based on sidebarStatic
      const desktopMenuLink = wrapper.find('.d-md-down-none[href="#"]')
      await desktopMenuLink.trigger('click')

      // sidebarStatic should toggle
      expect(layoutStore.sidebarStatic).toBe(false)
    })

    it('updates sidebar active element on toggle', async () => {
      wrapper = createWrapper({
        route: { path: '/app/main/analytics', fullPath: '/app/main/analytics' }
      })
      const layoutStore = useLayoutStore()
      layoutStore.sidebarClose = true

      const mobileMenuLink = wrapper.find('.d-md-none[href="#"]')
      await mobileMenuLink.trigger('click')

      expect(layoutStore.sidebarActiveElement).toBe('/app/main')
    })
  })
})
