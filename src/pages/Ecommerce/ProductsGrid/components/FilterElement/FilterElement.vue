<template>
  <div class="filterElement">
    <div class="filterElementLable">
      {{ defaultLabel }}
    </div>
    <div class="dropdown me-sm-1">
      <button
        class="btn btn-gray-default dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
      >
        {{ currentOption }}
      </button>
      <ul class="dropdown-menu">
        <li
          v-for="option in options"
          :key="option"
        >
          <button
            class="dropdown-item"
            type="button"
            @click="changeCurrent(option)"
          >
            {{ option }}
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps(['options', 'defaultLabel'])

const currentOption = ref(props.options?.[0] || '')

function changeCurrent(item) {
  currentOption.value = item
}
</script>

<style src="./FilterElement.scss" lang="scss" scoped />
