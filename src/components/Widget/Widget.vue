<template>
  <section
    ref="widgetRef"
    :class="{
      widget: true,
      [className]: !!className,
      collapsed: state === 'collapse',
      fullscreened: state === 'fullscreen',
      loading: fetchingData
    }"
  >
    <h5
      v-if="title && typeof title === 'string' && !customHeader"
      class="title"
    >
      {{ title }}
    </h5>
    <header
      v-if="title && customHeader"
      class="title"
      v-html="title"
    />
    <div
      v-if="!customControls && mainControls"
      class="widgetControls widget-controls"
    >
      <button
        v-if="settings"
        type="button"
        class="btn-widget-control"
        aria-label="Settings"
      >
        <i
          class="la la-cog"
          aria-hidden="true"
        />
      </button>
      <button
        v-if="settingsInverse"
        type="button"
        class="btn-widget-control bg-gray-transparent inverse"
        aria-label="Settings"
      >
        <i
          class="la la-cog text-white"
          aria-hidden="true"
        />
      </button>
      <button
        v-if="refresh"
        type="button"
        class="btn-widget-control"
        :data-bs-toggle="showTooltip ? 'tooltip' : null"
        :data-bs-placement="tooltipPlacement"
        :title="showTooltip ? 'Reload' : null"
        aria-label="Reload widget"
        @click="loadWidgster"
      >
        <strong
          v-if="typeof refresh === 'string'"
          class="text-gray-light"
        >{{ refresh }}</strong>
        <i
          v-else
          class="la la-refresh"
          aria-hidden="true"
        />
      </button>
      <button
        v-if="fullscreen && state !== 'fullscreen'"
        type="button"
        class="btn-widget-control"
        :data-bs-toggle="showTooltip ? 'tooltip' : null"
        :data-bs-placement="tooltipPlacement"
        :title="showTooltip ? 'Fullscreen' : null"
        aria-label="Enter fullscreen"
        @click="changeState('fullscreen')"
      >
        <i
          class="glyphicon glyphicon-resize-full"
          aria-hidden="true"
        />
      </button>
      <button
        v-if="fullscreen && state === 'fullscreen'"
        type="button"
        class="btn-widget-control"
        :data-bs-toggle="showTooltip ? 'tooltip' : null"
        :data-bs-placement="tooltipPlacement"
        :title="showTooltip ? 'Restore' : null"
        aria-label="Exit fullscreen"
        @click="changeState('default')"
      >
        <i
          class="glyphicon glyphicon-resize-small"
          aria-hidden="true"
        />
      </button>
      <button
        v-if="collapse && state !== 'collapse'"
        type="button"
        class="btn-widget-control"
        :data-bs-toggle="showTooltip ? 'tooltip' : null"
        :data-bs-placement="tooltipPlacement"
        :title="showTooltip ? 'Collapse' : null"
        aria-label="Collapse widget"
        :aria-expanded="true"
        @click="changeState('collapse')"
      >
        <i
          class="la la-angle-down"
          aria-hidden="true"
        />
      </button>
      <button
        v-if="collapse && state === 'collapse'"
        type="button"
        class="btn-widget-control"
        :data-bs-toggle="showTooltip ? 'tooltip' : null"
        :data-bs-placement="tooltipPlacement"
        :title="showTooltip ? 'Expand' : null"
        aria-label="Expand widget"
        :aria-expanded="false"
        @click="changeState('default')"
      >
        <i
          class="la la-angle-up"
          aria-hidden="true"
        />
      </button>
      <button
        v-if="close"
        type="button"
        class="btn-widget-control"
        :data-bs-toggle="showTooltip ? 'tooltip' : null"
        :data-bs-placement="tooltipPlacement"
        :title="showTooltip ? 'Close' : null"
        aria-label="Close widget"
        @click="closeWidget"
      >
        <strong
          v-if="typeof close === 'string'"
          class="text-gray-light"
        >{{ close }}</strong>
        <i
          v-else
          class="la la-remove"
          aria-hidden="true"
        />
      </button>
    </div>
    <div
      v-if="customControls"
      ref="customControlsRef"
      class="widgetControls widget-controls"
      v-html="customControls"
    />
    <div
      ref="widgetBodyRef"
      :class="`widgetBody widget-body ${bodyClass}`"
      :style="{ display: state === 'collapse' ? 'none' : '' }"
    >
      <Loader
        v-if="fetchingData && showLoader"
        class="widget-loader"
        :size="40"
      />
      <slot v-else />
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import Loader from '../Loader/Loader.vue'

