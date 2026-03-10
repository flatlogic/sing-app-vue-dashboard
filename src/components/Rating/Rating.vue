<template>
  <div :class="{ rating: true, [`rating-${size}`]: size }">
    {{ rating }}
    <i
      class="la la-star"
      aria-hidden="true"
    />
    <span class="visually-hidden">{{ rating }} out of 5 stars</span>
  </div>
</template>

<script setup>
defineProps({
  rating: {
    type: [Number, String],
    default: 0
  },
  size: {
    type: String,
    default: null,
    validator: (value) => ['sm', 'lg', null].includes(value)
  }
})
</script>

<style src="./Rating.scss" lang="scss" scoped />
