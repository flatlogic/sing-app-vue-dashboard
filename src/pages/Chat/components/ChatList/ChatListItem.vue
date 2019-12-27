<template>
  <li class="chat-list-item" :class="{active: activeChatUser.id === user.id}">
    <div class="chat-list-item-wrapper">
      <Avatar :user="user" :size="45" class="mr-3"></Avatar>
      <section class="chat-item-main">
        <header class="d-flex align-items-center justify-content-between mb-1">
          <h6 class="chat-title">{{user.title}}</h6>
          <span class="ml-auto timestamp">
            {{time}}
          </span>
        </header>
        <p class="chat-last-message">
          {{lastMessage.text || 'Write a first message'}}
        </p>
      </section>
    </div>
  </li>
</template>

<script>
  import Avatar from '../Avatar/Avatar';
  import moment from 'moment';
  import {mapState} from 'vuex';

  export default {
    name: 'ChatListItem',
    components: {Avatar},
    props: {
      user: {type: Object, default: () => {}}
    },
    computed: {
      ...mapState('chat', ['activeChatUser']),
      lastMessage() {
        let messagesLength = this.user.dialog?.messages?.length;
        return this.user.dialog?.messages?.[messagesLength - 1] || {};
      },
      time() {
        return moment(this.lastMessage?.timestamp).format('d MMM') || "";
      }
    },
  }
</script>

<style src="./ChatList.scss" lang="scss" scoped></style>
