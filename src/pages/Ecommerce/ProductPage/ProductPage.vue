<template>
  <div class="product-page">
    <h1 class="page-title">
      E-commerce -
      <span class="fw-semi-bold">Product Detail</span>
    </h1>
    <Banner :data="product" />
    <div class="section">
      <h2 class="sectionTitle hide-sm">
        Product Description
      </h2>
      <Description :data="product" />
    </div>
    <div class="section">
      <h2 class="sectionTitle">
        You may also like
      </h2>
      <div class="slider">
        <Swiper
          class="slider"
          :slides-per-view="4"
          :space-between="20"
          :modules="[Navigation]"
          :navigation="true"
          :breakpoints="{
            320: { slidesPerView: 1 },
            480: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 }
          }"
        >
          <SwiperSlide
            v-for="slide in productsStore.products"
            :key="slide.id"
            class="sliderItem"
          >
            <ProductCard :product="slide" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import { useProductsStore } from '@/stores/products'
import Banner from './components/Banner/Banner.vue'
import Description from './components/Description/Description.vue'
import ProductCard from '../ProductsGrid/components/ProductCard/ProductCard.vue'
import bannerImage from '@/assets/products/img1.jpg'

const route = useRoute()
const productsStore = useProductsStore()

const product = computed(() => {
  const found = findProduct(getId())
  if (found) return found

  return {
    img: bannerImage,
    title: 'trainers',
    subtitle: 'Trainers In White',
    price: 76,
    rating: 4.6,
    description_1:
      'Sneakers (also known as athletic shoes, tennis shoes, gym shoes, runners, takkies, or trainers) are shoes primarily designed for sports or other forms of physical exercise, but which are now also often used for everyday wear.',
    description_2:
      'The term generally describes a type of footwear with a flexible sole made of rubber or synthetic material and an upper part made of leather or synthetic materials.',
    code: 135234,
    hashtag: 'whitetrainers',
    technology: ['Ollie patch', 'Cup soles', 'Vulcanized rubber soles'],
    reviews: 32
  }
})

function findProduct(id) {
  return productsStore.products.find((p) => p.id === id)
}

function getId() {
  return parseInt(route.params.id)
}

onMounted(() => {
  productsStore.getProductsRequest()
})
</script>

<style src="./ProductPage.scss" lang="scss" />
