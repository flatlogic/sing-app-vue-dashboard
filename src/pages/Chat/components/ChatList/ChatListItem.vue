<template>
  <li class="chat-list-item" :class="{active: isActive}">
    <div class="chat-list-item-wrapper">
      <Avatar :user="chat.interlocutor" :size="45" class="mr-3"></Avatar>
      <section class="chat-item-main">
        <header class="d-flex align-items-center justify-content-between mb-1">
          <h6 class="chat-title">{{chat.title}}</h6>
          <span class="ml-auto timestamp">
            {{time}}
          </span>
        </header>
        <p class="chat-last-message">
          <span v-if="chat.lastMessage.owner" class="owner-indicator mr-1">You:</span>{{chat.lastMessage.text || 'Write a first message'}}
        </p>
      </section>
    </div>
  </li>
</template>

<script>
  import Avatar from '../Avatar/Avatar';
  import moment from 'moment';

  export default {
    name: 'ChatListItem',
    components: {Avatar},
    props: {
      chat: {type: Object, default: () => {}},
      isActive: {type: Boolean, default: false}
    },
    computed: {
      time() {
        return moment(this.chat.lastMessage?.timestamp).format('d MMM') || "";
      }
    },
  }
</script>

<style src="./ChatList.scss" lang="scss" scoped></style>