const props = defineProps({
  customHeader: { type: Boolean, default: false },
  tooltipPlacement: { type: String, default: 'top' },
  showTooltip: { type: Boolean, default: false },
  close: { type: [Boolean, String], default: false },
  fullscreen: { type: [Boolean, String], default: false },
  collapse: { type: [Boolean, String], default: false },
  settings: { type: [Boolean, String], default: false },
  settingsInverse: { type: Boolean, default: false },
  refresh: { type: [Boolean, String], default: false },
  className: { type: String, default: '' },
  title: { type: String, default: '' },
  customControls: { type: String, default: null },
  bodyClass: { type: String, default: '' },
  options: { type: Object, default: () => ({}) },
  fetchingData: { type: Boolean, default: false },
  showLoader: { type: Boolean, default: true },
  collapsed: { type: Boolean, default: false },
  autoload: { type: [Boolean, Number], default: false }
})

const emit = defineEmits(['load', 'close'])

const state = ref(props.collapsed ? 'collapse' : 'default')
const widgetRef = ref(null)
const customControlsRef = ref(null)
const widgetBodyRef = ref(null)

// Store interval ID for cleanup
let autoloadIntervalId = null

// Store event listeners for cleanup
const eventListeners = []

const mainControls = computed(() => {
  return !!(props.close || props.fullscreen || props.collapse ||
    props.refresh || props.settings || props.settingsInverse)
})

function closeWidget() {
  const $parentEl = widgetRef.value?.parentElement
  if (!$parentEl) return

  const length = $parentEl.classList.length
  let parentToRemove = false
  for (let i = 0; i < length; i++) {
    if (/col.*/.test($parentEl.classList[i])) {
      parentToRemove = true
      break
    }
  }

  const removeFunction = () => {
    if (parentToRemove) {
      $parentEl.remove()
    } else {
      widgetRef.value?.remove()
    }
  }

  // Check if there's a close handler
  emit('close', removeFunction)
}

function changeState(newState) {
  state.value = newState
}

function loadWidgster() {
  emit('load')
}

function addEventListenerWithCleanup(element, event, handler) {
  element.addEventListener(event, handler)
  eventListeners.push({ element, event, handler })
}

onMounted(() => {
  // Initialize Bootstrap tooltips if available
  if (typeof window !== 'undefined' && window.bootstrap?.Tooltip) {
    const tooltipTriggerList = widgetRef.value?.querySelectorAll('[data-bs-toggle="tooltip"]')
    if (tooltipTriggerList) {
      tooltipTriggerList.forEach(tooltipTriggerEl => {
        new window.bootstrap.Tooltip(tooltipTriggerEl)
      })
    }
  }

  if (props.autoload) {
    loadWidgster()
    if (typeof props.autoload === 'number') {
      autoloadIntervalId = setInterval(() => { loadWidgster() }, props.autoload)
    }
  }

  if (props.customControls && customControlsRef.value) {
    const closeEl = customControlsRef.value.querySelector('[control=close]')
    if (closeEl) addEventListenerWithCleanup(closeEl, 'click', closeWidget)

    const collapseEl = customControlsRef.value.querySelector('[control=collapse]')
    if (collapseEl) addEventListenerWithCleanup(collapseEl, 'click', () => changeState('collapse'))

    const expandEl = customControlsRef.value.querySelector('[control=expand]')
    if (expandEl) addEventListenerWithCleanup(expandEl, 'click', () => changeState('default'))

    const fullscreenEl = customControlsRef.value.querySelector('[control=fullscreen]')
    if (fullscreenEl) addEventListenerWithCleanup(fullscreenEl, 'click', () => changeState('fullscreen'))

    const restoreEl = customControlsRef.value.querySelector('[control=restore]')
    if (restoreEl) addEventListenerWithCleanup(restoreEl, 'click', () => changeState('default'))

    const loadEl = customControlsRef.value.querySelector('[control=load]')
    if (loadEl) addEventListenerWithCleanup(loadEl, 'click', loadWidgster)
  }
})

onUnmounted(() => {
  // Clean up autoload interval
  if (autoloadIntervalId) {
    clearInterval(autoloadIntervalId)
    autoloadIntervalId = null
  }

  // Clean up event listeners
  eventListeners.forEach(({ element, event, handler }) => {
    element.removeEventListener(event, handler)
  })
  eventListeners.length = 0

  // Clean up Bootstrap tooltips
  if (typeof window !== 'undefined' && window.bootstrap?.Tooltip && widgetRef.value) {
    const tooltipTriggerList = widgetRef.value.querySelectorAll('[data-bs-toggle="tooltip"]')
    tooltipTriggerList?.forEach(tooltipTriggerEl => {
      const tooltip = window.bootstrap.Tooltip.getInstance(tooltipTriggerEl)
      tooltip?.dispose()
    })
  }
})
</script>

<style src="./Widget.scss" lang="scss" />
