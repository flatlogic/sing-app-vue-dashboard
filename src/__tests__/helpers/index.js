// Pinia test utilities
export {
  createTestPinia,
  createSpyPinia,
  resetStore,
  createMockStore
} from './pinia.js'

// Axios mock utilities
export {
  mockAxios,
  mockSuccess,
  mockError,
  mockNetworkError,
  setupMockSuccess,
  setupMockError,
  resetAxiosMock
} from './axios.js'

// JWT test utilities
export {
  createMockJwt,
  createExpiredJwt,
  createInvalidJwt,
  createUserJwt,
  decodeTestJwt,
  isTestJwtExpired
} from './jwt.js'

// Router mock utilities
export {
  createMockRouter,
  createMockRoute,
  simulateNavigation,
  createMockUseRoute,
  createMockUseRouter
} from './router.js'

// Component test utilities
export {
  mountComponent,
  shallowMountComponent,
  createMockAppConfig,
  spyOnMethod,
  waitForUpdate,
  triggerResize,
  createTouchEvents,
  waitFor,
  findByRef,
  expectEmitted,
  createLayoutStoreState,
  createAuthStoreState
} from './component.js'
