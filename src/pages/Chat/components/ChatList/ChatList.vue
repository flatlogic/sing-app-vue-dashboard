<template>
  <div>
    <section class="chat-section chat-search">
      <b-input placeholder="Search" v-model="search"></b-input>
      <i class="la la-search"></i>
    </section>
    <section class="chat-section personal-chats">
      <h5>Group Chats</h5>
<!--      <ul class="chat-list">-->
<!--        <chat-list-item-->
<!--            v-for="chatUser of personalChats"-->
<!--            :key="chatUser.id"-->
<!--            :users="chatUser"-->
<!--            @click.native="setActiveUser(chatUser.id)"-->
<!--        ></chat-list-item>-->
<!--      </ul>-->
    </section>
    <section class="chat-section personal-chats">
      <h5>Personal Chats</h5>
      <ul class="chat-list">
        <chat-list-item
            v-for="chat of personalChats"
            :key="chat.id"
            :chat="chat"
            :isActive="chat.id === activeChatId"
            @click.native="setActiveChat(chat.id)"
        ></chat-list-item>
      </ul>
    </section>
  </div>
</template>

<script>
  import ChatListItem from './ChatListItem';
  import { mapActions, mapState } from 'vuex';
  import { ChatMixin } from '../../../../mixins/chat';

  export default {
    name: 'ChatList',
    components: {ChatListItem},
    mixins: [ChatMixin],
    data() {
      return {
        search: ''
      }
    },
    computed: {
      ...mapState('chat', ['user', 'chats', 'activeChatId']),
      personalChats() {
        return this.chats
          .filter(chat => {
            return !chat.isGroup && chat.users.indexOf(this.user.id) > -1
          })
          .map(chat => {
            let interlocutor = this.findInterlocutor(chat);
            let lastMessage = chat.messages?.[chat.messages.length - 1] || {};
            lastMessage.owner = lastMessage.userId === this.user.id;
            return {
              id: chat.id,
              title: interlocutor.name + " " + interlocutor.surname,
              interlocutor,
              lastMessage
            }
          });
      },
    },
    methods: {
      ...mapActions('chat', ['setActiveChat'])
    }
  }
</script>

<style src="./ChatList.scss" lang="scss" scoped></style>
