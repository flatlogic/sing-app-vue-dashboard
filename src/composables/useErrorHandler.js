import { ref, readonly } from 'vue'

/**
 * Error handling composable for consistent error management
 * Provides error state, error handling, and error display utilities
 */
export function useErrorHandler(options = {}) {
  const {
    onError = null,
    clearAfter = 0 // Auto-clear after ms (0 = disabled)
  } = options

  const error = ref(null)
  const errorHistory = ref([])
  let clearTimeoutId = null

  /**
   * Set an error with optional auto-clear
   * @param {string|Error|object} err - Error to set
   * @param {object} context - Additional context
   */
  function setError(err, context = {}) {
    const errorObj = normalizeError(err, context)
    error.value = errorObj

    // Add to history
    errorHistory.value.push({
      ...errorObj,
      timestamp: new Date().toISOString()
    })

    // Keep history limited
    if (errorHistory.value.length > 10) {
      errorHistory.value.shift()
    }

    // Call error handler if provided
    if (onError && typeof onError === 'function') {
      onError(errorObj)
    }

    // Auto-clear if configured
    if (clearAfter > 0) {
      scheduleClear(clearAfter)
    }

    return errorObj
  }

  /**
   * Clear current error
   */
  function clearError() {
    error.value = null
    if (clearTimeoutId) {
      clearTimeout(clearTimeoutId)
      clearTimeoutId = null
    }
  }

  /**
   * Clear error history
   */
  function clearHistory() {
    errorHistory.value = []
  }

  /**
   * Schedule error clear after delay
   * @param {number} delay - Delay in milliseconds
   */
  function scheduleClear(delay) {
    if (clearTimeoutId) {
      clearTimeout(clearTimeoutId)
    }
    clearTimeoutId = setTimeout(() => {
      clearError()
    }, delay)
  }

  /**
   * Normalize error to consistent format
   * @param {string|Error|object} err
   * @param {object} context
   */
  function normalizeError(err, context = {}) {
    if (typeof err === 'string') {
      return {
        message: err,
        code: context.code || 'ERROR',
        ...context
      }
    }

    if (err instanceof Error) {
      return {
        message: err.message,
        code: err.name || 'ERROR',
        stack: err.stack,
        ...context
      }
    }

    if (typeof err === 'object' && err !== null) {
      return {
        message: err.message || err.error || 'An error occurred',
        code: err.code || err.status || 'ERROR',
        ...err,
        ...context
      }
    }

    return {
      message: 'An unknown error occurred',
      code: 'UNKNOWN_ERROR',
      ...context
    }
  }

  /**
   * Handle async operation with error catching
   * @param {Function} asyncFn - Async function to execute
   * @param {object} context - Error context
   */
  async function handleAsync(asyncFn, context = {}) {
    clearError()
    try {
      return await asyncFn()
    } catch (err) {
      setError(err, context)
      return null
    }
  }

  /**
   * Check if there's an active error
   */
  function hasError() {
    return error.value !== null
  }

  return {
    error: readonly(error),
    errorHistory: readonly(errorHistory),
    setError,
    clearError,
    clearHistory,
    scheduleClear,
    handleAsync,
    hasError
  }
}
