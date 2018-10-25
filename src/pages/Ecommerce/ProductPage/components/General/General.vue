<template>
  <div class="general">
    <div class="ratingWrapper">
      <Rating :rating="rating" />
    </div>
    <div class="dataWrapper">
      <span class="title">{{title}}</span>
      <span class="subtitle">{{subtitle}}</span>
    </div>
    <span class="price">${{price}}</span>
  </div>
</template>

<script>
import Rating from '../Rating/Rating';

export default {
  name: 'General',
  props: ['rating', 'title', 'subtitle', 'price'],
  components: { Rating },
};
</script>

<style src="./General.scss" lang="scss" scoped />
