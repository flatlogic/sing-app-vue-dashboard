<template>
  <div class="mobileModalTitle">
    <button v-if="!openedPage" @click="close">
      <img src="../../../../../assets/cancel.svg" alt="close" />
    </button>
    <button v-else @click="back">
      <img class="back" src="../../../../../assets/back.svg" alt="back" />
    </button>
    <h5>{{renderedTitle}}</h5>
  </div>
</template>

<script>
export default {
  name: 'ModalHeader',
  props: ['close', 'back', 'openedPage', 'title'],
  computed: {
    renderedTitle() {
      return this.openedPage ? this.openedPage.label : this.title;
    },
  },
};
</script>

<style src="./ModalHeader.scss" lang="scss" scoped />
