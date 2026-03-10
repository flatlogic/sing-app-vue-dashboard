<template>
  <div class="d-flex flex-column">
    <div
      class="d-lg-none chat-mobile-navigation px-0"
      @click="changeMobileState(mobileChatStates.LIST)"
    >
      <i class="la la-angle-left la-lg" />
      Chats
    </div>
    <header class="chat-dialog-header">
      <div>
        <h5 class="fw-normal mb-0">
          {{ title }}
        </h5>
        <small v-if="!chat.isGroup">
          <OnlineStatus :user="interlocutor" />
        </small>
      </div>
      <i class="info-icon la la-ellipsis-v d-none d-xl-inline-block" />
      <i
        class="info-icon la la-ellipsis-v d-xl-none"
        @click="changeMobileState(mobileChatStates.INFO)"
      />
    </header>
    <div
      ref="chatDialogBody"
      class="chat-dialog-body"
    >
      <div
        v-for="(part, i) of dialogParts"
        :key="i"
      >
        <div
          v-if="isTimeDivider(part)"
          class="dialog-divider"
        >
          {{ part[0] }}
        </div>
        <div
          v-else
          class="dialog-messages"
        >
          <ChatMessage
            v-for="(message, j) of part"
            :key="message.id"
            :user="message.userId === user.id ? user : findUser(message.userId)"
            :message="message"
            :owner="message.userId === user.id"
            :show-avatar="showAvatar(part, message, j)"
          />
        </div>
      </div>
    </div>
    <form
      class="chat-section new-message mb-0 mx-0"
      @submit.prevent="sendMessage"
    >
      <button
        type="button"
        class="btn btn-transparent p-0 attachment"
      >
        <i class="la la-plus" />
      </button>
      <input
        v-model="newMessage"
        class="form-control"
        placeholder="Type Your Message"
      >
      <button
        type="submit"
        class="btn btn-danger px-4 new-message-btn text-white"
      >
        <Loader v-if="sendingMessage" />
        <span v-else>Send</span>
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import { format, isToday, isYesterday, parseISO } from 'date-fns'
import ChatMessage from './ChatMessage.vue'
import Loader from '@/components/Loader/Loader.vue'
import OnlineStatus from '../OnlineStatus/OnlineStatus.vue'
import { useChat } from '@/composables/useChat'

const {
  user,
  chats,
  activeChatId,
  sendingMessage,
  mobileChatStates,
  changeMobileState,
  findUser,
  findInterlocutor,
  newMessageRequest
} = useChat()

const chatDialogBody = ref(null)
const newMessage = ref('')

const chat = computed(() => {
  return chats.value.find(c => c.id === activeChatId.value) || {}
})

const dialogParts = computed(() => {
  if (!chat.value.id) {
    return []
  }
  const firstMessage = chat.value.messages[0]
  const parts = [[shortCalendarDate(firstMessage.timestamp)], [firstMessage]]
  const messagesLength = chat.value.messages.length

  for (let i = 1; i < messagesLength; i++) {
    const lastDialogPart = parts[parts.length - 1]
    const prevMessage = lastDialogPart[lastDialogPart.length - 1]
    const message = chat.value.messages[i]
    const messageDate = format(parseISO(message.timestamp), 'yyyy MM dd')
    const prevMessageDate = format(parseISO(prevMessage.timestamp), 'yyyy MM dd')
    if (messageDate === prevMessageDate) {
      lastDialogPart.push(message)
    } else {
      parts.push([shortCalendarDate(message.timestamp)], [message])
    }
  }

  return parts
})

const interlocutor = computed(() => {
  if (chat.value.isGroup) {
    return null
  }
  return findInterlocutor(chat.value) || {}
})

const title = computed(() => {
  return chat.value.isGroup ? chat.value.name : `${interlocutor.value?.name || ''} ${interlocutor.value?.surname || ''}`
})

watch(dialogParts, () => {
  newMessage.value = ''
  setTimeout(() => {
    if (chatDialogBody.value) {
      chatDialogBody.value.scrollTop = chatDialogBody.value.scrollHeight
    }
  })
})

onMounted(() => {
  if (chatDialogBody.value) {
    chatDialogBody.value.scrollTop = chatDialogBody.value.scrollHeight
  }
})

function sendMessage() {
  newMessageRequest({ message: newMessage.value })
}

function shortCalendarDate(dateStr) {
  const date = parseISO(dateStr)
  if (isToday(date)) {
    return 'Today'
  } else if (isYesterday(date)) {
    return 'Yesterday'
  } else {
    return format(date, 'EEEE, MMMM do')
  }
}

function isTimeDivider(dialogPart) {
  return typeof dialogPart[0] === 'string'
}

function showAvatar(dialogPart, message, index) {
  return index === 0 || dialogPart[index - 1].userId !== message.userId
}
</script>

<style src="./ChatDialog.scss" lang="scss" scoped></style>
