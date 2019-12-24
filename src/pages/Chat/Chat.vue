<template>
  <div class="chat-page">
    <ChatList class="chat-list-section" :user="user" :users="users" :groups="groups"></ChatList>
    <ChatDialog class="chat-dialog-section"></ChatDialog>
    <ChatInfo class="chat-info-section"></ChatInfo>
  </div>
</template>

<script>
  import {mapState} from 'vuex';

  import ChatDialog from './components/ChatDialog/ChatDialog';
  import ChatInfo from './components/ChatInfo/ChatInfo';
  import ChatList from './components/ChatList/ChatList';

  export default {
    name: 'Chat',
    components: {
      ChatDialog, ChatInfo, ChatList
    },
    computed: {
      ...mapState('chat', ['user', 'users', 'groups'])
    }
  }
</script>

<style src="./Chat.scss" lang="scss"></style>
