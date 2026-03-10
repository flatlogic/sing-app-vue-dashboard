<template>
  <div class="productCard">
    <div
      class="productCardPhoto"
      :style="{ backgroundImage: `url(${product.img})` }"
      @click="$router.push('/app/ecommerce/product/' + product.id)"
    >
      <div
        v-if="label"
        :class="{label: true, 'bg-danger': label === 'Sale',
                 'bg-success': label !== 'Sale'}"
      >
        {{ label }}
      </div>
      <button
        class="star"
        @click.stop="toggleFavourite()"
      >
        <img
          v-if="favourite"
          src="../../../../../assets/stars/star-filled.svg"
          alt="star"
        >
        <img
          v-else
          src="../../../../../assets/stars/star.svg"
          alt="star"
        >
      </button>
    </div>
    <div class="productCardDataWrapper">
      <div class="productsCardTitle">
        {{ product.title }}
      </div>
      <div class="productsCardDescription">
        {{ product.description }}
      </div>
    </div>
    <div class="productsCardPrice">
      <span v-if="!product.discount">${{ product.price }}</span>
      <div
        v-else
        class="sale"
      >
        <span class="old">${{ product.price }}</span>
        {{ product.discount }}% off
        <span class="new"> ${{ newPrice }}</span>
      </div>
      <Rating
        v-if="product.rating"
        :rating="product.rating"
        size="sm"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import Rating from '@/components/Rating/Rating.vue'

const props = defineProps({
  product: Object
})

const favourite = ref(props.product?.favourite || false)

function toggleFavourite() {
  favourite.value = !favourite.value
}

const newPrice = computed(() => {
  return props.product?.discount
    ? props.product.price - (props.product.price * props.product.discount / 100)
    : props.product?.price
})

const label = computed(() => {
  return props.product?.discount
    ? "Sale"
    : props.product?.createdAt === props.product?.updatedAt
      ? "New"
      : null
})
</script>

<style src="./ProductCard.scss" lang="scss" scoped />
