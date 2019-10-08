<template>
  <div class="documentation-page">
    <DocHeader></DocHeader>
    <DocSidebar></DocSidebar>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
  import DocHeader from './DocumentationHeader';
  import DocSidebar from './DocumentationSidebar';

  export default {
    name: 'DocLayout',
    components: {
      DocHeader, DocSidebar
    }
  }
</script>
<style src="./styles.scss" lang="scss"/>