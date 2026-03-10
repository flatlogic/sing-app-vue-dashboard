<template>
  <div :class="{ rating: true, [`rating-${size}`]: size }">
    {{ rating }}
    <i class="la la-star" />
  </div>
</template>

<script setup>
defineProps({
  rating: [Number, String],
  size: String
})
</script>

<style src="./Rating.scss" lang="scss" scoped />
