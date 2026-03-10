import config from "../config";

/**
 * JWT Token Utilities
 *
 * Note: Client-side JWT handling cannot verify signatures (requires server secret).
 * These utilities provide structure validation and expiration checking.
 * For production, always verify tokens server-side.
 */

/**
 * Validates JWT structure (header.payload.signature format)
 * @param {string} token - JWT token string
 * @returns {boolean} - Whether token has valid structure
 */
export function isValidJwtStructure(token) {
  if (!token || typeof token !== 'string') return false
  const parts = token.split('.')
  if (parts.length !== 3) return false
  // Check each part is valid base64url
  return parts.every(part => {
    try {
      const base64 = part.replace(/-/g, '+').replace(/_/g, '/')
      atob(base64)
      return true
    } catch {
      return false
    }
  })
}

/**
 * Decodes JWT payload without verification
 * @param {string} token - JWT token string
 * @returns {object|null} - Decoded payload or null if invalid
 */
export function decodeJwt(token) {
  if (!isValidJwtStructure(token)) return null

  try {
    const base64Url = token.split('.')[1]
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
        .join('')
    )
    const payload = JSON.parse(jsonPayload)

    // Basic payload validation
    if (typeof payload !== 'object' || payload === null) return null

    return payload
  } catch {
    return null
  }
}

/**
 * Checks if JWT token is expired
 * @param {object} payload - Decoded JWT payload
 * @returns {boolean} - Whether token is expired
 */
export function isTokenExpired(payload) {
  if (!payload || typeof payload.exp !== 'number') return true
  const now = Math.floor(Date.now() / 1000)
  return now >= payload.exp
}

/**
 * Checks if user is authenticated based on token
 * @param {string} token - JWT token string
 * @returns {boolean} - Whether user is authenticated
 */
export function isAuthenticated(token) {
  // In non-backend mode, any token is valid (demo mode)
  if (!config.isBackend && token) return true

  if (!token) return false

  const payload = decodeJwt(token)
  if (!payload) return false

  return !isTokenExpired(payload)
}

/**
 * Gets user info from stored token
 * @returns {object|null} - User object or null
 */
export function getCurrentUser() {
  try {
    const userStr = localStorage.getItem('user')
    return userStr ? JSON.parse(userStr) : null
  } catch {
    return null
  }
}

/**
 * Clears authentication data from storage
 */
export function clearAuthData() {
  localStorage.removeItem('token')
  localStorage.removeItem('user')
  document.cookie = 'token=;expires=Thu, 01 Jan 1970 00:00:01 GMT;'
}

