<template>
  <nav class="sidebar">
    <ul class="nav">
      <NavLink
        :active-item="layoutStore.sidebarActiveElement"
        header="Getting Started"
        link="/documentation/getting-started"
        index="getting-started"
        :children-links="[
          { header: 'Overview', link: '/documentation/getting-started/overview' },
          { header: 'Licenses', link: '/documentation/getting-started/licenses' },
          { header: 'Quick start', link: '/documentation/getting-started/quick-start' },
        ]"
      />
      <NavLink
        :active-item="layoutStore.sidebarActiveElement"
        header="Pages"
        link="/documentation/pages"
        index="pages"
        is-header
      />
      <NavLink
        :active-item="layoutStore.sidebarActiveElement"
        header="Components"
        link="/documentation/components"
        index="components"
        :children-links="[
          { header: 'Alerts', link: '/documentation/components/alerts' },
          { header: 'Badge', link: '/documentation/components/badge' },
          { header: 'Buttons', link: '/documentation/components/buttons' },
          { header: 'Card', link: '/documentation/components/card' },
          { header: 'Carousel', link: '/documentation/components/carousel' },
          { header: 'Modal', link: '/documentation/components/modal' },
          { header: 'Nav', link: '/documentation/components/nav' },
          { header: 'Navbar', link: '/documentation/components/navbar' },
          { header: 'Popovers & Tooltips', link: '/documentation/components/popovers' },
          { header: 'Progress', link: '/documentation/components/progress' },
          { header: 'Tabs & Accordion', link: '/documentation/components/tabs' },
        ]"
      />
      <NavLink
        :active-item="layoutStore.sidebarActiveElement"
        header="Libs"
        link="/documentation/libs"
        index="libs"
        is-header
      />
    </ul>
    <a
      class="d-md-down-none company"
      href="https://flatlogic.com/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        alt="company logo"
        src="https://cdn.dribbble.com/users/883507/avatars/small/7ca04141e335237d393ab41008adb46d.png?1509465697"
      >
      Proudly built and maintained by <br>
      Flatlogic
    </a>
  </nav>
</template>

<script setup>
import NavLink from '@/components/Sidebar/NavLink/NavLink.vue'
import { useLayoutStore } from '@/stores/layout'

const layoutStore = useLayoutStore()
</script>
