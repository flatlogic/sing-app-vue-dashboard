import { ref, readonly } from 'vue'
import axios from 'axios'

/**
 * API request composable for consistent data fetching
 * Provides loading state, error handling, and data management
 */
export function useApiRequest(options = {}) {
  const {
    onSuccess = null,
    onError = null,
    transformResponse = null,
    initialData = null
  } = options

  const data = ref(initialData)
  const error = ref(null)
  const isLoading = ref(false)
  const isSuccess = ref(false)
  const lastFetchedAt = ref(null)

  /**
   * Execute a GET request
   * @param {string} url - API endpoint
   * @param {object} config - Axios config
   */
  async function get(url, config = {}) {
    return executeWithRetry({ method: 'GET', url, ...config })
  }

  /**
   * Execute a POST request
   * @param {string} url - API endpoint
   * @param {object} payload - Request body
   * @param {object} config - Axios config
   */
  async function post(url, payload = {}, config = {}) {
    return executeWithRetry({ method: 'POST', url, data: payload, ...config })
  }

  /**
   * Execute a PUT request
   * @param {string} url - API endpoint
   * @param {object} payload - Request body
   * @param {object} config - Axios config
   */
  async function put(url, payload = {}, config = {}) {
    return executeWithRetry({ method: 'PUT', url, data: payload, ...config })
  }

  /**
   * Execute a DELETE request
   * @param {string} url - API endpoint
   * @param {object} config - Axios config
   */
  async function del(url, config = {}) {
    return executeWithRetry({ method: 'DELETE', url, ...config })
  }

  /**
   * Execute an API request
   * @param {object} config - Axios request config
   */
  async function execute(config) {
    isLoading.value = true
    error.value = null
    isSuccess.value = false

    try {
      const response = await axios(config)

      let responseData = response.data
      if (transformResponse && typeof transformResponse === 'function') {
        responseData = transformResponse(responseData)
      }

      data.value = responseData
      isSuccess.value = true
      lastFetchedAt.value = new Date().toISOString()

      if (onSuccess && typeof onSuccess === 'function') {
        onSuccess(responseData, response)
      }

      return {
        success: true,
        data: responseData,
        response
      }
    } catch (err) {
      const errorMessage = err.response?.data?.message ||
                          err.response?.data?.error ||
                          err.message ||
                          'Request failed'

      error.value = {
        message: errorMessage,
        status: err.response?.status,
        data: err.response?.data,
        originalError: err
      }

      if (onError && typeof onError === 'function') {
        onError(error.value, err)
      }

      return {
        success: false,
        error: error.value
      }
    } finally {
      isLoading.value = false
    }
  }

  /**
   * Reset state to initial values
   */
  function reset() {
    data.value = initialData
    error.value = null
    isLoading.value = false
    isSuccess.value = false
    lastFetchedAt.value = null
  }

  /**
   * Clear error state
   */
  function clearError() {
    error.value = null
  }

  /**
   * Retry last request (if config was stored)
   */
  let lastConfig = null

  async function executeWithRetry(config) {
    lastConfig = config
    return execute(config)
  }

  async function retry() {
    if (lastConfig) {
      return execute(lastConfig)
    }
    return { success: false, error: { message: 'No previous request to retry' } }
  }

  return {
    // State
    data,
    error: readonly(error),
    isLoading: readonly(isLoading),
    isSuccess: readonly(isSuccess),
    lastFetchedAt: readonly(lastFetchedAt),

    // Methods
    get,
    post,
    put,
    delete: del,
    execute: executeWithRetry,
    reset,
    clearError,
    retry
  }
}

/**
 * Create a simple fetch wrapper with loading/error state
 * For use in stores or components that need simpler API access
 */
export function createApiMethod(method, url, options = {}) {
  return async (payload = null, config = {}) => {
    const { useApiRequest: api } = useApiRequest(options)
    if (method.toUpperCase() === 'GET') {
      return api.get(url, config)
    }
    if (method.toUpperCase() === 'POST') {
      return api.post(url, payload, config)
    }
    if (method.toUpperCase() === 'PUT') {
      return api.put(url, payload, config)
    }
    if (method.toUpperCase() === 'DELETE') {
      return api.delete(url, config)
    }
  }
}
