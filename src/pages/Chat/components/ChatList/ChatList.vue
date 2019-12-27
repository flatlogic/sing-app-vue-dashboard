<template>
  <div>
    <section class="chat-section chat-search">
      <b-input placeholder="Search" v-model="search"></b-input>
      <i class="la la-search"></i>
    </section>
    <section class="chat-section personal-chats">
      <h5>Personal Chats</h5>
      <ul class="chat-list">
        <chat-list-item
            v-for="chatUser of personalChats"
            :key="chatUser.id"
            :user="chatUser"
            @click.native="setActiveUser(chatUser.id)"
        ></chat-list-item>
      </ul>
    </section>
  </div>
</template>

<script>
  import ChatListItem from './ChatListItem';
  import {mapActions} from 'vuex';

  export default {
    name: 'ChatList',
    components: {ChatListItem},
    props: {
      user: Object,
      users: Array,
      groups: Array
    },
    data() {
      return {
        search: ''
      }
    },
    computed: {
      personalChats() {
        return [...this.users].map(chat => {
          chat.dialog = this.user.dialogs.find(d => d.withId === chat.id);
          chat.title = chat.name + " " + chat.surname;

          return chat;
        });
      }
    },
    methods: {
      ...mapActions('chat', ['setActiveUser'])
    }
  }
</script>

<style src="./ChatList.scss" lang="scss" scoped></style>
