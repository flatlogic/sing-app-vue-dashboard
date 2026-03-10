<template>
  <div class="documentation-page">
    <DocHeader />
    <DocSidebar />
    <div class="content">
      <BreadcrumbHistory />
      <router-view />
    </div>
  </div>
</template>

<script setup>
import DocHeader from './DocumentationHeader.vue'
import DocSidebar from './DocumentationSidebar.vue'
import BreadcrumbHistory from './BreadcrumbHistory.vue'
</script>

<style src="./styles.scss" lang="scss" />
