<template>
  <ul class="colors-list">
    <li
        v-for="color in colors"
        :key="color[1]"
        class="color-box"
        :class="{'active': activeColor === color[1]}"
        :style="{backgroundColor: color[1]}"
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
