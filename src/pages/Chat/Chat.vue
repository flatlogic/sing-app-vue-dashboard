<template>
  <div class="chat-page" :class="{
    'list-state': mobileState === mobileChatStates.LIST,
    'chat-state': mobileState === mobileChatStates.CHAT,
    'info-state': mobileState === mobileChatStates.INFO,
  }">
    <ChatList class="chat-list-section"></ChatList>
    <ChatDialog class="chat-dialog-section"></ChatDialog>
    <ChatInfo class="chat-info-section"></ChatInfo>
  </div>
</template>

<script>
  import ChatDialog from './components/ChatDialog/ChatDialog';
  import ChatInfo from './components/ChatInfo/ChatInfo';
  import ChatList from './components/ChatList/ChatList';
  import { ChatMixin } from '../../mixins/chat';

  export default {
    name: 'Chat',
    mixins: [ChatMixin],
    components: {
      ChatDialog, ChatInfo, ChatList
    }
  }
</script>

<style src="./Chat.scss" lang="scss"></style>
