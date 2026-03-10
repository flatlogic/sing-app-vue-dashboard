import { ref, computed, onUnmounted } from 'vue'

/**
 * Widget state management composable
 * Handles collapse, fullscreen, and loading states for widget components
 */
export function useWidgetState(options = {}) {
  const {
    initialCollapsed = false,
    autoloadInterval = null,
    onLoad = null
  } = options

  // State
  const state = ref(initialCollapsed ? 'collapse' : 'default')
  const isLoading = ref(false)

  // Interval reference for cleanup
  let intervalId = null

  // Computed states
  const isCollapsed = computed(() => state.value === 'collapse')
  const isFullscreen = computed(() => state.value === 'fullscreen')
  const isDefault = computed(() => state.value === 'default')

  /**
   * Change widget state
   * @param {'default' | 'collapse' | 'fullscreen'} newState
   */
  function changeState(newState) {
    state.value = newState
  }

  /**
   * Toggle collapse state
   */
  function toggleCollapse() {
    state.value = isCollapsed.value ? 'default' : 'collapse'
  }

  /**
   * Toggle fullscreen state
   */
  function toggleFullscreen() {
    state.value = isFullscreen.value ? 'default' : 'fullscreen'
  }

  /**
   * Reset to default state
   */
  function resetState() {
    state.value = 'default'
  }

  /**
   * Trigger load/refresh action
   */
  async function triggerLoad() {
    if (onLoad && typeof onLoad === 'function') {
      isLoading.value = true
      try {
        await onLoad()
      } finally {
        isLoading.value = false
      }
    }
  }

  /**
   * Start autoload interval
   * @param {number} interval - Interval in milliseconds
   */
  function startAutoload(interval) {
    stopAutoload() // Clear any existing interval
    if (interval && interval > 0) {
      intervalId = setInterval(() => {
        triggerLoad()
      }, interval)
    }
  }

  /**
   * Stop autoload interval
   */
  function stopAutoload() {
    if (intervalId) {
      clearInterval(intervalId)
      intervalId = null
    }
  }

  // Initialize autoload if provided
  if (autoloadInterval) {
    startAutoload(autoloadInterval)
  }

  // Cleanup on unmount
  onUnmounted(() => {
    stopAutoload()
  })

  return {
    // State
    state,
    isLoading,

    // Computed
    isCollapsed,
    isFullscreen,
    isDefault,

    // Methods
    changeState,
    toggleCollapse,
    toggleFullscreen,
    resetState,
    triggerLoad,
    startAutoload,
    stopAutoload
  }
}
