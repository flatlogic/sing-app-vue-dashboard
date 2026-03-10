<template>
  <div class="email-page">
    <div class="pageTopLine">
      <h1 class="page-title">
        Email - <span class="fw-semi-bold">Inbox</span>
      </h1>
      <div
        v-if="isNotificationOpen"
        class="alert alert-warning alert-dismissible fade show"
        role="alert"
        @click="closeNotification"
      >
        <p class="me-3 my-1">
          Hey! This is a <span class="fw-semi-bold">real app</span>
          with CRUD and Search functions. Have fun!
        </p>
        <button
          type="button"
          class="btn-close ms-2 my-1"
          data-bs-dismiss="alert"
          aria-label="Close"
        />
      </div>
    </div>
    <div class="view">
      <div class="row">
        <Filters
          :filter="filter"
          :open-message="openMessage"
          :compose="changeCompose"
        />
        <MessageTable
          :filter="filterValue"
          :opened-message="openedMessage"
          :open-message="openMessage"
          :compose="compose"
          :change-compose="changeCompose"
          :compose-data="composeData"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Filters from './components/Filters/Filters.vue'
import MessageTable from './components/MessageTable/MessageTable.vue'

const isNotificationOpen = ref(true)
const filterValue = ref(null)
const openedMessage = ref(null)
const compose = ref(false)
const composeData = ref(null)
const alertAfter = ref(false)

function fixAlert() {
  alertAfter.value = true
}

function filter(val) {
  filterValue.value = val
  compose.value = false
  composeData.value = null
}

function closeNotification() {
  isNotificationOpen.value = false
}

function openMessage(id) {
  openedMessage.value = id
  compose.value = id === null ? false : compose.value
  composeData.value = id === null ? null : composeData.value
}

function changeCompose(val, data) {
  compose.value = val
  if (data) {
    composeData.value = data
  }
}

onMounted(() => {
  setTimeout(() => { fixAlert() }, 500)
})
</script>

<style src="./Email.scss" lang="scss" scoped />
