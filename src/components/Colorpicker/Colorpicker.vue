<template>
  <ul class="colors-list">
    <li
      v-for="[colorName, colorValue] in colors"
      :key="colorValue"
      class="color-box"
      :class="{ active: activeColor === colorName }"
      :style="{ backgroundColor: colorValue }"
      @click="$emit('change', [colorName, colorValue])"
    />
  </ul>
</template>

<script setup>
defineProps({
  colors: { type: Array, default: () => [] },
  activeColor: { type: String, default: "#000000" }
})

defineEmits(['change'])
</script>

<style src="./Colorpicker.scss" lang="scss" scoped></style>
