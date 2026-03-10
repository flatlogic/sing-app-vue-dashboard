<template>
  <div class="general">
    <div class="ratingWrapper">
      <Rating :rating="rating" />
    </div>
    <div class="dataWrapper">
      <span class="title">{{ title }}</span>
      <span class="subtitle">{{ subtitle }}</span>
    </div>
    <span class="price">${{ price }}</span>
  </div>
</template>

<script setup>
import Rating from '../Rating/Rating.vue'

defineProps(['rating', 'title', 'subtitle', 'price'])
</script>

<style src="./General.scss" lang="scss" scoped />
