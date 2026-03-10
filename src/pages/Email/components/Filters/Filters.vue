<template>
  <div class="col-lg-3 col-xl-2 col-12">
    <button
      class="btn btn-primary text-white"
      @click="compose(true)"
    >
      Compose
    </button>
    <div class="mb mt">
      <button
        v-for="button in mainButtons"
        :key="button.id"
        :class="['btn button', { buttonActive: button.id === activeButtonId }]"
        @click="handleButtonClick(button.id, button.filter)"
      >
        {{ button.title }}
        <span
          v-if="button.notifications"
          :class="`badge rounded-pill bg-${button.lable || 'primary'} text-white`"
        >
          {{ button.notifications }}
        </span>
      </button>
    </div>
    <div>
      <h6>QUICK VIEW</h6>
      <button
        v-for="button in quickViewButtons"
        :key="button.id"
        class="btn button"
      >
        {{ button.title }}
        <i :class="`fa fa-circle text-${button.colour}`" />
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  filter: Function,
  openMessage: Function,
  compose: Function
})

const activeButtonId = ref(0)

const mainButtons = [
  { id: 0, title: 'Inbox', notifications: 2, filter: null },
  { id: 1, title: 'Starred', filter: 'starred' },
  { id: 2, title: 'Sent Mail', filter: 'sent' },
  { id: 3, title: 'Draft', notifications: 3, lable: 'danger', filter: 'draft' },
  { id: 4, title: 'Trash', filter: 'trash' }
]

const quickViewButtons = [
  { id: 0, title: 'Work', colour: 'primary' },
  { id: 1, title: 'Private', colour: 'info' },
  { id: 2, title: 'Saved', colour: 'success' }
]

function handleButtonClick(id, filterCond) {
  activeButtonId.value = id
  props.openMessage(null)
  props.filter(filterCond)
}
</script>

<style src="./Filters.scss" lang="scss" scoped />
