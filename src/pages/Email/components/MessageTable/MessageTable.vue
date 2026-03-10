<template>
  <div class="col-lg-9 col-xl-10 col-12 d-flex flex-column">
    <nav
      v-if="openedMessage === null && !compose"
      aria-label="Page navigation"
      class="ms-auto"
    >
      <ul class="pagination">
        <li
          class="page-item"
          :class="{ disabled: currentPage === 1 }"
        >
          <a
            class="page-link"
            href="#"
            @click.prevent="currentPage > 1 && currentPage--"
          >Previous</a>
        </li>
        <li
          v-for="page in totalPages"
          :key="page"
          class="page-item"
          :class="{ active: page === currentPage }"
        >
          <a
            class="page-link"
            href="#"
            @click.prevent="currentPage = page"
          >{{ page }}</a>
        </li>
        <li
          class="page-item"
          :class="{ disabled: currentPage === totalPages }"
        >
          <a
            class="page-link"
            href="#"
            @click.prevent="currentPage < totalPages && currentPage++"
          >Next</a>
        </li>
      </ul>
    </nav>
    <span v-else>
      <button
        class="btn btn-default mb"
        @click="openMessage(null)"
      >
        <i class="fa fa-angle-left fa-lg" />
      </button>
    </span>
    <Widget v-if="openedMessage === null && !compose">
      <MessageTableHeader
        :search="search"
        :choose-all="chooseAll"
        :choose-none="chooseNone"
        :choose-read="chooseRead"
        :choose-unread="chooseUnread"
        :mark-read="markRead"
        :mark-unread="markUnread"
        :delete-msg="deleteMsg"
      />
      <div class="table-responsive">
        <table class="table table-striped table-hover mb-0">
          <thead>
            <tr>
              <th>
                <div class="abc-checkbox">
                  <input
                    id="checkbox"
                    type="checkbox"
                    :checked="isMainChecked"
                    @click="isMainChecked ? chooseNone() : chooseAll()"
                  >
                  <label for="checkbox" />
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="message in dataToDisplay"
              v-show="_searchable(message)"
              :key="message.id"
              :class="{ unreadedMessage: message.unreaded }"
            >
              <td class="messageCheckbox">
                <div class="abc-checkbox">
                  <input
                    :id="`checkbox${message.id}`"
                    type="checkbox"
                    :checked="checkedIds.indexOf(message.id) !== -1"
                    @change="changeChoosed(message.id)"
                  >
                  <label :for="`checkbox${message.id}`" />
                </div>
              </td>
              <td
                class="messageStar"
                @click="starItem(message.id)"
              >
                <span
                  v-if="message.starred"
                  class="messageStarred"
                >
                  <i class="la la-star" />
                </span>
                <span v-else><i class="la la-star-o" /></span>
              </td>
              <td
                class="messageFrom"
                @click="handleOpenMessage(message.id)"
              >
                {{ message.from }}
              </td>
              <td @click="handleOpenMessage(message.id)">
                {{ message.theme }}
              </td>
              <td class="messageClip">
                <i
                  v-show="message.attachments"
                  class="fa fa-paperclip"
                />
              </td>
              <td class="text-end">
                {{ message.date }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Widget>
    <Compose
      v-else-if="compose"
      :data="composeData"
    />
    <Message
      v-else
      :change-compose="changeCompose"
      :message="messages[openedMessage]"
    />
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import Widget from '@/components/Widget/Widget.vue'
import MessageTableHeader from '../MessageTableHeader/MessageTableHeader.vue'
import Message from '../Message/Message.vue'
import Compose from '../Compose/Compose.vue'
import mock from '../../mock'

const props = defineProps({
  filter: [String, null],
  openedMessage: [Number, null],
  openMessage: Function,
  composeData: Object,
  changeCompose: Function,
  compose: Boolean
})

const messages = ref([...mock])
const checkedIds = ref([])
const searchString = ref('')
const currentPage = ref(1)
const perPage = ref(10)
const rows = ref(96)

const totalPages = computed(() => Math.ceil(rows.value / perPage.value))

function changeChoosed(id) {
  const index = checkedIds.value.indexOf(id)
  if (index === -1) {
    checkedIds.value.push(id)
  } else {
    checkedIds.value.splice(index, 1)
  }
}

function chooseAll() {
  chooseNone()
  if (props.filter) {
    messages.value
      .filter(message => message[props.filter])
      .forEach(message => checkedIds.value.push(message.id))
  } else {
    messages.value.forEach(message => checkedIds.value.push(message.id))
  }
}

function chooseNone() {
  checkedIds.value = []
}

function chooseRead() {
  chooseNone()
  messages.value.forEach((message) => {
    if (!message.unreaded) {
      checkedIds.value.push(message.id)
    }
  })
}

function chooseUnread() {
  chooseNone()
  messages.value.forEach((message) => {
    if (message.unreaded) {
      checkedIds.value.push(message.id)
    }
  })
}

function markUnread() {
  messages.value.forEach((message) => {
    if (checkedIds.value.indexOf(message.id) !== -1) {
      message.unreaded = true
    }
  })
}

function markRead() {
  messages.value.forEach((message) => {
    if (checkedIds.value.indexOf(message.id) !== -1) {
      message.unreaded = false
    }
  })
}

function deleteMsg() {
  messages.value = messages.value.filter(m => checkedIds.value.indexOf(m.id) === -1)
  chooseNone()
}

function starItem(id) {
  const message = messages.value.find(m => m.id === id)
  message.starred = !message.starred
}

function handleOpenMessage(id) {
  messages.value.find(m => m.id === id).unreaded = false
  props.openMessage(id)
}

function search(value) {
  searchString.value = value.toLowerCase()
}

function _searchable(m) {
  if (searchString.value) {
    return (m.content.toLowerCase().indexOf(searchString.value) !== -1
      || m.from.toLowerCase().indexOf(searchString.value) !== -1
      || m.theme.toLowerCase().indexOf(searchString.value) !== -1)
  }
  return true
}

const filteredMessages = computed(() => {
  return messages.value.filter(message => message[props.filter])
})

const dataToDisplay = computed(() => {
  return props.filter ? filteredMessages.value : messages.value
})

const isMainChecked = computed(() => {
  return dataToDisplay.value.length === checkedIds.value.length
})

watch(() => props.filter, (newVal, oldVal) => {
  if (oldVal !== newVal) {
    chooseNone()
  }
})
</script>

<style src="./MessageTable.scss" lang="scss" scoped />
