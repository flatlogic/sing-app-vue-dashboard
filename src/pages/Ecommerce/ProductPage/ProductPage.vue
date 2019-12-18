<template>
  <div class="product-page">
    <h1 class="page-title">
      E-commerce -
      <span class="fw-semi-bold">Product Detail</span>
    </h1>
    <Banner :data="product"></Banner>
    <div class="section">
      <h2 class="sectionTitle hide-sm">Product Description</h2>
      <Description :data="product"></Description>
    </div>
    <div class="section">
      <h2 class="sectionTitle">You may also like</h2>
      <div class="slider">
        <carousel
            class="slider"
            :perPageCustom="[[480, 2], [768, 3], [1024, 4]]"
            :navigationEnabled="true"
            :paginationEnabled="false"
            :navigationNextLabel="nextArrow"
            :navigationPrevLabel="prevArrow"
            :speed="500"
            :scrollPerPage="false"
        >
          <slide v-for="slide in products" class="sliderItem" :key="slide.id">
            <ProductCard :product="slide"></ProductCard>
          </slide>
        </carousel>
      </div>
    </div>
  </div >
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
import {mapState, mapActions} from 'vuex';
import arrow from '@/assets/arrow.svg';
import Banner from './components/Banner/Banner';
import Description from './components/Description/Description';
import ProductCard from '../ProductsGrid/components/ProductCard/ProductCard';
import bannerImage from '@/assets/products/img1.jpg';

export default {
  name: 'ProductPage',
  components: {
    Banner, Description, ProductCard, Carousel, Slide
  },
  data() {
    return {
      nextArrow: `<button class="arrow arrow-right">
        <img src="${arrow}" alt="arrow" />
      </button>`,
      prevArrow: `<button class="arrow arrow-left">
        <img src="${arrow}" alt="arrow" />
      </button>`,
    };
  },
  computed: {
    ...mapState('products', ['products']),
    product() {
      return this.findProduct(this.getId()) || {
        img: bannerImage,
        title: 'trainers',
        subtitle: 'Trainers In White',
        price: 76,
        rating: 4.6,
        description_1: "Sneakers (also known as athletic shoes, tennis shoes,gym shoes, runners, takkies, or trainers) are shoes primarily designed for sports or other forms of physical exercise, but which are now also often used for everyday wear.",
        description_2: "The term generally describes a type of footwear with a flexible sole made of rubber or synthetic material and an upper part made of leather or synthetic materials.",
        code: 135234,
        hashtag: "whitetrainers",
        technology: [
          "Ollie patch",
          "Cup soles",
          "Vulcanized rubber soles"
        ],
        reviews: 32
      }
    }
  },
  methods: {
    ...mapActions('products', ['getProductsRequest']),
    findProduct(id) {
      return this.products.find(p => p.id === id);
    },
    getId() {
      return parseInt(this.$route.params.id);
    }
  },
  mounted() {
    this.getProductsRequest();
  }
};
</script>

<style src="./ProductPage.scss" lang="scss" />
