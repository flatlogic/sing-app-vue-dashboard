<template>
  <div class="mobileModalTitle">
    <button
      v-if="!openedPage"
      @click="close"
    >
      <img
        src="../../../../../assets/cancel.svg"
        alt="close"
      >
    </button>
    <button
      v-else
      @click="back"
    >
      <img
        class="back"
        src="../../../../../assets/back.svg"
        alt="back"
      >
    </button>
    <h5>{{ renderedTitle }}</h5>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  close: Function,
  back: Function,
  openedPage: Object,
  title: String
})

const renderedTitle = computed(() => {
  return props.openedPage ? props.openedPage.label : props.title
})
</script>

<style src="./ModalHeader.scss" lang="scss" scoped />
