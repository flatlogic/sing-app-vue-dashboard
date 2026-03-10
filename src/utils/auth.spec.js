import { describe, it, expect, vi, beforeEach } from 'vitest'
import {
  isValidJwtStructure,
  decodeJwt,
  isTokenExpired,
  isAuthenticated,
  getCurrentUser,
  clearAuthData
} from './auth'
import { createMockJwt, createExpiredJwt, createInvalidJwt } from '../__tests__/helpers'

// Mock config
vi.mock('../config', () => ({
  default: {
    isBackend: false,
    auth: { email: 'admin@flatlogic.com' }
  }
}))

describe('auth utilities', () => {
  beforeEach(() => {
    localStorage.clear()
    vi.clearAllMocks()
  })

  describe('isValidJwtStructure', () => {
    it('returns true for a valid JWT structure', () => {
      const token = createMockJwt()
      expect(isValidJwtStructure(token)).toBe(true)
    })

    it('returns false for null', () => {
      expect(isValidJwtStructure(null)).toBe(false)
    })

    it('returns false for undefined', () => {
      expect(isValidJwtStructure(undefined)).toBe(false)
    })

    it('returns false for empty string', () => {
      expect(isValidJwtStructure('')).toBe(false)
    })

    it('returns false for non-string values', () => {
      expect(isValidJwtStructure(123)).toBe(false)
      expect(isValidJwtStructure({})).toBe(false)
      expect(isValidJwtStructure([])).toBe(false)
    })

    it('returns false for wrong number of parts', () => {
      expect(isValidJwtStructure('only.two')).toBe(false)
      expect(isValidJwtStructure('one.two.three.four')).toBe(false)
      expect(isValidJwtStructure('noparts')).toBe(false)
    })

    it('returns false for invalid base64 parts', () => {
      const invalidToken = createInvalidJwt('invalid-base64')
      expect(isValidJwtStructure(invalidToken)).toBe(false)
    })
  })

  describe('decodeJwt', () => {
    it('decodes a valid JWT payload', () => {
      const token = createMockJwt({ email: 'test@example.com' })
      const decoded = decodeJwt(token)

      expect(decoded).toBeDefined()
      expect(decoded.email).toBe('test@example.com')
    })

    it('returns null for malformed token', () => {
      expect(decodeJwt(createInvalidJwt('malformed'))).toBe(null)
    })

    it('returns null for null input', () => {
      expect(decodeJwt(null)).toBe(null)
    })

    it('returns null for undefined input', () => {
      expect(decodeJwt(undefined)).toBe(null)
    })

    it('returns null for invalid base64 encoding', () => {
      expect(decodeJwt(createInvalidJwt('invalid-base64'))).toBe(null)
    })

    it('includes exp claim in decoded payload', () => {
      const token = createMockJwt()
      const decoded = decodeJwt(token)

      expect(decoded).toBeDefined()
      expect(typeof decoded.exp).toBe('number')
    })
  })

  describe('isTokenExpired', () => {
    it('returns false for valid non-expired token payload', () => {
      const token = createMockJwt()
      const payload = decodeJwt(token)

      expect(isTokenExpired(payload)).toBe(false)
    })

    it('returns true for expired token payload', () => {
      const token = createExpiredJwt()
      const payload = decodeJwt(token)

      expect(isTokenExpired(payload)).toBe(true)
    })

    it('returns true when payload is null', () => {
      expect(isTokenExpired(null)).toBe(true)
    })

    it('returns true when payload is undefined', () => {
      expect(isTokenExpired(undefined)).toBe(true)
    })

    it('returns true when exp is missing', () => {
      expect(isTokenExpired({})).toBe(true)
      expect(isTokenExpired({ sub: '123' })).toBe(true)
    })

    it('returns true when exp is not a number', () => {
      expect(isTokenExpired({ exp: 'not-a-number' })).toBe(true)
      expect(isTokenExpired({ exp: null })).toBe(true)
    })
  })

  describe('isAuthenticated', () => {
    it('returns true in non-backend mode with any token', async () => {
      // Config is mocked with isBackend: false
      expect(isAuthenticated('any-token')).toBe(true)
    })

    it('returns false in non-backend mode with no token', () => {
      expect(isAuthenticated(null)).toBe(false)
      expect(isAuthenticated('')).toBe(false)
    })

    it('returns true for valid non-expired token in backend mode', async () => {
      // Override config for this test
      const { default: config } = await vi.importActual('../config')
      vi.doMock('../config', () => ({
        default: { ...config, isBackend: true }
      }))

      // Re-import to get fresh module with new mock
      vi.resetModules()
      const { isAuthenticated: isAuthBackend } = await import('./auth')

      const token = createMockJwt()
      expect(isAuthBackend(token)).toBe(true)
    })

    it('returns false for expired token in backend mode', async () => {
      vi.resetModules()
      vi.doMock('../config', () => ({
        default: { isBackend: true }
      }))

      const { isAuthenticated: isAuthBackend } = await import('./auth')
      const token = createExpiredJwt()

      expect(isAuthBackend(token)).toBe(false)
    })
  })

  describe('getCurrentUser', () => {
    it('returns user object from localStorage', () => {
      const user = { email: 'test@example.com', name: 'Test User' }
      localStorage.setItem('user', JSON.stringify(user))

      const result = getCurrentUser()

      expect(result).toEqual(user)
    })

    it('returns null when user key is missing', () => {
      expect(getCurrentUser()).toBe(null)
    })

    it('returns null for invalid JSON', () => {
      localStorage.setItem('user', 'not-valid-json')

      expect(getCurrentUser()).toBe(null)
    })

    it('returns null for empty string', () => {
      localStorage.setItem('user', '')

      expect(getCurrentUser()).toBe(null)
    })
  })

  describe('clearAuthData', () => {
    it('removes token from localStorage', () => {
      localStorage.setItem('token', 'test-token')

      clearAuthData()

      expect(localStorage.getItem('token')).toBe(null)
    })

    it('removes user from localStorage', () => {
      localStorage.setItem('user', JSON.stringify({ email: 'test@test.com' }))

      clearAuthData()

      expect(localStorage.getItem('user')).toBe(null)
    })

    it('clears token cookie', () => {
      document.cookie = 'token=test-token'

      clearAuthData()

      // Cookie should be cleared (empty or expired)
      expect(document.cookie.includes('token=test-token')).toBe(false)
    })

    it('handles case when nothing to clear', () => {
      // Should not throw
      expect(() => clearAuthData()).not.toThrow()
    })
  })

  describe('JWT custom matcher', () => {
    it('validates JWT format with custom matcher', () => {
      const validJwt = createMockJwt()
      expect(validJwt).toBeValidJwt()
    })

    it('fails validation for non-JWT strings', () => {
      expect('not-a-jwt').not.toBeValidJwt()
      expect('').not.toBeValidJwt()
    })
  })
})
