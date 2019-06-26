<template>
  <div class="productCard">
    <div class="productCardPhoto" :style="{ backgroundImage: `url(${image})` }"
         @click="$router.push('/app/ecommerce/product/' + product.id)">
      <div
        v-if="label"
        :class="{label: true, 'bg-danger': label === 'Sale',
          'bg-success': label !== 'Sale'}">
        {{label}}
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
      <span v-if="!product.discount">${{product.price}}</span>
      <div v-else class="sale">
        <span class="old">${{product.price}}</span>
        {{product.discount}}% off
        <span class="new"> ${{newPrice}}</span>
      </div>
      <Rating v-if="product.rating" :rating="product.rating" size="sm"></Rating>
    </div>
  </div>
</template>

<script>
  import bannerImage from '@/assets/products/img1.jpg';
  import Rating from '../../../ProductPage/components/Rating/Rating';
  export default {
    name: 'ProductCard',
    components: {Rating},
    props: ['product'],
    data() {
      return {
        image: bannerImage,
        favourite: this.product.favourite,
      };
    },
    methods: {
      toggleFavourite() {
        this.favourite = !this.favourite;
      },
    },
    computed: {
      newPrice() {
        return this.product.discount ?
          this.product.price - (this.product.price * this.product.discount / 100) :
          this.product.price;
      },
      label() {
        return this.product.discount ?
          "Sale" :
          this.product.createdAt === this.product.updatedAt ?
            "New" :
            null
      }
    }
  };
</script>

<style src="./ProductCard.scss" lang="scss" scoped />
