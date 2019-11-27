<template>
  <ul class="colors-list">
    <li
        v-for="color in colors"
        :key="color"
        class="color-box"
        :class="{'active': activeColor === color}"
        :style="{backgroundColor: color}"
        @click="$emit('change', color)"
    ></li>
  </ul>
</template>

<script>
  export default {
    name: 'Colorpicker',
    props: {
      colors: {type: Array, default: () => []},
      activeColor: {type: String, default: "#000000"}
    }
  }
</script>

<style src="./Colorpicker.scss" lang="scss" scoped></style>
