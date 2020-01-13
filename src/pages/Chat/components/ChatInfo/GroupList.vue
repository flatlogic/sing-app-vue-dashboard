<template>
  <div class="group-list-modal-wrapper">
    <div class="backdrop"></div>
    <section class="group-list-modal chat-section">
      <header class="group-list-header">
        <h5 class="mb-0">{{users.length}} members</h5>
        <a @click="$emit('close')" class="text-muted">
          <i class="la la-times la-lg"></i>
        </a>
      </header>
      <chat-search class="mb-2"></chat-search>
      <ul class="group-list">
        <li v-for="user of groupUsers" :key="user.id">
          <avatar class="mr-2" :user="user" :size="40" :showStatus="false"></avatar>
          <div>
            <p class="mb-0">{{user.name}} {{user.surname}}</p>
            <small>
              <online-status :user="user"></online-status>
            </small>
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
  import ChatSearch from '../ChatSearch/ChatSearch';
  import { ChatMixin } from '../../../../mixins/chat';
  import Avatar from '../Avatar/Avatar';
  import OnlineStatus from '../OnlineStatus/OnlineStatus';
  export default {
    name: 'GroupList',
    components: {OnlineStatus, Avatar, ChatSearch},
    mixins: [ChatMixin],
    props: {
      uids: Array
    },
    computed: {
      groupUsers() {
        return this.uids.map(uid => this.findUser(uid)) || [];
      }
    }
  }
</script>

<style src="./ChatInfo.scss" lang="scss" scoped></style>
