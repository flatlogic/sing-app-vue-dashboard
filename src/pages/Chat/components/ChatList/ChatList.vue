<template>
  <div>
    <section class="chat-section chat-search">
      <b-input placeholder="Search" v-model="search"></b-input>
      <i class="la la-search"></i>
    </section>
    <section class="chat-section personal-chats">
      <h5>Personal Chats</h5>
      <ul class="chat-list">
        <ChatListItem v-for="chat of personalChats" :key="chat.id" :chat="chat"></ChatListItem>
      </ul>
    </section>
  </div>
</template>

<script>
  import ChatListItem from './ChatListItem';

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
    }
  }
</script>

<style src="./ChatList.scss" lang="scss" scoped></style>
