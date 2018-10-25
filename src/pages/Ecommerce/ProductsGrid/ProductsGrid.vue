<template>
  <div class="products-page">
    <div v-if="!isModalActive">
      <b-breadcrumb>
        <b-breadcrumb-item>YOU ARE HERE</b-breadcrumb-item>
        <b-breadcrumb-item active>E-commerce</b-breadcrumb-item>
      </b-breadcrumb>
      <h1 class="page-title">
        E-commerce - <span class="fw-semi-bold">Product Grid</span>
      </h1>
      <div class="productsListFilters">
          <div v-for="filter in filtersData" :key="filter.title">
            <FilterElement v-if="typeof filter.data[0] === 'string'"
              :defaultLabel="filter.title" :options="filter.data" :key="filter.id" />
            <FilterElement v-else v-for="element in filter.data"
              :defaultLabel="element.label" :options="element.options" :key="element.id" />
          </div>
      </div>
      <div class="mobileFilterButtons">
        <b-button
          variant="transparent"
          size="lg"
          @click="openModal(0)"
        >
          Sort <i class="fa fa-2x fa-angle-down" />
        </b-button>
        <b-button
          variant="transparent"
          size="lg"
          @click="openModal(1)"
        >
          Filter <i class="fa fa-2x fa-angle-down" />
        </b-button>
      </div>
      <div class="productsListElements">
        <ProductCard v-for="product in data" :key="product.id" :product="product" />
      </div>
    </div>
    <MobileModal :active="isModalActive && modalId === 0"
      :data="filtersData[1]" :close="closeModal" />
    <MobileModal :active="isModalActive && modalId === 1"
      :data="filtersData[0]" :close="closeModal" />
  </div >
</template>

<script>
import Vue from 'vue';
import mock from './mock';

import FilterElement from './components/FilterElement/FilterElement';
import ProductCard from './components/ProductCard/ProductCard';
import MobileModal from './components/MobileModal/MobileModal';

export default {
  name: 'ProductGrid',
  components: { FilterElement, ProductCard, MobileModal },
  data() {
    return {
      data: mock,
      filtersData: [{
        title: 'Filter',
        data: [{
          id: 0,
          label: 'Type',
          options: ['Shoes', 'Boots', 'Trainers'],
        },
        {
          id: 1,
          label: 'Brands',
          options: ['All', 'Nike', 'Adidas'],
        },
        {
          id: 2,
          label: 'Size',
          options: [7, 8, 9, 10, 11, 12, 12.5, 13],
        },
        {
          id: 3,
          label: 'Colour',
          options: ['All', 'White', 'Black'],
        },
        {
          id: 4,
          label: 'Range',
          options: ['All', '-', 'None'],
        }],
      },
      {
        id: 6,
        title: 'Sort',
        data: ['Favourite', 'Price', 'Popular'],
      }],
      isModalActive: false,
      modalId: null,
    };
  },
  methods: {
    openModal(id) {
      Vue.set(this, 'modalId', id);
      Vue.set(this, 'isModalActive', true);
    },
    closeModal() {
      Vue.set(this, 'modalId', null);
      Vue.set(this, 'isModalActive', false);
    },
  },
};
</script>

<style  src="./ProductsGrid.scss" lang="scss" />
