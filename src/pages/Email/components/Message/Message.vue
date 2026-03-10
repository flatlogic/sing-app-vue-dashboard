<template>
  <Widget>
    <MessageHeader
      :title="message.theme"
      :name="message.from"
      :email="message.fromEmail"
      :to="message.to"
      :date="message.date"
      :change-compose="() => changeCompose(true, { from: message.from, theme: message.theme })"
    />
    <div v-html="message.content" />
    <MessageAttachments
      v-if="message.attachments"
      :attachments="message.attachments"
    />
  </Widget>
</template>

<script setup>
import Widget from '@/components/Widget/Widget.vue'
import MessageHeader from '../MessageHeader/MessageHeader.vue'
import MessageAttachments from '../MessageAttachments/MessageAttachments.vue'

defineProps(['message', 'changeCompose'])
</script>
