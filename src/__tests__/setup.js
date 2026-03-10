import { beforeEach, afterEach, expect, vi } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'

// Mock localStorage
const localStorageMock = (() => {
  let store = {}
  return {
    getItem: vi.fn((key) => store[key] || null),
    setItem: vi.fn((key, value) => {
      store[key] = String(value)
    }),
    removeItem: vi.fn((key) => {
      delete store[key]
    }),
    clear: vi.fn(() => {
      store = {}
    }),
    get length() {
      return Object.keys(store).length
    },
    key: vi.fn((index) => Object.keys(store)[index] || null)
  }
})()

Object.defineProperty(globalThis, 'localStorage', {
  value: localStorageMock,
  writable: true
})

// Mock sessionStorage
const sessionStorageMock = (() => {
  let store = {}
  return {
    getItem: vi.fn((key) => store[key] || null),
    setItem: vi.fn((key, value) => {
      store[key] = String(value)
    }),
    removeItem: vi.fn((key) => {
      delete store[key]
    }),
    clear: vi.fn(() => {
      store = {}
    }),
    get length() {
      return Object.keys(store).length
    },
    key: vi.fn((index) => Object.keys(store)[index] || null)
  }
})()

Object.defineProperty(globalThis, 'sessionStorage', {
  value: sessionStorageMock,
  writable: true
})

// Mock document.cookie
let cookieStore = ''
Object.defineProperty(document, 'cookie', {
  get: vi.fn(() => cookieStore),
  set: vi.fn((value) => {
    // Handle cookie setting (simplified)
    const [cookiePart] = value.split(';')
    const [name, val] = cookiePart.split('=')
    if (val === '' || value.includes('expires=Thu, 01 Jan 1970')) {
      // Delete cookie
      cookieStore = cookieStore
        .split('; ')
        .filter(c => !c.startsWith(name + '='))
        .join('; ')
    } else {
      // Add/update cookie
      const existing = cookieStore.split('; ').filter(c => !c.startsWith(name + '='))
      existing.push(`${name}=${val}`)
      cookieStore = existing.filter(Boolean).join('; ')
    }
  }),
  configurable: true
})

// Mock window.location
const locationMock = {
  href: '',
  origin: 'http://localhost:3000',
  pathname: '/',
  search: '',
  hash: '',
  assign: vi.fn(),
  replace: vi.fn(),
  reload: vi.fn()
}

Object.defineProperty(globalThis, 'location', {
  value: locationMock,
  writable: true
})

// Ensure atob/btoa are available (happy-dom should provide these, but just in case)
if (typeof globalThis.atob !== 'function') {
  globalThis.atob = (str) => Buffer.from(str, 'base64').toString('binary')
}
if (typeof globalThis.btoa !== 'function') {
  globalThis.btoa = (str) => Buffer.from(str, 'binary').toString('base64')
}

// Custom matcher for JWT validation
expect.extend({
  toBeValidJwt(received) {
    const pass = typeof received === 'string' && received.split('.').length === 3
    if (pass) {
      return {
        message: () => `expected ${received} not to be a valid JWT`,
        pass: true
      }
    }
    return {
      message: () => `expected ${received} to be a valid JWT with format header.payload.signature`,
      pass: false
    }
  }
})

// Fresh Pinia instance per test
beforeEach(() => {
  setActivePinia(createPinia())
  // Clear storage mocks
  localStorageMock.clear()
  sessionStorageMock.clear()
  cookieStore = ''
  // Reset location
  locationMock.href = ''
  locationMock.pathname = '/'
  locationMock.search = ''
  locationMock.hash = ''
})

afterEach(() => {
  vi.clearAllMocks()
})
