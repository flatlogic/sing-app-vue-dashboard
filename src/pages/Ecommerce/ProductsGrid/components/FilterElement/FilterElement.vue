<template>
  <div class="filterElement">
    <div class="filterElementLable">{{defaultLabel}}</div>
    <b-dropdown class="me-sm-1" :text="currentOption.toString()" color="light" variant="gray-default">
      <b-dropdown-item-button
        v-for="option in options"
        @click="changeCurrent(option)"
        :key="option"
      >{{option}}</b-dropdown-item-button>
    </b-dropdown>
  </div>
</template>

<script>
import Vue from 'vue';

export default {
  name: 'FilterElement',
  props: ['options', 'defaultLabel'],
  data() {
    return {
      currentOption: this.options[0],
    };
  },
  methods: {
    changeCurrent(item) {
      Vue.set(this, 'currentOption', item);
    },
  },
};
</script>

<style src="./FilterElement.scss" lang="scss" scoped />
