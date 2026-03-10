import { vi } from 'vitest'

/**
 * Create a mock Vue Router instance
 * @param {object} options - Router options
 * @returns {object} Mock router
 */
export function createMockRouter(options = {}) {
  const {
    currentRoute = { path: '/', name: 'home', params: {}, query: {}, meta: {} },
    routes = []
  } = options

  const router = {
    currentRoute: {
      value: currentRoute
    },
    options: {
      routes
    },
    push: vi.fn(() => Promise.resolve()),
    replace: vi.fn(() => Promise.resolve()),
    go: vi.fn(),
    back: vi.fn(),
    forward: vi.fn(),
    beforeEach: vi.fn((guard) => {
      router._beforeEachGuards.push(guard)
      return () => {
        const index = router._beforeEachGuards.indexOf(guard)
        if (index > -1) router._beforeEachGuards.splice(index, 1)
      }
    }),
    afterEach: vi.fn((hook) => {
      router._afterEachHooks.push(hook)
      return () => {
        const index = router._afterEachHooks.indexOf(hook)
        if (index > -1) router._afterEachHooks.splice(index, 1)
      }
    }),
    beforeResolve: vi.fn(),
    hasRoute: vi.fn((name) => routes.some(r => r.name === name)),
    getRoutes: vi.fn(() => routes),
    resolve: vi.fn((to) => ({
      path: typeof to === 'string' ? to : to.path || '/',
      name: typeof to === 'object' ? to.name : undefined,
      params: typeof to === 'object' ? to.params || {} : {},
      query: typeof to === 'object' ? to.query || {} : {},
      meta: {},
      matched: [],
      redirectedFrom: undefined,
      href: typeof to === 'string' ? to : to.path || '/'
    })),
    addRoute: vi.fn(),
    removeRoute: vi.fn(),
    isReady: vi.fn(() => Promise.resolve()),
    install: vi.fn(),

    // Internal tracking
    _beforeEachGuards: [],
    _afterEachHooks: []
  }

  return router
}

/**
 * Create a mock route object
 * @param {object} options - Route options
 * @returns {object} Mock route
 */
export function createMockRoute(options = {}) {
  const {
    path = '/',
    name = 'default',
    params = {},
    query = {},
    meta = {},
    hash = '',
    fullPath = null,
    matched = [],
    redirectedFrom = undefined
  } = options

  return {
    path,
    name,
    params,
    query,
    meta,
    hash,
    fullPath: fullPath || path + (Object.keys(query).length ? '?' + new URLSearchParams(query).toString() : '') + hash,
    matched,
    redirectedFrom
  }
}

/**
 * Simulate navigation with guards
 * @param {object} router - Mock router instance
 * @param {object} to - Target route
 * @param {object} from - Source route
 * @returns {Promise} Navigation result
 */
export async function simulateNavigation(router, to, from = { path: '/' }) {
  const toRoute = typeof to === 'string' ? { path: to } : to
  const fromRoute = typeof from === 'string' ? { path: from } : from

  let nextCalled = false
  let nextArg = undefined

  const next = vi.fn((arg) => {
    nextCalled = true
    nextArg = arg
  })

  // Run through beforeEach guards
  for (const guard of router._beforeEachGuards) {
    await guard(toRoute, fromRoute, next)

    if (nextCalled) {
      if (nextArg === false) {
        return { success: false, redirect: null }
      }
      if (nextArg && typeof nextArg === 'object') {
        return { success: false, redirect: nextArg }
      }
      if (typeof nextArg === 'string') {
        return { success: false, redirect: { path: nextArg } }
      }
    }
    nextCalled = false
    nextArg = undefined
  }

  // Update current route
  router.currentRoute.value = { ...router.currentRoute.value, ...toRoute }

  // Run afterEach hooks
  for (const hook of router._afterEachHooks) {
    hook(toRoute, fromRoute)
  }

  return { success: true, redirect: null }
}

/**
 * Create a mock useRoute composable return value
 * @param {object} options - Route options
 * @returns {object} Mock useRoute return
 */
export function createMockUseRoute(options = {}) {
  return createMockRoute(options)
}

/**
 * Create a mock useRouter composable return value
 * @param {object} options - Router options
 * @returns {object} Mock useRouter return
 */
export function createMockUseRouter(options = {}) {
  return createMockRouter(options)
}
