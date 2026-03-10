<template>
  <aside :class="{ chat: true, chatOpen: layoutStore.chatOpen }">
    <header class="chatHeader">
      <h4 class="chatTitle">
        Contacts
      </h4>
      <div class="chatSearch">
        <input
          type="text"
          class="form-control form-control-sm"
          placeholder="Search..."
          @input="handleSearchInput"
        >
        <i class="fa fa-search" />
      </div>
    </header>
    <div :class="{ 'chatPanel chatContacts': true, chatMessageOpen: chatMessageOpened }">
      <h5 class="navTitle">
        TODAY
      </h5>
      <ul class="list-group chatSidebarUserGroup">
        <li
          v-for="(conversation, index) in todayConversations.filter(filterConversations)"
          :key="conversation.name"
          class="list-group-item"
          :class="{ active: index === 0 && layoutStore.chatNotificationMessageState === messageStates.NEW }"
          @click="openMessages(conversation, index)"
        >
          <i :class="`fa fa-circle float-end text-${conversation.status}`" />
          <span
            v-if="index === 0 && layoutStore.chatNotificationMessageState === messageStates.NEW"
            class="badge bg-danger rounded-pill float-end animated bounceInDown"
          >3</span>
          <span class="thumb-sm float-start me-2">
            <img
              class="rounded-circle"
              :src="conversation.image"
              alt="..."
            >
          </span>
          <div>
            <h6 class="messageSender">
              {{ conversation.name }}
            </h6>
            <p class="messagePreview">
              {{ conversation.lastMessage }}
            </p>
          </div>
        </li>
      </ul>
      <h5 class="navTitle">
        LAST WEEK
      </h5>
      <ul class="list-group chatSidebarUserGroup">
        <li
          v-for="conversation in lastWeekConversations.filter(filterConversations)"
          :key="conversation.name"
          class="list-group-item"
          @click="openMessages(conversation)"
        >
          <i :class="`fa fa-circle float-end text-${conversation.status}`" />
          <span class="thumb-sm float-start me-2">
            <img
              class="rounded-circle"
              :src="conversation.image"
              alt="..."
            >
          </span>
          <div>
            <h6 class="messageSender">
              {{ conversation.name }}
            </h6>
            <p class="messagePreview">
              {{ conversation.lastMessage }}
            </p>
          </div>
        </li>
      </ul>
    </div>
    <div :class="{ 'chatPanel chatMessages': true, chatMessageOpen: !chatMessageOpened }">
      <h6 class="messagesTitle">
        <a @click="chatMessageOpened = true">
          <i class="fa fa-angle-left me-1" />
          {{ activeConversation.name }}
        </a>
      </h6>
      <ul class="list-group">
        <li
          v-for="message in activeConversation.messages"
          :key="message.id"
          class="list-group-item messageItem"
          :class="{ fromMe: message.fromMe }"
        >
          <span class="thumb-sm">
            <img
              v-if="message.fromMe"
              class="rounded-circle"
              :src="a5"
              alt="..."
            >
            <img
              v-else
              class="rounded-circle"
              :src="activeConversation.image"
              alt="..."
            >
          </span>
          <div class="messageBody">
            {{ message.text }}
          </div>
        </li>
      </ul>
      <footer class="chatFooter form-group">
        <input
          class="form-control fs-mini"
          type="text"
          placeholder="Type your message"
          @keydown="addMessage"
        >
      </footer>
    </div>
  </aside>
</template>

<script setup>
import { ref } from 'vue'
import { useLayoutStore, MessageStates } from '@/stores/layout'

import a1 from '@/assets/people/a1.jpg'
import a2 from '@/assets/people/a2.jpg'
import a3 from '@/assets/people/a3.jpg'
import a4 from '@/assets/people/a4.jpg'
import a5 from '@/assets/people/a5.jpg'
import a6 from '@/assets/people/a6.jpg'

const layoutStore = useLayoutStore()
const messageStates = MessageStates

const todayConversations = ref([
  {
    name: 'Chris Gray',
    status: 'success',
    lastMessage: "Hey! What's up? So many times since we",
    image: a2,
    messages: [
      { id: 0, text: "Hey! What's up?" },
      { id: 1, text: 'Are you there?' },
      { id: 2, text: 'Let me know when you come back.' },
      { id: 3, text: 'I am here!', fromMe: true }
    ]
  },
  {
    name: 'Jamey Brownlow',
    status: 'gray-light',
    lastMessage: 'Good news coming tonight. Seems they agreed to proceed',
    image: a1
  },
  {
    name: 'Livia Walsh',
    status: 'danger',
    lastMessage: 'Check out my latest email plz!',
    image: a1
  },
  {
    name: 'Jaron Fitzroy',
    status: 'gray-light',
    lastMessage: 'What about summer break?',
    image: a1
  },
  {
    name: 'Mike Lewis',
    status: 'success',
    lastMessage: "Just ain't sure about the weekend now. 90% I'll make it.",
    image: a4
  }
])

const lastWeekConversations = ref([
  {
    name: 'Freda Edison',
    status: 'gray-light',
    lastMessage: "Hey what's up? Me and Monica going for a lunch somewhere. Wanna join?",
    image: a6
  },
  {
    name: 'Livia Walsh',
    status: 'success',
    lastMessage: 'Check out my latest email plz!',
    image: a5
  },
  {
    name: 'Jaron Fitzroy',
    status: 'warning',
    lastMessage: 'What about summer break?',
    image: a3
  },
  {
    name: 'Mike Lewis',
    status: 'gray-light',
    lastMessage: "Just ain't sure about the weekend now. 90% I'll make it.",
    image: a1
  }
])

const chatMessageOpened = ref(true)
const activeConversation = ref({})
const searchValue = ref('')

function filterConversations(item) {
  const isFindName = item.name.toLowerCase().indexOf(searchValue.value.toLowerCase()) !== -1
  const isFindMessage = item.lastMessage.toLowerCase().indexOf(searchValue.value.toLowerCase()) !== -1
  return isFindName || isFindMessage
}

function handleSearchInput(e) {
  searchValue.value = e.target.value
}

function openMessages(conv, index) {
  activeConversation.value = conv
  chatMessageOpened.value = false

  if (index === 0) {
    layoutStore.readMessage()
  }
}

function addMessage(e) {
  if (e.key === 'Enter' && e.target.value) {
    const value = {
      id: Date.now(),
      text: e.target.value,
      fromMe: true
    }

    activeConversation.value = {
      ...activeConversation.value,
      messages: [...(activeConversation.value.messages || []), value]
    }

    e.target.value = ''
  }
}
</script>

<style src="./Chat.scss" lang="scss" />
