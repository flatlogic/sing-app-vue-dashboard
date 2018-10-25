<template>
  <div class="selects">
    <b-dropdown variant="default"
      :text="sizesText === 'Select size' ? 'Select size' : `Size: ${sizesText}`">
      <b-dropdown-item-button
        v-for="size in sizes"
        @click="setText('sizesText', size)"
        :key="size"
      >{{size}}
      </b-dropdown-item-button>
    </b-dropdown>
    <b-dropdown variant="default" :text="quantityText.toString()">
      <b-dropdown-item-button
        v-for="number in quantity"
        @click="setText('quantityText', number)"
        :key="number"
      >{{number}}
      </b-dropdown-item-button>
    </b-dropdown>
  </div>
</template>

<script>
import Vue from 'vue';

export default {
  name: 'Selects',
  props: ['sizes', 'quantity'],
  data() {
    return {
      sizesText: 'Select size',
      quantityText: 1,
    };
  },
  methods: {
    setText(field, value) {
      Vue.set(this, field, value);
    },
  },
};
</script>

<style src="./Selects.scss" lang="scss" />
