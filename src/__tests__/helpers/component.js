import { mount, shallowMount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import { vi } from 'vitest'
import { createMockRouter } from './router.js'

/**
 * Mount a component with common test setup
 * @param {object} component - Vue component to mount
 * @param {object} options - Mount options
 * @returns {object} Wrapper instance
 */
export function mountComponent(component, options = {}) {
  const {
    props = {},
    shallow = false,
    stores = {},
    route = {},
    slots = {},
    stubs = {},
    attachTo = undefined
  } = options

  const pinia = createPinia()
  setActivePinia(pinia)

  // Set initial store state if provided
  Object.entries(stores).forEach(([storeId, state]) => {
    pinia.state.value[storeId] = state
  })

  const router = createMockRouter({ currentRoute: route })

  const mountFn = shallow ? shallowMount : mount
  return mountFn(component, {
    props,
    slots,
    attachTo,
    global: {
      plugins: [pinia, router],
      stubs: {
        teleport: true,
        RouterLink: {
          template: '<a :href="to"><slot /></a>',
          props: ['to']
        },
        RouterView: {
          template: '<div class="router-view-stub"><slot /></div>'
        },
        ...stubs
      },
      mocks: {
        $route: {
          path: route.path || '/',
          name: route.name || 'home',
          params: route.params || {},
          query: route.query || {},
          meta: route.meta || {},
          fullPath: route.fullPath || route.path || '/'
        }
      }
    }
  })
}

/**
 * Mount a component with shallow rendering
 * @param {object} component - Vue component to mount
 * @param {object} options - Mount options
 * @returns {object} Wrapper instance
 */
export function shallowMountComponent(component, options = {}) {
  return mountComponent(component, { ...options, shallow: true })
}

/**
 * Create mock app config for testing
 * @returns {object} Mock app config
 */
export function createMockAppConfig() {
  return {
    app: {
      colors: {
        primary: '#6FB0F9',
        success: '#26CD5F',
        warning: '#EBB834',
        danger: '#FF5574'
      },
      sidebarTransitionTime: 300,
      sidebarColors: [
        ['default', '#002B49'],
        ['gray', '#333333'],
        ['white', '#FFFFFF'],
        ['blue', '#3754a5']
      ],
      navbarColors: [
        ['white', '#FFFFFF'],
        ['light', '#F9FAFE'],
        ['dark', '#323232']
      ]
    }
  }
}

/**
 * Create a spy on a component method
 * @param {object} wrapper - Component wrapper
 * @param {string} methodName - Method name to spy on
 * @returns {object} Spy function
 */
export function spyOnMethod(wrapper, methodName) {
  const spy = vi.fn()
  const original = wrapper.vm[methodName]
  wrapper.vm[methodName] = (...args) => {
    spy(...args)
    return original?.apply(wrapper.vm, args)
  }
  return spy
}

/**
 * Wait for component to update
 * @param {object} wrapper - Component wrapper
 * @param {number} timeout - Timeout in ms
 */
export async function waitForUpdate(wrapper, timeout = 0) {
  await wrapper.vm.$nextTick()
  if (timeout > 0) {
    await new Promise(resolve => setTimeout(resolve, timeout))
  }
}

/**
 * Trigger window resize event
 * @param {number} width - Window width
 * @param {number} height - Window height
 */
export function triggerResize(width, height = 768) {
  Object.defineProperty(window, 'innerWidth', { value: width, writable: true })
  Object.defineProperty(window, 'innerHeight', { value: height, writable: true })
  window.dispatchEvent(new Event('resize'))
}

/**
 * Create mock touch events
 * @param {number} startX - Start X position
 * @param {number} endX - End X position
 * @returns {object} Touch event objects
 */
export function createTouchEvents(startX, endX) {
  const touchStart = {
    changedTouches: [{ screenX: startX, screenY: 100 }]
  }
  const touchEnd = {
    changedTouches: [{ screenX: endX, screenY: 100 }]
  }
  return { touchStart, touchEnd }
}

/**
 * Wait for a specific condition to be true
 * @param {function} condition - Condition function
 * @param {number} timeout - Timeout in ms
 * @param {number} interval - Check interval in ms
 */
export async function waitFor(condition, timeout = 1000, interval = 50) {
  const startTime = Date.now()
  while (Date.now() - startTime < timeout) {
    if (condition()) return
    await new Promise(resolve => setTimeout(resolve, interval))
  }
  throw new Error('Condition not met within timeout')
}

/**
 * Find component by ref name
 * @param {object} wrapper - Component wrapper
 * @param {string} refName - Ref name
 * @returns {object|null} Component instance or null
 */
export function findByRef(wrapper, refName) {
  return wrapper.vm.$refs[refName] || null
}

/**
 * Assert that a component emitted an event with specific payload
 * @param {object} wrapper - Component wrapper
 * @param {string} eventName - Event name
 * @param {any} payload - Expected payload
 */
export function expectEmitted(wrapper, eventName, payload = undefined) {
  const emitted = wrapper.emitted(eventName)
  expect(emitted).toBeTruthy()
  if (payload !== undefined) {
    expect(emitted[emitted.length - 1]).toEqual([payload])
  }
}

/**
 * Create mock store state for layout store
 * @param {object} overrides - State overrides
 * @returns {object} Layout store state
 */
export function createLayoutStoreState(overrides = {}) {
  return {
    sidebarClose: false,
    sidebarStatic: false,
    sidebarColorName: 'default',
    navbarColorName: 'light',
    navbarColorScheme: 'light',
    navbarType: 'static',
    sidebarType: 'solid',
    sidebarActiveElement: null,
    helperOpened: false,
    tourInstance: null,
    ...overrides
  }
}

/**
 * Create mock store state for auth store
 * @param {object} overrides - State overrides
 * @returns {object} Auth store state
 */
export function createAuthStoreState(overrides = {}) {
  return {
    isFetching: false,
    errorMessage: '',
    ...overrides
  }
}
