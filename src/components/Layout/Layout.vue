<template>
  <div :class="['root', 'sing-dashboard', { sidebarClose, sidebarStatic }, 'sidebar-' + sidebarColorName, 'sidebar-' + sidebarType, 'navbar-' + navbarColorName]">
    <Sidebar />
    <Helper />
    <div class="wrap">
      <Header />
      <div
        class="content"
        @touchstart="handleTouchStart"
        @touchend="handleTouchEnd"
      >
        <BreadcrumbHistory :exclude="['chat']" />
        <router-view v-slot="{ Component }">
          <Transition
            name="router-animation"
            mode="out-in"
          >
            <component :is="Component" />
          </Transition>
        </router-view>
        <footer class="contentFooter">
          Sing App Vue Admin Dashboard Template - Made by <a
            href="https://flatlogic.com"
            rel="nofollow noopener noreferrer"
            target="_blank"
          >Flatlogic</a>
        </footer>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useLayoutStore } from '@/stores/layout'
import { useTour } from '@/composables/useTour'
import Sidebar from '@/components/Sidebar/Sidebar.vue'
import Header from '@/components/Header/Header.vue'
import Helper from '@/components/Helper/Helper.vue'
import BreadcrumbHistory from '@/components/BreadcrumbHistory/BreadcrumbHistory.vue'

const layoutStore = useLayoutStore()
const { startTour, shouldShowTour } = useTour(layoutStore)

const touchStartX = ref(0)
const touchEndX = ref(0)

const sidebarClose = computed(() => layoutStore.sidebarClose)
const sidebarStatic = computed(() => layoutStore.sidebarStatic)
const sidebarColorName = computed(() => layoutStore.sidebarColorName)
const navbarColorName = computed(() => layoutStore.navbarColorName)
const sidebarType = computed(() => layoutStore.sidebarType)

function handleWindowResize() {
  const width = window.innerWidth

  if (width <= 768 && sidebarStatic.value) {
    layoutStore.toggleSidebar()
    layoutStore.changeSidebarActive(null)
  }
}

function handleTouchStart(e) {
  touchStartX.value = e.changedTouches[0].screenX
}

function handleTouchEnd(e) {
  touchEndX.value = e.changedTouches[0].screenX
  handleSwipe()
}

function handleSwipe() {
  const diff = touchEndX.value - touchStartX.value
  const threshold = 50

  if ('ontouchstart' in window) {
    // Swipe right (open sidebar)
    if (diff > threshold) {
      layoutStore.switchSidebar(false)
    }
    // Swipe left (close sidebar)
    if (diff < -threshold && !sidebarClose.value) {
      layoutStore.switchSidebar(true)
    }
  }
}

onMounted(() => {
  const staticSidebar = JSON.parse(localStorage.getItem('sidebarStatic'))

  if (staticSidebar) {
    layoutStore.sidebarStatic = true
  } else if (!sidebarClose.value) {
    setTimeout(() => {
      layoutStore.switchSidebar(true)
      layoutStore.changeSidebarActive(null)
    }, 2500)
  }

  handleWindowResize()
  window.addEventListener('resize', handleWindowResize)

  // Start onboarding tour if not completed
  if (shouldShowTour()) {
    setTimeout(() => {
      startTour()
    }, 3000)
  }
})

onUnmounted(() => {
  window.removeEventListener('resize', handleWindowResize)
})
</script>

<style src="./Layout.scss" lang="scss" />
