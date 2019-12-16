<template>
  <div :class="{ rating: true, [`rating-${size}`]: size }">
    {{rating}}
    <i class="la la-star"></i>
  </div>
</template>

<script>
export default {
  name: 'Rating',
  props: ['rating', 'size'],
};
</script>

<style src="./Rating.scss" lang="scss" scoped />
