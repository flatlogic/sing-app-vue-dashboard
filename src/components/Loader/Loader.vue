<template>
  <div class="data-loader">
    <i
      class="la la-spinner la-spin"
      :style="{fontSize: size + 'px'}"
    />
  </div>
</template>

<script setup>
defineProps({
  size: { type: Number, default: 21 }
})
</script>

<style src="./Loader.scss" lang="scss" />
