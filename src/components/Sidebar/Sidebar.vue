<template>
  <div class="sidebar-wrapper">
    <nav
      :class="{ sidebar: true, sidebarStatic, sidebarOpened }"
      @mouseenter="sidebarMouseEnter"
      @mouseleave="sidebarMouseLeave"
    >
      <header class="logo">
        <router-link to="/app/main/analytics">
          <span class="primary-word">Sing</span> <span class="secondary-word"> App</span>
        </router-link>
      </header>

      <h5 class="navTitle first">
        APP
      </h5>
      <ul class="nav">
        <NavLink
          :active-item="activeItem"
          header="Dashboard"
          link="/app/main"
          icon-name="flaticon-home"
          index="main"
          icon-img="sidebar/Outline/Home.svg"
          :children-links="[
            { header: 'Analytics', link: '/app/main/analytics' },
            { header: 'Visits', link: '/app/main/visits' },
            { header: 'Widgets', link: '/app/main/widgets' },
          ]"
        />
        <NavLink
          :active-item="activeItem"
          header="Chat"
          link="/app/chat"
          icon-name="flaticon-message-circle"
          icon-img="sidebar/Outline/Chat.svg"
          index="chat"
          label="awesome"
          label-color="success"
          is-header
        />
        <NavLink
          :active-item="activeItem"
          header="E-commerce"
          link="/app/ecommerce"
          icon-name="flaticon-shopping-bag"
          icon-img="sidebar/Outline/Bank.svg"
          index="ecommerce"
          :children-links="[
            { header: 'Product Management', link: '/app/ecommerce/management' },
            { header: 'Products Grid', link: '/app/ecommerce/products' },
            { header: 'Product Page', link: '/app/ecommerce/product' },
          ]"
        />
        <NavLink
          :active-item="activeItem"
          header="Sing Package"
          link="/app/package"
          icon-name="flaticon-layers-2"
          icon-img="sidebar/Outline/Stack.svg"
          index="package"
          is-header
        />
        <NavLink
          :active-item="activeItem"
          header="Profile"
          link="/app/profile"
          icon-name="flaticon-person"
          icon-img="sidebar/Outline/User.svg"
          index="profile"
          is-header
        />
        <NavLink
          :active-item="activeItem"
          header="Email"
          link="/app/email"
          icon-name="flaticon-email"
          icon-img="sidebar/Outline/Menu.svg"
          index="email"
          badge="9"
          is-header
        />
        <NavLink
          :active-item="activeItem"
          header="Documentation"
          link="/documentation"
          icon-name="flaticon-documentation"
          icon-img="sidebar/Outline/Document.svg"
          index="documentation"
          label="new"
          label-color="info"
          is-header
        />
        <h5 class="navTitle">
          TEMPLATE
        </h5>
        <NavLink
          :active-item="activeItem"
          header="Core"
          link="/app/core"
          icon-name="flaticon-core"
          icon-img="sidebar/Outline/Envelope.svg"
          index="core"
          :children-links="[
            { header: 'Typography', link: '/app/core/typography' },
            { header: 'Colors', link: '/app/core/colors' },
            { header: 'Grid', link: '/app/core/grid' },
          ]"
        />
        <NavLink
          :active-item="activeItem"
          header="UI Elements"
          link="/app/ui"
          icon-name="flaticon-ui"
          icon-img="sidebar/Outline/Image.svg"
          index="ui"
          :children-links="[
            { header: 'Alerts', link: '/app/ui/alerts' },
            { header: 'Badge', link: '/app/ui/badge' },
            { header: 'Buttons', link: '/app/ui/buttons' },
            { header: 'Card', link: '/app/ui/card' },
            { header: 'Carousel', link: '/app/ui/carousel' },
            { header: 'Jumbotron', link: '/app/ui/jumbotron' },
            { header: 'Icons', link: '/app/ui/icons' },
            { header: 'List Groups', link: '/app/ui/list-groups' },
            { header: 'Modal', link: '/app/ui/modal' },
            { header: 'Nav', link: '/app/ui/nav' },
            { header: 'Navbar', link: '/app/ui/navbar' },
            { header: 'Notifications', link: '/app/ui/notifications' },
            { header: 'Pagination', link: '/app/tables/dynamic' },
            { header: 'Popovers & Tooltips', link: '/app/ui/popovers' },
            { header: 'Progress', link: '/app/ui/progress' },
            { header: 'Tabs & Accordion', link: '/app/ui/tabs' },
          ]"
        />
        <NavLink
          :active-item="activeItem"
          header="Forms"
          link="/app/forms"
          icon-name="flaticon-forms"
          icon-img="sidebar/Outline/Columns.svg"
          index="forms"
          :children-links="[
            { header: 'Form Elements', link: '/app/forms/elements' },
            { header: 'Form Validation', link: '/app/forms/validation' },
            { header: 'Forms Wizard', link: '/app/forms/wizard' },
          ]"
        />
        <NavLink
          :active-item="activeItem"
          header="Charts"
          link="/app/charts"
          icon-name="flaticon-charts"
          icon-img="sidebar/Outline/Chart-pie-alt.svg"
          index="charts"
          :children-links="[
            { header: 'Charts Overview', link: '/app/charts/overview' },
            { header: 'Apex Charts', link: '/app/charts/apex' },
            { header: 'Echarts', link: '/app/charts/echarts' },
            { header: 'Highcharts', link: '/app/charts/highcharts' },
          ]"
        />
        <NavLink
          :active-item="activeItem"
          header="Grid"
          link="/app/grid"
          icon-name="flaticon-grid"
          icon-img="sidebar/Outline/Layout.svg"
          index="grid"
          is-header
        />
        <NavLink
          :active-item="activeItem"
          header="Tables"
          link="/app/tables"
          icon-name="flaticon-equal-1"
          icon-img="sidebar/Outline/Rows.svg"
          index="tables"
          :children-links="[
            { header: 'Tables Basic', link: '/app/tables/basic' },
            { header: 'Tables Dynamic', link: '/app/tables/dynamic' },
          ]"
        />
        <NavLink
          :active-item="activeItem"
          header="Maps"
          link="/app/maps"
          icon-name="flaticon-pin-1"
          icon-img="sidebar/Outline/Location.svg"
          index="maps"
          :children-links="[
            { header: 'Google Maps', link: '/app/maps/google' },
            { header: 'Vector Maps', link: '/app/maps/amcharts' },
          ]"
        />
        <NavLink
          :active-item="activeItem"
          header="Extra"
          link="/app/extra"
          icon-name="flaticon-extra"
          icon-img="sidebar/Outline/Fire.svg"
          index="extra"
          :children-links="[
            { header: 'Calendar', link: '/app/extra/calendar' },
            { header: 'Invoice', link: '/app/extra/invoice' },
            { header: 'Login Page', link: '/extra/login' },
            { header: 'Error Page', link: '/error' },
            { header: 'Gallery', link: '/app/extra/gallery' },
            { header: 'Search Result', link: '/app/extra/search' },
            { header: 'Time Line', link: '/app/extra/time-line' },
          ]"
        />
        <NavLink
          :active-item="activeItem"
          header="Menu Levels"
          link="/app/menu"
          icon-name="flaticon-list-2"
          icon-img="sidebar/Outline/Menu.svg"
          index="menu"
          :children-links="[
            {
              header: 'Level 1.1', link: '/app/menu/level1',
            },
            {
              header: 'Level 1.2',
              link: '/app/menu/level_12',
              index: 'level_12',
              childrenLinks: [
                {
                  header: 'Level 2.1',
                  link: '/app/menu/level_12/level_21',
                  index: 'level_21',
                },
                {
                  header: 'Level 2.2',
                  link: '/app/menu/level_12/level_22',
                  index: 'level_22',
                  childrenLinks: [
                    {
                      header: 'Level 3.1',
                      link: '/app/menu/level_12/level_22/level_31',
                      index: 'level_31',
                    },
                    {
                      header: 'Level 3.2',
                      link: '/app/menu/level_12/level_22/level_32',
                      index: 'level_32 ',
                    },
                  ],
                },
                {
                  header: 'Level 2.3',
                  link: '/app/menu/level_12/level_23',
                  index: 'level_23',
                },
              ],
            },
          ]"
        />
      </ul>
      <h5 class="navTitle">
        LABELS
      </h5>
      <ul class="sidebarLabels">
        <li>
          <a href="#">
            <i class="fa fa-circle text-danger" />
            <span class="labelName">Core</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fa fa-circle text-primary" />
            <span class="labelName">UI Elements</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fa fa-circle text-success" />
            <span class="labelName">Forms</span>
          </a>
        </li>
      </ul>
      <h5 class="navTitle">
        PROJECTS
      </h5>
      <div class="sidebarAlerts">
        <div
          v-for="alert in alerts"
          :key="alert.id"
          class="alert alert-transparent sidebarAlert alert-dismissible fade show"
          role="alert"
        >
          <span>{{ alert.title }}</span><br>
          <div class="progress sidebarProgress progress-xs mt-1">
            <div
              class="progress-bar"
              :class="`bg-${alert.color}`"
              role="progressbar"
              :style="{ width: alert.value + '%' }"
              :aria-valuenow="alert.value"
              aria-valuemin="0"
              aria-valuemax="100"
            />
          </div>
          <small>{{ alert.footer }}</small>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          />
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useLayoutStore } from '@/stores/layout'
import isScreen from '@/core/screenHelper'
import NavLink from './NavLink/NavLink.vue'

