<template>
  <div class="documentation-page">
    <DocHeader></DocHeader>
    <DocSidebar></DocSidebar>
    <div class="content">
      <breadcrumb-history></breadcrumb-history>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
  import DocHeader from './DocumentationHeader';
  import DocSidebar from './DocumentationSidebar';
  import BreadcrumbHistory from './BreadcrumbHistory';

  export default {
    name: 'DocLayout',
    components: {
      DocHeader, DocSidebar, BreadcrumbHistory
    }
  }
</script>
<style src="./styles.scss" lang="scss"/>