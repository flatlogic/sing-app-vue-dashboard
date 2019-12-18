<template>
  <div>
    <b-breadcrumb :items="tree"></b-breadcrumb>
  </div>
</template>
<script>
  export default {
    name: 'BreadcrumbHistory',
    computed: {
      tree() {
        // debugger;
        return ['YOU ARE HERE']
          .concat(this.$route.path
            .split('/')
            .slice(1)
            .map(route => route
              .split('-')
              .map(word => word[0].toUpperCase() + word.slice(1))
              .join(' ')
            )
          );
      }
    }
  }
</script>
