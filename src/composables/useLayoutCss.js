import { ref, onMounted } from 'vue'

/**
 * Composable for managing CSS custom properties on layout elements
 * Encapsulates DOM manipulation for theme/layout styling
 */
export function useLayoutCss() {
  const rootElement = ref(null)

  /**
   * Updates a CSS custom property on the root layout element
   * @param {string} cssVar - CSS variable name (e.g., '--navbar-bg')
   * @param {string} value - CSS value to set
   */
  function updateCssVariable(cssVar, value) {
    const root = rootElement.value || document.querySelector('.root.sing-dashboard')
    if (root) {
      root.style.setProperty(cssVar, value)
    }
  }

  /**
   * Gets the current value of a CSS custom property
   * @param {string} cssVar - CSS variable name
   * @returns {string} - Current value or empty string
   */
  function getCssVariable(cssVar) {
    const root = rootElement.value || document.querySelector('.root.sing-dashboard')
    if (root) {
      return getComputedStyle(root).getPropertyValue(cssVar).trim()
    }
    return ''
  }

  /**
   * Removes a CSS custom property from the root element
   * @param {string} cssVar - CSS variable name to remove
   */
  function removeCssVariable(cssVar) {
    const root = rootElement.value || document.querySelector('.root.sing-dashboard')
    if (root) {
      root.style.removeProperty(cssVar)
    }
  }

  /**
   * Sets multiple CSS custom properties at once
   * @param {Object} variables - Object with cssVar: value pairs
   */
  function updateCssVariables(variables) {
    const root = rootElement.value || document.querySelector('.root.sing-dashboard')
    if (root) {
      Object.entries(variables).forEach(([cssVar, value]) => {
        root.style.setProperty(cssVar, value)
      })
    }
  }

  /**
   * Initialize the root element reference
   */
  function initRootElement() {
    rootElement.value = document.querySelector('.root.sing-dashboard')
  }

  onMounted(() => {
    initRootElement()
  })

  return {
    rootElement,
    updateCssVariable,
    getCssVariable,
    removeCssVariable,
    updateCssVariables,
    initRootElement
  }
}

/**
 * Standalone function for updating CSS variables (for use outside components)
 * Can be used in stores where composables can't be used directly
 */
export function updateRootCss(cssVar, value) {
  const root = document.querySelector('.root.sing-dashboard')
  if (root) {
    root.style.setProperty(cssVar, value)
  }
}
