import { vi } from 'vitest'

/**
 * Create a mock axios instance with controllable responses
 * @returns {object} Mock axios with helper methods
 */
export function mockAxios() {
  const mockInstance = {
    get: vi.fn(),
    post: vi.fn(),
    put: vi.fn(),
    delete: vi.fn(),
    patch: vi.fn(),
    request: vi.fn(),
    defaults: {
      headers: {
        common: {}
      }
    },
    interceptors: {
      request: {
        use: vi.fn(),
        eject: vi.fn()
      },
      response: {
        use: vi.fn(),
        eject: vi.fn()
      }
    }
  }

  // Make the mock callable like axios(config)
  const axiosMock = vi.fn((config) => {
    const method = (config.method || 'get').toLowerCase()
    return mockInstance[method](config.url, config.data, config)
  })

  // Attach instance methods
  Object.assign(axiosMock, mockInstance)

  return axiosMock
}

/**
 * Create a successful response mock
 * @param {*} data - Response data
 * @param {object} options - Additional response options
 * @returns {Promise} Resolved promise with response object
 */
export function mockSuccess(data, options = {}) {
  const { status = 200, headers = {} } = options
  return Promise.resolve({
    data,
    status,
    statusText: 'OK',
    headers,
    config: {}
  })
}

/**
 * Create an error response mock
 * @param {string} message - Error message
 * @param {object} options - Additional error options
 * @returns {Promise} Rejected promise with error object
 */
export function mockError(message, options = {}) {
  const { status = 500, data = null, code = 'ERR_REQUEST' } = options
  const error = new Error(message)
  error.response = {
    data: data || { message, error: message },
    status,
    statusText: status >= 500 ? 'Internal Server Error' : 'Bad Request',
    headers: {}
  }
  error.code = code
  error.config = {}
  error.isAxiosError = true
  return Promise.reject(error)
}

/**
 * Create a network error mock (no response)
 * @param {string} message - Error message
 * @returns {Promise} Rejected promise with network error
 */
export function mockNetworkError(message = 'Network Error') {
  const error = new Error(message)
  error.code = 'ERR_NETWORK'
  error.config = {}
  error.isAxiosError = true
  // No response property for network errors
  return Promise.reject(error)
}

/**
 * Setup axios mock for a specific method to return success
 * @param {object} axiosMock - Mock axios instance
 * @param {string} method - HTTP method (get, post, etc.)
 * @param {*} data - Response data
 * @param {object} options - Response options
 */
export function setupMockSuccess(axiosMock, method, data, options = {}) {
  axiosMock[method].mockReturnValue(mockSuccess(data, options))
}

/**
 * Setup axios mock for a specific method to return error
 * @param {object} axiosMock - Mock axios instance
 * @param {string} method - HTTP method
 * @param {string} message - Error message
 * @param {object} options - Error options
 */
export function setupMockError(axiosMock, method, message, options = {}) {
  axiosMock[method].mockReturnValue(mockError(message, options))
}

/**
 * Reset all axios mock calls
 * @param {object} axiosMock - Mock axios instance
 */
export function resetAxiosMock(axiosMock) {
  axiosMock.get.mockReset()
  axiosMock.post.mockReset()
  axiosMock.put.mockReset()
  axiosMock.delete.mockReset()
  axiosMock.patch.mockReset()
  axiosMock.request.mockReset()
  axiosMock.mockReset?.()
}
