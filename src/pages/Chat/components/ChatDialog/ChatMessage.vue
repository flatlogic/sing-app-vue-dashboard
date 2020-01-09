<template>
  <div class="chat-message" :class="{owner: owner}">
    <Avatar class="message-avatar" :user="user" v-if="showAvatar" :size="40" :showStatus="false"></Avatar>
    <p class="message-body">
      {{message.text}}
    </p>
    <small class="d-block text-muted">
      {{messageDate}}
    </small>
  </div>
</template>

<script>
  import Avatar from '../Avatar/Avatar';
  import moment from 'moment';

  export default {
    name: 'ChatMessage',
    components: {Avatar},
    props: {
      user: Object,
      message: Object,
      owner: {type: Boolean, default: false},
      showAvatar: {type: Boolean, default: false}
    },
    computed: {
      messageDate() {
        return moment(this.message.timestamp).format('h:mm a')
      }
    }
  }
</script>

<style src="./ChatMessage.scss" lang="scss" scoped></style>
