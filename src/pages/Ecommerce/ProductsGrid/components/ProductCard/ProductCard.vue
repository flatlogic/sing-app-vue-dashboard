<template>
  <div class="productCard">
    <div class="productCardPhoto" :style="{ backgroundImage: `url(${product.img})` }">
      <div
        v-if="product.label"
        :class="{label: true, 'bg-danger': product.label === 'Sale',
          'bg-success': product.label !== 'Sale'}">
        {{product.label}}
      </div>
      <button class="star" @click="toggleFavourite()">
        <img v-if="favourite" src="../../../../../assets/stars/star-filled.svg" alt="star" />
        <img v-else src="../../../../../assets/stars/star.svg" alt="star" />
      </button>
    </div>
    <div class="productCardDataWrapper">
      <div class="productsCardTitle">{{product.title}}</div>
      <div class="productsCardDescription">{{product.description}}</div>
    </div>
    <div class="productsCardPrice">
      <span v-if="typeof product.price === 'number'">${{product.price}}</span>
      <div v-else class="sale">
        <span class="old">${{product.price.old}}</span> {{product.price.percents}}% off
        <span class="new"> ${{product.price.new}}</span>
      </div>
      <!-- <Rating v-if="rating" :rating="rating" size="sm" />} -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: ['product'],
  data() {
    return {
      favourite: this.product.favourite,
    };
  },
  methods: {
    toggleFavourite() {
      this.favourite = !this.favourite;
    },
  },
};
</script>

<style src="./ProductCard.scss" lang="scss" scoped />
