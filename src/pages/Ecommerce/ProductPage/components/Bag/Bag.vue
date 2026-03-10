<template>
  <div class="bag">
    <button class="btn btn-success add">
      add to bag
      <img
        src="../../../../../assets/bag.svg"
        alt="bag"
      >
    </button>
    <button
      class="btn star"
      @click="toggle"
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
</template>

<script setup>
import { ref } from 'vue'

const favourite = ref(false)

function toggle() {
  favourite.value = !favourite.value
}
</script>

<style src="./Bag.scss" lang="scss" scoped />
