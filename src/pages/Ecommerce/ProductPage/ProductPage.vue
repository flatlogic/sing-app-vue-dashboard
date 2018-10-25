<template>
  <div class="product-page">
    <b-breadcrumb>
      <b-breadcrumb-item>YOU ARE HERE</b-breadcrumb-item>
      <b-breadcrumb-item active>E-commerce</b-breadcrumb-item>
    </b-breadcrumb>
    <h1 class="page-title">
      E-commerce -
      <span class="fw-semi-bold">Product Detail</span>
    </h1>
    <Banner />
    <div class="section">
      <h2 class="sectionTitle hide-sm">Product Description</h2>
      <Description :description="description" />
    </div>
    <div class="section">
      <h2 class="sectionTitle">You may also like</h2>
      <!-- <Slider slides={cardsMock} /> -->
      <div class="slider" >
        <slick
          ref="slick"
          :options="sliderOptions"
        >
          <div v-for="slide in slides" class="sliderItem" :key="slide.id">
            <ProductCard :product="slide" />
          </div>)}
        </slick>
      </div >
    </div>
  </div >
</template>

<script>
import Slick from 'vue-slick';
import arrow from '@/assets/arrow.svg';
import Banner from './components/Banner/Banner';
import Description from './components/Description/Description';
import ProductCard from '../ProductsGrid/components/ProductCard/ProductCard';

import mock from './mock';
import slides from '../ProductsGrid/mock';

export default {
  name: 'ProductPage',
  components: {
    Banner, Description, Slick, ProductCard,
  },
  data() {
    return {
      description: mock.description,
      slides,
      sliderOptions: {
        className: 'slider',
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: `<button class="arrow arrow-right">
          <img src="${arrow}" alt="arrow" />
        </button>`,
        prevArrow: `<button class="arrow arrow-left">
          <img src="${arrow}" alt="arrow" />
        </button>`,
        responsive: [{
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 2,
            infinite: true,
          },
        },
        {
          breakpoint: 360,
          settings: {
            slidesToShow: 1,
            infinite: true,
          },
        }],
      },
    };
  },
};
</script>

<style src="./ProductPage.scss" lang="scss" />
