<template>
  <div
    class="chat-page"
    :class="{
      'list-state': mobileState === mobileChatStates.LIST,
      'chat-state': mobileState === mobileChatStates.CHAT,
      'info-state': mobileState === mobileChatStates.INFO,
    }"
  >
    <ChatList class="chat-list-section" />
    <ChatDialog class="chat-dialog-section" />
    <ChatInfo class="chat-info-section" />
  </div>
</template>

<script setup>
import ChatDialog from './components/ChatDialog/ChatDialog.vue'
import ChatInfo from './components/ChatInfo/ChatInfo.vue'
import ChatList from './components/ChatList/ChatList.vue'
import { useChat } from '@/composables/useChat'

const { mobileState, mobileChatStates } = useChat()
</script>

<style src="./Chat.scss" lang="scss"></style>