const route = useRoute()
const layoutStore = useLayoutStore()

const alerts = ref([
  {
    id: 0,
    title: 'Sales Report',
    value: 15,
    footer: 'Calculating x-axis bias... 65%',
    color: 'danger',
  },
  {
    id: 1,
    title: 'Personal Responsibility',
    value: 20,
    footer: 'Provide required notes',
    color: 'primary',
  },
])

const sidebarStatic = computed(() => layoutStore.sidebarStatic)
const sidebarOpened = computed(() => !layoutStore.sidebarClose)
const activeItem = computed(() => layoutStore.sidebarActiveElement)

function setActiveByRoute() {
  const paths = route.fullPath.split('/')
  paths.pop()
  layoutStore.changeSidebarActive(paths.join('/'))
}

function sidebarMouseEnter() {
  if (!sidebarStatic.value && (isScreen('lg') || isScreen('xl'))) {
    layoutStore.switchSidebar(false)
    setActiveByRoute()
  }
}

function sidebarMouseLeave() {
  if (!sidebarStatic.value && (isScreen('lg') || isScreen('xl'))) {
    layoutStore.switchSidebar(true)
    layoutStore.changeSidebarActive(null)
  }
}

onMounted(() => {
  setActiveByRoute()
})
</script>

<!-- Sidebar styles should be scoped -->
<style src="./Sidebar.scss" lang="scss" scoped />
