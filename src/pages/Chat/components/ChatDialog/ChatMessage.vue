<template>
  <div
    class="chat-message"
    :class="{owner: owner}"
  >
    <Avatar
      v-if="showAvatar"
      class="message-avatar"
      :user="user"
      :size="40"
      :show-status="false"
    />
    <p
      v-if="message.text"
      class="message-body"
    >
      {{ message.text }}
    </p>
    <p
      v-for="attachment of message.attachments"
      :key="attachment.id"
      class="message-body message-attachment"
    >
      <img
        v-if="attachment.type === 'image'"
        :src="attachment.src"
      >
    </p>
    <small class="d-block text-muted">
      {{ messageDate }}
    </small>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { format, parseISO } from 'date-fns'
import Avatar from '../Avatar/Avatar.vue'

const props = defineProps({
  user: Object,
  message: Object,
  owner: { type: Boolean, default: false },
  showAvatar: { type: Boolean, default: false }
})

const messageDate = computed(() => {
  if (!props.message?.timestamp) return ''
  const date = typeof props.message.timestamp === 'string'
    ? parseISO(props.message.timestamp)
    : props.message.timestamp
  return format(date, 'h:mm a')
})
</script>

<style src="./ChatMessage.scss" lang="scss" scoped></style>
