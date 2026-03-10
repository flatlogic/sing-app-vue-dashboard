<template>
  <div
    id="app-root"
    ref="appRoot"
  >
    <router-view />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import { Tooltip } from 'bootstrap'

const router = useRouter()
const appRoot = ref(null)
let observer = null

function initTooltips(container = document) {
  container.querySelectorAll('[data-bs-toggle="tooltip"]')
    .forEach(el => {
      // Skip if already initialized
      if (Tooltip.getInstance(el)) return
      new Tooltip(el)
    })
}

onMounted(() => {
  initTooltips()

  // Watch for dynamically added tooltip elements
  // Scoped to app root instead of entire document.body for better performance
  if (appRoot.value) {
    observer = new MutationObserver((mutations) => {
      let hasNewTooltips = false
      for (const mutation of mutations) {
        if (mutation.type === 'childList' && mutation.addedNodes.length) {
          for (const node of mutation.addedNodes) {
            if (node.nodeType === 1) {
              if (node.matches?.('[data-bs-toggle="tooltip"]') ||
                  node.querySelector?.('[data-bs-toggle="tooltip"]')) {
                hasNewTooltips = true
                break
              }
            }
          }
        }
        if (hasNewTooltips) break
      }
      if (hasNewTooltips) {
        initTooltips(appRoot.value)
      }
    })

    observer.observe(appRoot.value, {
      childList: true,
      subtree: true
    })
  }
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
    observer = null
  }
})

// Reinitialize tooltips after route changes
router.afterEach(() => {
  nextTick(() => {
    if (appRoot.value) {
      initTooltips(appRoot.value)
    }
  })
})
</script>

<style src="./styles/theme.scss" lang="scss" />
