<template>
  <div class="products-page">
    <div v-if="!isModalActive">
      <h1 class="page-title">
        E-commerce - <span class="fw-semi-bold">Product Grid</span>
      </h1>
      <div class="productsListFilters">
        <div
          v-for="filter in filtersData"
          :key="filter.title || filter.id"
        >
          <FilterElement
            v-if="typeof filter.data[0] === 'string'"
            :default-label="filter.title"
            :options="filter.data"
          />
          <FilterElement
            v-for="element in filter.data"
            v-else
            :key="element.id"
            :default-label="element.label"
            :options="element.options"
          />
        </div>
      </div>
      <div class="mobileFilterButtons">
        <button
          class="btn btn-lg"
          @click="openModal(0)"
        >
          Sort <i class="fa fa-2x fa-angle-down" />
        </button>
        <button
          class="btn btn-lg"
          @click="openModal(1)"
        >
          Filter <i class="fa fa-2x fa-angle-down" />
        </button>
      </div>
      <div class="productsListElements">
        <ProductCard
          v-for="product in productsStore.products"
          :key="product.id"
          :product="product"
        />
      </div>
    </div>
    <MobileModal
      :active="isModalActive && modalId === 0"
      :data="filtersData[1]"
      :close="closeModal"
    />
    <MobileModal
      :active="isModalActive && modalId === 1"
      :data="filtersData[0]"
      :close="closeModal"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useProductsStore } from '@/stores/products'
import FilterElement from './components/FilterElement/FilterElement.vue'
import ProductCard from './components/ProductCard/ProductCard.vue'
import MobileModal from './components/MobileModal/MobileModal.vue'

const productsStore = useProductsStore()

const filtersData = ref([
  {
    title: 'Filter',
    data: [
      {
        id: 0,
        label: 'Type',
        options: ['Shoes', 'Boots', 'Trainers']
      },
      {
        id: 1,
        label: 'Brands',
        options: ['All', 'Nike', 'Adidas']
      },
      {
        id: 2,
        label: 'Size',
        options: [7, 8, 9, 10, 11, 12, 12.5, 13]
      },
      {
        id: 3,
        label: 'Colour',
        options: ['All', 'White', 'Black']
      },
      {
        id: 4,
        label: 'Range',
        options: ['All', '-', 'None']
      }
    ]
  },
  {
    id: 6,
    title: 'Sort',
    data: ['Favourite', 'Price', 'Popular']
  }
])

const isModalActive = ref(false)
const modalId = ref(null)

function openModal(id) {
  modalId.value = id
  isModalActive.value = true
}

function closeModal() {
  modalId.value = null
  isModalActive.value = false
}

onMounted(() => {
  productsStore.getProductsRequest()
})
</script>

<style src="./ProductsGrid.scss" lang="scss" />
