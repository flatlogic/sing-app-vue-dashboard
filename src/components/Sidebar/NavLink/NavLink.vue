<template>
  <li
    v-if="!childrenLinks && isHeader"
    :class="['headerLink', className]"
  >
    <div>
      <router-link
        :to="link"
        class="sidebar-link"
      >
        <span class="icon">
          <component
            :is="IconComponent"
            v-if="IconComponent"
            class="nav-icon"
          />
          <i
            v-else
            :class="fullIconName"
          />
        </span>
        {{ header }} <sup
          v-if="label"
          :class="'text-' + labelColor"
          class="headerLabel"
        >{{ label }}</sup>
        <span
          v-if="badge"
          class="badge rounded-pill bg-danger"
        >{{ badge }}</span>
      </router-link>
    </div>
  </li>
  <li
    v-else-if="childrenLinks"
    :class="['headerLink', className]"
  >
    <div @click="togglePanelCollapse(link)">
      <a
        href="#"
        :class="['d-flex', 'sidebar-link', { 'router-link-active': isParentActive }]"
        @click.prevent
      >
        <span class="icon">
          <component
            :is="IconComponent"
            v-if="IconComponent"
            class="nav-icon"
          />
          <i
            v-else
            :class="fullIconName"
          />
        </span>
        {{ header }} <sup
          v-if="label"
          :class="'text-' + labelColor"
          class="ms-1 headerLabel"
        >{{ label }}</sup>
        <div :class="['caretWrapper', { carretActive: isActive }]">
          <i class="fa fa-angle-right" />
        </div>
      </a>
    </div>
    <div
      :id="'collapse' + index"
      class="collapse"
      :class="{ show: isActive }"
    >
      <ul class="sub-menu">
        <NavLink
          v-for="childrenLink in childrenLinks"
          :key="childrenLink.link"
          :active-item="activeItem"
          :header="childrenLink.header"
          :index="childrenLink.index"
          :link="childrenLink.link"
          :children-links="childrenLink.childrenLinks"
        />
      </ul>
    </div>
  </li>
  <li v-else>
    <router-link :to="index !== 'menu' ? link : ''">
      {{ header }} <sup
        v-if="label"
        :class="'text-' + labelColor"
        class="headerLabel"
      >{{ label }}</sup>
    </router-link>
  </li>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useLayoutStore } from '@/stores/layout'

// Import all sidebar SVGs as Vue components
const svgModules = import.meta.glob('@/assets/sidebar/**/*.svg', { eager: true, import: 'default' })

const props = defineProps({
  badge: { type: String, default: '' },
  header: { type: String, default: '' },
  iconName: { type: String, default: '' },
  iconImg: { type: String, default: '' },
  headerLink: { type: String, default: '' },
  link: { type: String, default: '' },
  childrenLinks: { type: Array, default: null },
  className: { type: String, default: '' },
  isHeader: { type: Boolean, default: false },
  deep: { type: Number, default: 0 },
  activeItem: { type: String, default: '' },
  label: { type: String, default: '' },
  labelColor: { type: String, default: 'warning' },
  index: { type: String, default: '' }
})

const route = useRoute()
const layoutStore = useLayoutStore()

const headerLinkWasClicked = ref(true)

const fullIconName = computed(() => `fi ${props.iconName}`)

const isActive = computed(() => {
  return props.activeItem &&
    props.activeItem.includes(props.index) &&
    headerLinkWasClicked.value
})

// Check if current route is a child of this parent link
const isParentActive = computed(() => {
  if (!props.link) return false
  return route.path.startsWith(props.link)
})

// Get SVG component from glob imports
const IconComponent = computed(() => {
  if (!props.iconImg) return null
  const path = `/src/assets/${props.iconImg}`
  return svgModules[path] || null
})

function togglePanelCollapse(link) {
  layoutStore.changeSidebarActive(link)
  headerLinkWasClicked.value = !headerLinkWasClicked.value ||
    !(props.activeItem && props.activeItem.includes(props.index))
}
</script>

<style src="./NavLink.scss" lang="scss" scoped />
