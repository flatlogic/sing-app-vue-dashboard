import { createPinia, setActivePinia } from 'pinia'
import { vi } from 'vitest'

/**
 * Create a test Pinia instance
 * @param {object} options - Options for the test pinia
 * @returns {object} Pinia instance
 */
export function createTestPinia(options = {}) {
  const pinia = createPinia()
  setActivePinia(pinia)

  if (options.initialState) {
    Object.entries(options.initialState).forEach(([storeId, state]) => {
      pinia.state.value[storeId] = state
    })
  }

  return pinia
}

/**
 * Create a Pinia instance with spied actions
 * @param {object} options - Options for the spy pinia
 * @returns {object} Pinia instance with spy capabilities
 */
export function createSpyPinia(options = {}) {
  const { stubActions = false, initialState = {} } = options

  const pinia = createPinia()

  // Track original actions for spying
  const actionSpies = new Map()

  pinia.use(({ store, options: storeOptions }) => {
    // Set initial state if provided
    if (initialState[store.$id]) {
      Object.assign(store.$state, initialState[store.$id])
    }

    // Spy on actions
    if (storeOptions.actions) {
      Object.keys(storeOptions.actions).forEach((actionName) => {
        const originalAction = store[actionName]
        if (typeof originalAction === 'function') {
          const spy = stubActions
            ? vi.fn()
            : vi.fn((...args) => originalAction.apply(store, args))

          store[actionName] = spy
          actionSpies.set(`${store.$id}.${actionName}`, spy)
        }
      })
    }
  })

  setActivePinia(pinia)

  return {
    pinia,
    getActionSpy: (storeId, actionName) => actionSpies.get(`${storeId}.${actionName}`)
  }
}

/**
 * Reset a store to its initial state
 * @param {object} store - Pinia store instance
 */
export function resetStore(store) {
  store.$reset()
}

/**
 * Create a mock store with predefined state and actions
 * @param {string} id - Store ID
 * @param {object} state - Initial state
 * @param {object} actions - Action implementations
 * @returns {object} Mock store
 */
export function createMockStore(id, state = {}, actions = {}) {
  const mockState = { ...state }
  const mockActions = {}

  Object.keys(actions).forEach((actionName) => {
    mockActions[actionName] = vi.fn(actions[actionName])
  })

  return {
    $id: id,
    $state: mockState,
    ...mockState,
    ...mockActions,
    $reset: vi.fn(() => {
      Object.assign(mockState, state)
    }),
    $patch: vi.fn((partialState) => {
      if (typeof partialState === 'function') {
        partialState(mockState)
      } else {
        Object.assign(mockState, partialState)
      }
    })
  }
}
