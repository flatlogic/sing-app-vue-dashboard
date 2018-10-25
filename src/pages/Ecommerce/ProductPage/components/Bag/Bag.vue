<template>
  <div class="bag" >
    <button class="btn add">
      add to bag
      <img src="../../../../../assets/bag.svg" alt="bag" />
    </button>
    <button class="btn star" @click="toggle">
      <img v-if="favourite" src="../../../../../assets/stars/star-filled.svg" alt="star" />
      <img v-else src="../../../../../assets/stars/star.svg" alt="star" />
    </button>
  </div>
</template>

<script>
import Vue from 'vue';

export default {
  name: 'Bag',
  data() {
    return {
      favourite: false,
    };
  },
  methods: {
    toggle() {
      Vue.set(this, 'favourite', !this.favourite);
    },
  },
};
</script>

<style src="./Bag.scss" lang="scss" scoped />
