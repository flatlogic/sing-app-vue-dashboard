import { ref, watch } from 'vue'

/**
 * Type-safe localStorage composable with reactive state
 *
 * @param {string} key - localStorage key
 * @param {*} defaultValue - Default value if key doesn't exist
 * @param {Object} options - Options for serialization
 * @returns {Object} - Reactive state and helper functions
 */
export function useLocalStorage(key, defaultValue = null, options = {}) {
  const {
    serializer = JSON,
    onError = console.error
  } = options

  // Initialize with stored value or default
  const storedValue = ref(read())

  /**
   * Read value from localStorage
   */
  function read() {
    try {
      const item = localStorage.getItem(key)
      if (item === null) {
        return defaultValue
      }
      // Handle primitive values stored as strings
      if (typeof defaultValue === 'boolean') {
        return item === 'true'
      }
      if (typeof defaultValue === 'number') {
        return Number(item)
      }
      if (typeof defaultValue === 'string') {
        // Try to parse as JSON first, fallback to raw string
        try {
          return serializer.parse(item)
        } catch {
          return item
        }
      }
      return serializer.parse(item)
    } catch (error) {
      onError(`Error reading localStorage key "${key}":`, error)
      return defaultValue
    }
  }

  /**
   * Write value to localStorage
   */
  function write(value) {
    try {
      if (value === null || value === undefined) {
        localStorage.removeItem(key)
      } else if (typeof value === 'string' || typeof value === 'boolean' || typeof value === 'number') {
        localStorage.setItem(key, String(value))
      } else {
        localStorage.setItem(key, serializer.stringify(value))
      }
    } catch (error) {
      onError(`Error writing localStorage key "${key}":`, error)
    }
  }

  /**
   * Remove value from localStorage
   */
  function remove() {
    try {
      localStorage.removeItem(key)
      storedValue.value = defaultValue
    } catch (error) {
      onError(`Error removing localStorage key "${key}":`, error)
    }
  }

  /**
   * Check if key exists in localStorage
   */
  function exists() {
    return localStorage.getItem(key) !== null
  }

  // Watch for changes and persist to localStorage
  watch(storedValue, (newValue) => {
    write(newValue)
  }, { deep: true })

  return {
    value: storedValue,
    read,
    write,
    remove,
    exists
  }
}

/**
 * Simple getter for localStorage values (non-reactive)
 */
export function getStorageItem(key, defaultValue = null) {
  try {
    const item = localStorage.getItem(key)
    if (item === null) return defaultValue
    try {
      return JSON.parse(item)
    } catch {
      return item
    }
  } catch {
    return defaultValue
  }
}

/**
 * Simple setter for localStorage values
 */
export function setStorageItem(key, value) {
  try {
    if (value === null || value === undefined) {
      localStorage.removeItem(key)
    } else if (typeof value === 'object') {
      localStorage.setItem(key, JSON.stringify(value))
    } else {
      localStorage.setItem(key, String(value))
    }
  } catch (error) {
    console.error(`Error setting localStorage key "${key}":`, error)
  }
}
