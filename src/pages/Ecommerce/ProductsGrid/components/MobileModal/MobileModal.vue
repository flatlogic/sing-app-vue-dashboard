<template>
  <div :class="{ mobileModal: true, mobileModalActive: active }">
    <ModalHeader
      :openedPage="isPageOpened && data.data[activePageId]"
      :title="data.title"
      :close="handleCloseClick"
      :back="handleBackClick"
    />
    <ul v-if="isPages && !isPageOpened" class="mobileModalBody">
      <li v-for="item in data.data"
        @click="openPage(item.id)" :key="item.id">
        {{item.label}}
      </li>
    </ul>
    <ul v-else-if="isPageOpened" class="mobileModalBody">
      <MobileMenuOption
        v-for="option in data.data[activePageId].options"
        :active="activeOptions[data.data[activePageId].label] === option"
        :onClick="() => toggleOptionActive(data.data[activePageId].label, option)"
        :option="option"
        :key="option"
      />
    </ul>
    <ul v-else class="mobileModalBody">
      <MobileMenuOption
        v-if="!isPages"
        v-for="option in data.data"
        :active="activeOptions[data.data.title] === option"
        :onClick="() => toggleOptionActive(data.data.title, option)"
        :key="option"
        :option="option"
      />
    </ul>
  </div >
</template>

<script>
import Vue from 'vue';

import ModalHeader from '../ModalHeader/ModalHeader';
import MobileMenuOption from '../MobileMenuOption/MobileMenuOption';

export default {
  name: 'MobileModal',
  props: ['active', 'close', 'data'],
  components: { MobileMenuOption, ModalHeader },
  data() {
    return {
      isPages: typeof this.data.data[0] !== 'string',
      isPageOpened: false,
      activePageId: 0,
      activeOptions: {},
    };
  },
  methods: {
    resetState() {
      this.activePageId = null;
      this.isPageOpened = false;
    },
    toggleOptionActive(field, value) {
      Vue.set(this.activeOptions, field, value);
    },
    handleCloseClick() {
      this.resetState();

      this.close();
    },
    handleBackClick() {
      this.activePageId = 0;
      this.isPageOpened = false;
    },
    openPage(index) {
      this.activePageId = index;
      this.isPageOpened = true;
    },
  },
};
</script>

<style src="./MobileModal.scss" lang="scss" scoped />
