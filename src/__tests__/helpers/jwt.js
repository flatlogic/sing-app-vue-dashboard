/**
 * Create a mock JWT token with custom payload
 * @param {object} payload - JWT payload data
 * @param {object} options - Token options
 * @returns {string} Mock JWT token
 */
export function createMockJwt(payload = {}, options = {}) {
  const { expiresIn = 3600 } = options // Default 1 hour

  const now = Math.floor(Date.now() / 1000)

  const defaultPayload = {
    sub: '12345',
    email: 'test@example.com',
    iat: now,
    exp: now + expiresIn,
    user: {
      id: '12345',
      email: 'test@example.com',
      name: 'Test User'
    },
    ...payload
  }

  const header = { alg: 'HS256', typ: 'JWT' }

  // Create base64url encoded parts
  const encodedHeader = base64UrlEncode(JSON.stringify(header))
  const encodedPayload = base64UrlEncode(JSON.stringify(defaultPayload))

  // Mock signature (not cryptographically valid, but structurally correct)
  const mockSignature = base64UrlEncode('mock-signature-for-testing')

  return `${encodedHeader}.${encodedPayload}.${mockSignature}`
}

/**
 * Create an expired JWT token
 * @param {object} payload - Additional payload data
 * @returns {string} Expired JWT token
 */
export function createExpiredJwt(payload = {}) {
  const pastTime = Math.floor(Date.now() / 1000) - 3600 // 1 hour ago

  return createMockJwt({
    ...payload,
    iat: pastTime - 3600,
    exp: pastTime
  }, { expiresIn: -3600 })
}

/**
 * Create an invalid JWT token (malformed)
 * @param {string} type - Type of invalid token
 * @returns {string} Invalid JWT token
 */
export function createInvalidJwt(type = 'malformed') {
  switch (type) {
    case 'malformed':
      return 'not-a-valid-jwt'
    case 'missing-parts':
      return 'header.payload'
    case 'invalid-base64':
      return 'invalid!!!.base64!!!.content!!!'
    case 'invalid-json':
      return `${base64UrlEncode('not-json')}.${base64UrlEncode('not-json')}.signature`
    case 'empty':
      return ''
    default:
      return 'invalid'
  }
}

/**
 * Create a JWT token with specific user data
 * @param {object} user - User data to include
 * @param {object} options - Token options
 * @returns {string} JWT token with user data
 */
export function createUserJwt(user, options = {}) {
  return createMockJwt({
    sub: user.id || '12345',
    email: user.email || 'user@example.com',
    user: {
      id: user.id || '12345',
      email: user.email || 'user@example.com',
      name: user.name || 'Test User',
      ...user
    }
  }, options)
}

/**
 * Decode a JWT token payload (for test verification)
 * @param {string} token - JWT token
 * @returns {object|null} Decoded payload or null
 */
export function decodeTestJwt(token) {
  try {
    if (!token || typeof token !== 'string') return null
    const parts = token.split('.')
    if (parts.length !== 3) return null

    const payload = parts[1]
    const decoded = JSON.parse(base64UrlDecode(payload))
    return decoded
  } catch {
    return null
  }
}

/**
 * Check if a JWT token is expired
 * @param {string} token - JWT token
 * @returns {boolean} True if expired
 */
export function isTestJwtExpired(token) {
  const payload = decodeTestJwt(token)
  if (!payload || typeof payload.exp !== 'number') return true
  return Math.floor(Date.now() / 1000) >= payload.exp
}

// Helper functions for base64url encoding/decoding
function base64UrlEncode(str) {
  const base64 = btoa(unescape(encodeURIComponent(str)))
  return base64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')
}

function base64UrlDecode(str) {
  let base64 = str.replace(/-/g, '+').replace(/_/g, '/')
  const pad = base64.length % 4
  if (pad) {
    base64 += '='.repeat(4 - pad)
  }
  return decodeURIComponent(escape(atob(base64)))
}
