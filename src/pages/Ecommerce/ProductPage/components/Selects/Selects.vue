<template>
  <div class="selects">
    <div class="dropdown">
      <button
        class="btn btn-gray-default dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
      >
        {{ sizesText === 'Select size' ? 'Select size' : `Size: ${sizesText}` }}
      </button>
      <ul class="dropdown-menu">
        <li
          v-for="size in sizes"
          :key="size"
        >
          <button
            class="dropdown-item"
            type="button"
            @click="sizesText = size"
          >
            {{ size }}
          </button>
        </li>
      </ul>
    </div>
    <div class="dropdown">
      <button
        class="btn btn-gray-default dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
      >
        {{ quantityText }}
      </button>
      <ul class="dropdown-menu">
        <li
          v-for="number in quantity"
          :key="number"
        >
          <button
            class="dropdown-item"
            type="button"
            @click="quantityText = number"
          >
            {{ number }}
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps(['sizes', 'quantity'])

const sizesText = ref('Select size')
const quantityText = ref(1)
</script>

<style src="./Selects.scss" lang="scss" />
