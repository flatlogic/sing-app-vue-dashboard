<template>
  <div :class="{ 'theme-helper': true, 'theme-helper-opened': helperOpened }">
    <div
      id="v-step-3"
      class="theme-helper-toggler"
      @click="toggleHelper(!helperOpened)"
    >
      <div class="theme-helper-spinner bg-primary text-white">
        <i class="la la-cog" />
        <i class="la la-cog fs-smaller" />
      </div>
    </div>
    <section class="widget theme-helper-content">
      <div class="widget-body mt-3">
        <div class="theme-settings">
          <h5
            id="v-step-4"
            style="position: static"
          >
            Navbar Type
          </h5>
          <div class="row mb-4">
            <div class="abc-radio col-auto">
              <input
                id="navbar_static"
                type="radio"
                name="navbar-type"
                :value="navbarTypes.STATIC"
                :checked="navbarType === navbarTypes.STATIC"
                @change="updateLayoutComponentType({ component: layoutComponents.NAVBAR, type: navbarTypes.STATIC })"
              >
              <label for="navbar_static">Static</label>
            </div>
            <div class="abc-radio col-auto">
              <input
                id="navbar_floating"
                type="radio"
                name="navbar-type"
                :value="navbarTypes.FLOATING"
                :checked="navbarType === navbarTypes.FLOATING"
                @change="updateLayoutComponentType({ component: layoutComponents.NAVBAR, type: navbarTypes.FLOATING })"
              >
              <label for="navbar_floating">Floating</label>
            </div>
          </div>

          <h5 id="v-step-5">
            Navbar Color
          </h5>
          <Colorpicker
            :colors="appConfig.navbarColors"
            :active-color="navbarColorName"
            @change="updateLayoutComponentColor({ component: layoutComponents.NAVBAR, color: $event })"
          />

          <h5 id="v-step-6">
            Sidebar Type
          </h5>
          <div class="row mb-4">
            <div class="abc-radio col-auto">
              <input
                id="sidebar_transparent"
                type="radio"
                name="sidebar-type"
                :value="sidebarTypes.TRANSPARENT"
                :checked="sidebarType === sidebarTypes.TRANSPARENT"
                @change="updateLayoutComponentType({ component: layoutComponents.SIDEBAR, type: sidebarTypes.TRANSPARENT })"
              >
              <label for="sidebar_transparent">Transparent</label>
            </div>
            <div class="abc-radio col-auto">
              <input
                id="sidebar_solid"
                type="radio"
                name="sidebar-type"
                :value="sidebarTypes.SOLID"
                :checked="sidebarType === sidebarTypes.SOLID"
                @change="updateLayoutComponentType({ component: layoutComponents.SIDEBAR, type: sidebarTypes.SOLID })"
              >
              <label for="sidebar_solid">Solid</label>
            </div>
          </div>

          <h5 id="v-step-7">
            Sidebar Color
          </h5>
          <Colorpicker
            :colors="appConfig.sidebarColors"
            :active-color="sidebarColorName"
            @change="updateLayoutComponentColor({ component: layoutComponents.SIDEBAR, color: $event })"
          />
        </div>
        <div class="m-4 d-grid">
          <a
            id="v-step-8"
            href="https://flatlogic.com/templates/sing-app-vue"
            target="_blank"
            role="button"
            class="btn btn-info btn-rounded-f fs-mini text-white"
          >
            Purchase
          </a>
          <a
            href="http://demo.flatlogic.com/sing-app-vue/#/documentation/"
            target="_blank"
            role="button"
            class="btn btn-primary btn-rounded-f fs-mini mt-2"
          >
            Documentation
          </a>
        </div>
        <div class="d-flex justify-content-between mt-1">
          <a
            role="button"
            target="_blank"
            href="https://flatlogic.com/forum"
            class="btn btn-outline-default btn-rounded-f fs-mini text-muted d-flex align-items-center"
          >
            <i class="glyphicon glyphicon-headphones mb-1 me-1" />
            Support
          </a>
          <a
            role="button"
            target="_blank"
            href="https://github.com/flatlogic/sing-app-vue-dashboard"
            class="btn btn-outline-default btn-rounded-f fs-mini text-muted d-flex align-items-center"
          >
            <i class="fa fa-github me-1" />
            Github
          </a>
        </div>
        <div class="mt-1 d-flex flex-column align-items-center theme-sharing">
          <span class="fs-sm">
            Thank you for sharing!
          </span>
          <div class="d-flex justify-content-center text-light mt-2">
            <a
              target="_blank"
              href="https://twitter.com/intent/tweet?text=Admin%20dashboard%20template%20built%20with%20NodeJS,%20React%20and%20Bootstrap%204!&url=https://demo.flatlogic.com/sing-app/html-bs4/&via=flatlogic"
            >
              <i class="fa fa-twitter pe-1" />
            </a>
            <a
              href="https://www.facebook.com/sharer/sharer.php?u=https://demo.flatlogic.com/sing-app/html-bs4/"
              target="_blank"
            >
              <i class="fa fa-facebook ps-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useLayoutStore, NavbarTypes, SidebarTypes, LayoutComponents } from '@/stores/layout'
import Colorpicker from '../Colorpicker/Colorpicker.vue'
import config from '@/config'

const layoutStore = useLayoutStore()
const appConfig = config.app

const navbarTypes = NavbarTypes
const sidebarTypes = SidebarTypes
const layoutComponents = LayoutComponents

const navbarColorName = computed(() => layoutStore.navbarColorName)
const sidebarColorName = computed(() => layoutStore.sidebarColorName)
const navbarType = computed(() => layoutStore.navbarType)
const sidebarType = computed(() => layoutStore.sidebarType)
const helperOpened = computed(() => layoutStore.helperOpened)

function updateLayoutComponentType(payload) {
  layoutStore.updateLayoutComponentType(payload)
}

function updateLayoutComponentColor(payload) {
  layoutStore.updateLayoutComponentColor(payload)
}

function toggleHelper(value) {
  layoutStore.toggleHelper(value)
}
</script>

<style src="./Helper.scss" lang="scss"></style>
