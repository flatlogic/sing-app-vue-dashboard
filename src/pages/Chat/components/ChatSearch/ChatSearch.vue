<template>
  <div class="chat-search">
    <input
      v-model="search"
      type="text"
      class="form-control"
      placeholder="Search"
    >
    <i class="la la-search" />
  </div>
</template>

<script setup>
import { ref } from 'vue';

const search = ref('');
</script>

<style src="./ChatSearch.scss" lang="scss" scoped></style>
