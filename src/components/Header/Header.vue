<template>
  <nav
    class="navbar app-header d-print-none"
    :class="[navbarTypeClass, 'header-' + navbarColorScheme]"
  >
    <ul class="nav">
      <li
        id="v-step-0"
        class="nav-item"
      >
        <span class="nav-link">
          <a
            href="#"
            class="d-md-down-none px-1"
            @click.prevent="toggleSidebarMethod"
          >
            <img
              :src="Menu"
              alt="menu"
            >
          </a>
          <a
            href="#"
            class="fs-lg d-md-none"
            @click.prevent="switchSidebarMethod"
          >
            <img
              :src="Menu"
              alt="menu"
            >
          </a>
        </span>
      </li>
      <li class="nav-item d-md-down-none">
        <span class="nav-link">
          <a
            href="#"
            class="px-1"
          >
            <img
              :src="Exchange"
              alt="exchange"
            >
          </a>
        </span>
      </li>
      <li class="nav-item d-md-down-none">
        <span class="nav-link">
          <a
            href="#"
            class="px-2"
          >
            <img
              :src="Cross"
              alt="cross"
            >
          </a>
        </span>
      </li>
    </ul>
    <form class="d-md-down-none ms-5 my-auto d-inline-flex">
      <fieldset class="form-group mb-0">
        <div class="input-group input-group-no-border search-input">
          <div class="input-group-prepend">
            <div class="headerSvgFlipColor">
              <span class="input-group-text">
                <img
                  :src="Search"
                  alt="search"
                >
              </span>
            </div>
          </div>
          <input
            id="search-input"
            type="text"
            class="form-control"
            placeholder="Search Dashboard"
          >
        </div>
      </fieldset>
    </form>
    <a class="navbarBrand d-md-none">
      <i class="fa fa-circle text-primary me-1" />
      <i class="fa fa-circle text-danger" />
      sing
      <i class="fa fa-circle text-danger me-1" />
      <i class="fa fa-circle text-primary" />
    </a>
    <ul class="nav ms-auto">
      <li
        id="v-step-1"
        class="nav-item dropdown notificationsMenu d-md-down-none ms-2"
      >
        <a
          id="notificationsDropdown"
          class="nav-link dropdown-toggle"
          href="#"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <span class="avatar rounded-circle thumb-sm float-start me-2">
            <img
              v-if="user.avatar || user.email === 'admin@flatlogic.com'"
              class="rounded-circle"
              :src="user.avatar || avatarImage"
              :alt="user.name"
            >
            <span v-else>{{ firstUserLetter }}</span>
          </span>
          <span>{{ user.name || user.email || 'Philip smith' }}</span>
          <span
            class="mx-2 circle bg-danger text-white fw-bold"
            style="padding: 13px 13px;"
          >9</span>
          <img
            class="px-2 dropdown-arrow"
            :src="CaretDown"
            alt="caretDown"
          >
        </a>
        <div
          class="dropdown-menu dropdown-menu-end notificationsWrapper py-0 animate__animated animate__animated-fast animate__fadeIn"
          aria-labelledby="notificationsDropdown"
        >
          <Notifications />
        </div>
      </li>
      <li
        id="v-step-2"
        class="nav-item dropdown settingsDropdown d-sm-down-none"
      >
        <a
          id="settingsDropdown"
          class="nav-link dropdown-toggle"
          href="#"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            class="px-2"
            :src="Settings"
            alt="settings"
          >
        </a>
        <ul
          class="dropdown-menu dropdown-menu-end"
          aria-labelledby="settingsDropdown"
        >
          <li>
            <router-link
              class="dropdown-item"
              to="/app/profile"
            >
              <img
                :src="User"
                class="px-2 me-3"
                alt="user"
              >
              My Account
            </router-link>
          </li>
          <li><hr class="dropdown-divider"></li>
          <li>
            <router-link
              class="dropdown-item"
              to="/app/extra/calendar"
            >
              <img
                :src="Document"
                class="px-2 me-2"
                alt="document"
              >
              Calendar
            </router-link>
          </li>
          <li>
            <router-link
              class="dropdown-item"
              to="/app/email"
            >
              <img
                :src="Envelope"
                class="px-2 me-2"
                alt="envelope"
              >
              Inbox &nbsp;&nbsp;
              <span
                class="mx-2 circle bg-dark text-white fw-bold"
                style="padding: 4px 9px"
              >9</span>
            </router-link>
          </li>
          <li><hr class="dropdown-divider"></li>
          <li>
            <button
              class="dropdown-item"
              type="button"
              @click="logoutUser"
            >
              <img
                :src="Cancel"
                class="px-2 me-2"
                alt="cancel"
              >
              Log Out
            </button>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useLayoutStore } from '@/stores/layout'
import { useAuthStore } from '@/stores/auth'
import avatarImage from '@/assets/people/a7.png'
import Menu from '@/assets/sidebar/Fill/Menu.svg?url'
import Exchange from '@/assets/sidebar/Fill/Exchange.svg?url'
import Cross from '@/assets/sidebar/Fill/Cross.svg?url'
import Search from '@/assets/sidebar/Fill/Search.svg?url'
import CaretDown from '@/assets/sidebar/Fill/Caret down.svg?url'
import Settings from '@/assets/sidebar/Outline/Settings-alt.svg?url'
import User from '@/assets/sidebar/Outline/User.svg?url'
import Document from '@/assets/sidebar/Outline/Document.svg?url'
import Envelope from '@/assets/sidebar/Outline/Envelope.svg?url'
import Cancel from '@/assets/sidebar/Outline/Cancel.svg?url'
import Notifications from '@/components/Notifications/Notifications.vue'

const route = useRoute()
const router = useRouter()
const layoutStore = useLayoutStore()
const authStore = useAuthStore()

const user = ref(JSON.parse(localStorage.getItem('user') || '{}'))

const sidebarClose = computed(() => layoutStore.sidebarClose)
const sidebarStatic = computed(() => layoutStore.sidebarStatic)
const navbarType = computed(() => layoutStore.navbarType)
const navbarColorScheme = computed(() => layoutStore.navbarColorScheme)

const firstUserLetter = computed(() => {
  return (user.value.name || user.value.email || "P")[0].toUpperCase()
})

const navbarTypeClass = computed(() => {
  return "navbar-" + navbarType.value + "-type"
})

function switchSidebarMethod() {
  if (!sidebarClose.value) {
    layoutStore.switchSidebar(true)
    layoutStore.changeSidebarActive(null)
  } else {
    layoutStore.switchSidebar(false)
    const paths = route.fullPath.split('/')
    paths.pop()
    layoutStore.changeSidebarActive(paths.join('/'))
  }
}

function toggleSidebarMethod() {
  if (sidebarStatic.value) {
    layoutStore.toggleSidebar()
    layoutStore.changeSidebarActive(null)
  } else {
    layoutStore.toggleSidebar()
    const paths = route.fullPath.split('/')
    paths.pop()
    layoutStore.changeSidebarActive(paths.join('/'))
  }
}

function logoutUser() {
  const result = authStore.logoutUser()
  if (result.redirect) {
    router.push(result.redirect)
  }
}
</script>

<style src="./Header.scss" lang="scss"></style>
