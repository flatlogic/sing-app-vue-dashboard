<template>
  <div :class="{ mobileModal: true, mobileModalActive: active }">
    <ModalHeader
      :opened-page="isPageOpened ? data.data[activePageId] : null"
      :title="data.title"
      :close="handleCloseClick"
      :back="handleBackClick"
    />
    <ul
      v-if="isPages && !isPageOpened"
      class="mobileModalBody"
    >
      <li
        v-for="item in data.data"
        :key="item.id"
        @click="openPage(item.id)"
      >
        {{ item.label }}
      </li>
    </ul>
    <ul
      v-else-if="isPageOpened"
      class="mobileModalBody"
    >
      <MobileMenuOption
        v-for="option in data.data[activePageId].options"
        :key="option"
        :active="activeOptions[data.data[activePageId].label] === option"
        :on-click="() => toggleOptionActive(data.data[activePageId].label, option)"
        :option="option"
      />
    </ul>
    <ul
      v-else-if="!isPages"
      class="mobileModalBody"
    >
      <MobileMenuOption
        v-for="option in data.data"
        :key="option"
        :active="activeOptions[data.data.title] === option"
        :on-click="() => toggleOptionActive(data.data.title, option)"
        :option="option"
      />
    </ul>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'
import ModalHeader from '../ModalHeader/ModalHeader.vue'
import MobileMenuOption from '../MobileMenuOption/MobileMenuOption.vue'

const props = defineProps({
  active: Boolean,
  close: Function,
  data: Object
})

const isPages = computed(() => typeof props.data?.data?.[0] !== 'string')
const isPageOpened = ref(false)
const activePageId = ref(0)
const activeOptions = reactive({})

function resetState() {
  activePageId.value = null
  isPageOpened.value = false
}

function toggleOptionActive(field, value) {
  activeOptions[field] = value
}

function handleCloseClick() {
  resetState()
  props.close()
}

function handleBackClick() {
  activePageId.value = 0
  isPageOpened.value = false
}

function openPage(index) {
  activePageId.value = index
  isPageOpened.value = true
}
</script>

<style src="./MobileModal.scss" lang="scss" scoped />
