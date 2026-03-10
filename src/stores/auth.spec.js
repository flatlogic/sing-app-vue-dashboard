import { describe, it, expect, vi, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useAuthStore } from './auth'
import { createMockJwt } from '../__tests__/helpers'

// Mock axios
vi.mock('axios', () => ({
  default: {
    post: vi.fn(),
    defaults: {
      headers: {
        common: {}
      }
    }
  }
}))

// Mock config
vi.mock('../config', () => ({
  default: {
    isBackend: false,
    baseURLApi: 'http://localhost:8080/api',
    redirectUrl: 'http://localhost:3000',
    auth: {
      email: 'admin@flatlogic.com',
      password: 'password'
    }
  }
}))

// Mock auth utils
vi.mock('../utils/auth', () => ({
  decodeJwt: vi.fn((token) => {
    if (token === 'token' || !token.includes('.')) {
      return { user: { email: 'admin@flatlogic.com' } }
    }
    // For actual JWT tokens
    try {
      const parts = token.split('.')
      const payload = JSON.parse(atob(parts[1].replace(/-/g, '+').replace(/_/g, '/')))
      return payload
    } catch {
      return { user: { email: 'test@example.com' } }
    }
  }),
  clearAuthData: vi.fn()
}))

describe('auth store', () => {
  let store

  beforeEach(async () => {
    setActivePinia(createPinia())
    store = useAuthStore()
    vi.clearAllMocks()
    localStorage.clear()
  })

  describe('initial state', () => {
    it('has isFetching set to false', () => {
      expect(store.isFetching).toBe(false)
    })

    it('has errorMessage set to empty string', () => {
      expect(store.errorMessage).toBe('')
    })
  })

  describe('loginUser', () => {
    it('returns success in non-backend mode', async () => {
      const result = await store.loginUser({ email: 'test@test.com', password: 'pass' })

      expect(result.success).toBe(true)
      expect(result.redirect).toBe('/app/main/analytics')
    })

    it('stores token and user in localStorage in non-backend mode', async () => {
      await store.loginUser({ email: 'test@test.com', password: 'pass' })

      expect(localStorage.getItem('token')).toBe('token')
      expect(localStorage.getItem('user')).toBeDefined()
    })

    it('handles social login redirect', async () => {
      const originalHref = window.location.href

      await store.loginUser({ social: 'google' })

      // In non-backend mode, it just returns success
      // In backend mode, it would redirect
      expect(store.errorMessage).toBe('')

      window.location.href = originalHref
    })

    it('returns error for empty credentials in backend mode', async () => {
      // Temporarily mock backend mode
      vi.doMock('../config', () => ({
        default: {
          isBackend: true,
          baseURLApi: 'http://localhost:8080/api',
          redirectUrl: 'http://localhost:3000'
        }
      }))

      vi.resetModules()
      setActivePinia(createPinia())
      const { useAuthStore: useAuthBackend } = await import('./auth')
      const backendStore = useAuthBackend()

      const result = await backendStore.loginUser({ email: '', password: '' })

      expect(result.success).toBe(false)
      expect(result.error).toBeDefined()
    })

    it('calls API in backend mode with valid credentials', async () => {
      vi.doMock('../config', () => ({
        default: {
          isBackend: true,
          baseURLApi: 'http://localhost:8080/api',
          redirectUrl: 'http://localhost:3000'
        }
      }))

      vi.resetModules()
      setActivePinia(createPinia())

      const axiosMock = (await import('axios')).default
      axiosMock.post.mockResolvedValue({ data: createMockJwt() })

      const { useAuthStore: useAuthBackend } = await import('./auth')
      const backendStore = useAuthBackend()

      const result = await backendStore.loginUser({
        email: 'test@test.com',
        password: 'password123'
      })

      expect(axiosMock.post).toHaveBeenCalledWith('/auth/signin/local', {
        email: 'test@test.com',
        password: 'password123'
      })
      expect(result.success).toBe(true)
    })
  })

  describe('receiveToken', () => {
    it('stores token in localStorage', () => {
      store.receiveToken('test-token')

      expect(localStorage.getItem('token')).toBe('test-token')
    })

    it('stores user in localStorage', () => {
      store.receiveToken('test-token')

      const user = JSON.parse(localStorage.getItem('user'))
      expect(user).toBeDefined()
      expect(user.email).toBe('admin@flatlogic.com')
    })

    it('sets axios Authorization header', async () => {
      store.receiveToken('test-token')

      const axiosMod = await import('axios')
      expect(axiosMod.default.defaults.headers.common['Authorization']).toBe('Bearer test-token')
    })

    it('resets fetching state', () => {
      store.requestLogin()
      expect(store.isFetching).toBe(true)

      store.receiveToken('test-token')
      expect(store.isFetching).toBe(false)
    })

    it('clears error message', () => {
      store.loginError('Some error')
      expect(store.errorMessage).toBe('Some error')

      store.receiveToken('test-token')
      expect(store.errorMessage).toBe('')
    })
  })

  describe('logoutUser', () => {
    it('returns redirect to login', () => {
      const result = store.logoutUser()

      expect(result.redirect).toBe('/login')
    })

    it('clears auth data', async () => {
      const { clearAuthData } = await import('../utils/auth')

      store.logoutUser()

      expect(clearAuthData).toHaveBeenCalled()
    })

    it('clears axios Authorization header', async () => {
      store.receiveToken('test-token')
      store.logoutUser()

      const axiosMod = await import('axios')
      expect(axiosMod.default.defaults.headers.common['Authorization']).toBe('')
    })
  })

  describe('state helpers', () => {
    describe('requestLogin', () => {
      it('sets isFetching to true', () => {
        store.requestLogin()

        expect(store.isFetching).toBe(true)
      })
    })

    describe('receiveLogin', () => {
      it('sets isFetching to false', () => {
        store.requestLogin()
        store.receiveLogin()

        expect(store.isFetching).toBe(false)
      })

      it('clears errorMessage', () => {
        store.loginError('Some error')
        store.receiveLogin()

        expect(store.errorMessage).toBe('')
      })
    })

    describe('loginError', () => {
      it('sets isFetching to false', () => {
        store.requestLogin()
        store.loginError('Error')

        expect(store.isFetching).toBe(false)
      })

      it('sets errorMessage', () => {
        store.loginError('Login failed')

        expect(store.errorMessage).toBe('Login failed')
      })
    })

    describe('clearError', () => {
      it('clears errorMessage', () => {
        store.loginError('Some error')
        store.clearError()

        expect(store.errorMessage).toBe('')
      })
    })
  })
})
