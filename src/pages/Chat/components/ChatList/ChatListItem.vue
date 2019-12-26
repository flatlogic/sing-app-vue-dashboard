<template>
  <li class="chat-list-item">
    <Avatar :user="chat" :size="45" class="mr-3"></Avatar>
    <section class="chat-item-main">
      <header class="d-flex align-items-center justify-content-between mb-1">
        <h6 class="mb-0">{{chat.title}}</h6>
        <span class="ml-auto text-muted">
          {{time}}
        </span>
      </header>
      <p class="chat-last-message">
        {{lastMessage.text || 'Write a first message'}}
      </p>
    </section>
  </li>
</template>

<script>
  import Avatar from '../Avatar/Avatar';
  import moment from 'moment';

  export default {
    name: 'ChatListItem',
    components: {Avatar},
    props: {
      chat: {type: Object, default: () => {}}
    },
    computed: {
      lastMessage() {
        let messagesLength = this.chat.dialog?.messages?.length;
        return this.chat.dialog?.messages?.[messagesLength - 1] || {};
      },
      time() {
        return moment(this.lastMessage?.timestamp).format('d MMM') || "";
      }
    }
  }
</script>

<style src="./ChatList.scss" lang="scss" scoped></style>
