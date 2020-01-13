<template>
  <div class="chat-search">
    <b-input placeholder="Search" v-model="search"></b-input>
    <i class="la la-search"></i>
  </div>
</template>

<script>
  export default {
    name: 'ChatSearch',
    data() {
      return {
        search: ''
      }
    }
  }
</script>

<style src="./ChatSearch.scss" lang="scss" scoped></style>
