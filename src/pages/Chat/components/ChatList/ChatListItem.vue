<template>
  <li
    class="chat-list-item"
    :class="{active: isActive}"
  >
    <div class="chat-list-item-wrapper">
      <Avatar
        v-if="!chat.isGroup"
        :user="chat.interlocutors[0]"
        :size="45"
        class="me-3"
      />
      <ul
        v-else
        class="avatars-column"
      >
        <li
          v-for="chatUser of chatUsers"
          :key="chatUser.id"
        >
          <Avatar
            :show-status="false"
            :user="chatUser"
            :size="35"
            class="me-3"
            :stroke="true"
          />
        </li>
      </ul>
      <section class="chat-item-main">
        <header class="d-flex align-items-center justify-content-between mb-1">
          <h6 class="chat-title">
            <img
              v-if="chat.isGroup"
              class="group-chat-icon me-1"
              alt="people"
              :src="peopleImg"
            >
            {{ chat.title }}
            <span
              v-if="chat.isGroup"
              class="ms-1"
            >({{ chat.interlocutors.length + 1 }})</span>
          </h6>
          <span class="ms-auto timestamp">
            {{ time }}
          </span>
        </header>
        <p class="chat-last-message">
          <span
            v-if="chat.lastMessage.owner"
            class="owner-indicator me-1"
          >
            You:
          </span>
          <span
            v-if="!chat.lastMessage.owner && chat.isGroup"
            class="owner-indicator me-1"
          >
            {{ findUser(chat.lastMessage.userId)?.name }}:
          </span>
          {{ chat.lastMessage.text || 'Write a first message' }}
        </p>
      </section>
    </div>
  </li>
</template>

<script setup>
import { computed } from 'vue'
import { format, parseISO } from 'date-fns'
import Avatar from '../Avatar/Avatar.vue'
import { useChat } from '@/composables/useChat'

import peopleImg from '../../../../assets/chat/people.svg?url'

const props = defineProps({
  chat: { type: Object, default: () => ({}) },
  isActive: { type: Boolean, default: false }
})

const { user, findUser } = useChat()

const time = computed(() => {
  if (!props.chat.lastMessage?.timestamp) return ''
  const date = typeof props.chat.lastMessage.timestamp === 'string'
    ? parseISO(props.chat.lastMessage.timestamp)
    : props.chat.lastMessage.timestamp
  return format(date, 'd MMM')
})

const chatUsers = computed(() => {
  if (props.chat.interlocutors.length <= 2) {
    return [...props.chat.interlocutors, user.value]
  } else {
    return props.chat.interlocutors.slice(0, 3)
  }
})
</script>

<style src="./ChatList.scss" lang="scss" scoped></style>
