import { defineStore } from 'pinia'
import { ref } from 'vue'
import isScreen from '@/core/screenHelper'
import config from '../config'
import chroma from 'chroma-js'
import { updateRootCss } from '@/composables/useLayoutCss'

export const NavbarTypes = {
  STATIC: "static",
  FLOATING: "floating",
}

export const NavbarColorSchemes = {
  LIGHT: "light",
  DARK: "dark",
}

export const SidebarTypes = {
  SOLID: "solid",
  TRANSPARENT: "transparent",
}

export const LayoutComponents = {
  NAVBAR: "navbar",
  SIDEBAR: "sidebar",
}

export const MessageStates = {
  NEW: "new",
  READ: "read",
}

Object.freeze(NavbarTypes)
Object.freeze(NavbarColorSchemes)
Object.freeze(SidebarTypes)
Object.freeze(LayoutComponents)
Object.freeze(MessageStates)

export function updateTourPosition(tour) {
  if (!tour) return
  let interval = setInterval(() => {
    if (tour.scheduleUpdate) {
      tour.scheduleUpdate()
    }
  })
  setTimeout(() => {
    clearInterval(interval)
  }, config.app.sidebarTransitionTime + 100)
}

export const useLayoutStore = defineStore('layout', () => {
  const sidebarClose = ref(false)
  const sidebarStatic = ref(false)
  const sidebarColorName = ref(config.app.sidebarColors[3][0])
  const navbarColorName = ref(config.app.navbarColors[1][0])
  const navbarColorScheme = ref(NavbarColorSchemes.LIGHT)
  const navbarType = ref(NavbarTypes.STATIC)
  const sidebarType = ref(SidebarTypes.SOLID)
  const sidebarActiveElement = ref(null)
  const helperOpened = ref(false)
  const tourInstance = ref(null)
  const chatOpen = ref(false)
  const chatNotificationMessageState = ref(MessageStates.READ)

  function toggleSidebar() {
    const nextState = !sidebarStatic.value
    localStorage.sidebarStatic = nextState
    sidebarStatic.value = nextState

    if (!nextState && (isScreen('lg') || isScreen('xl'))) {
      sidebarClose.value = true
    }
    updateTourPosition(tourInstance.value)
  }

  function switchSidebar(value) {
    if (value !== undefined) {
      sidebarClose.value = value
    } else {
      sidebarClose.value = !sidebarClose.value
    }
    updateTourPosition(tourInstance.value)
  }

  function handleSwipe(e) {
    if ('ontouchstart' in window) {
      if (e.direction === 4) {
        sidebarClose.value = false
      }

      if (e.direction === 2 && !sidebarClose.value) {
        sidebarClose.value = true
      }
    }
  }

  function changeSidebarActive(index) {
    sidebarActiveElement.value = index
  }

  function updateLayoutComponentType(payload) {
    if (payload.component === 'navbar') {
      navbarType.value = payload.type
    } else if (payload.component === 'sidebar') {
      sidebarType.value = payload.type
    }
  }

  function updateSidebarColor(payload) {
    sidebarColorName.value = payload.color[0]
  }

  function updateNavbarColor(payload) {
    const colorName = payload.color[0]
    const colorValue = payload.color[1]
    navbarColorName.value = colorName
    updateRootCss('--navbar-bg', colorValue)
    navbarColorScheme.value = chroma(colorValue).luminance() < 0.4 ? NavbarColorSchemes.DARK : NavbarColorSchemes.LIGHT
  }

  function updateLayoutComponentColor(payload) {
    if (payload.component === LayoutComponents.SIDEBAR) {
      updateSidebarColor(payload)
    } else {
      updateNavbarColor(payload)
    }
  }

  function toggleHelper(payload) {
    helperOpened.value = payload
    updateTourPosition(tourInstance.value)
  }

  function applyTourStep(payload) {
    tourInstance.value = payload
  }

  function toggleChat(value) {
    chatOpen.value = value !== undefined ? value : !chatOpen.value
  }

  function readMessage() {
    chatNotificationMessageState.value = MessageStates.READ
  }

  function newMessage() {
    chatNotificationMessageState.value = MessageStates.NEW
  }

  return {
    sidebarClose,
    sidebarStatic,
    sidebarColorName,
    navbarColorName,
    navbarColorScheme,
    navbarType,
    sidebarType,
    sidebarActiveElement,
    helperOpened,
    tourInstance,
    chatOpen,
    chatNotificationMessageState,
    toggleSidebar,
    switchSidebar,
    handleSwipe,
    changeSidebarActive,
    updateLayoutComponentType,
    updateLayoutComponentColor,
    updateSidebarColor,
    updateNavbarColor,
    toggleHelper,
    applyTourStep,
    toggleChat,
    readMessage,
    newMessage
  }
})
