<template>
  <div>
    <section class="chat-section">
      <chat-search></chat-search>
    </section>
    <section class="chat-section group-chats d-none d-lg-block">
      <h5>Group Chats</h5>
      <ul class="chat-list">
        <chat-list-item
            v-for="chat of getChats(true)"
            :key="chat.id"
            :chat="chat"
            :isActive="chat.id === activeChatId"
            @click.native="setActiveChat(chat.id)"
        ></chat-list-item>
      </ul>
    </section>
    <section class="chat-section personal-chats mb-0 d-none d-lg-block">
      <h5>Personal Chats</h5>
      <ul class="chat-list">
        <chat-list-item
            v-for="chat of getChats(false)"
            :key="chat.id"
            :chat="chat"
            :isActive="chat.id === activeChatId"
            @click.native="setActiveChat(chat.id)"
        ></chat-list-item>
      </ul>
    </section>
    <section class="chat-section all-chats mb-0 d-lg-none">
      <h5>Group Chats</h5>
      <ul class="chat-list mb-3">
        <chat-list-item
            v-for="chat of getChats(true)"
            :key="chat.id"
            :chat="chat"
            :isActive="chat.id === activeChatId"
            @click.native="setActiveChat(chat.id)"
        ></chat-list-item>
      </ul>
      <h5>Personal Chats</h5>
      <ul class="chat-list">
        <chat-list-item
            v-for="chat of getChats(false)"
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
  import { ChatMixin } from '@/mixins/chat';
  import ChatSearch from '../ChatSearch/ChatSearch';

  export default {
    name: 'ChatList',
    components: {ChatSearch, ChatListItem},
    mixins: [ChatMixin],
    data() {
      return {
        search: ''
      }
    },
    computed: {
      ...mapState('chat', ['user', 'chats', 'activeChatId']),
    },
    methods: {
      ...mapActions('chat', ['setActiveChat']),
      getChats(isGroup) {
        return this.chats
          .filter(chat => {
            return chat.isGroup === isGroup && chat.users.indexOf(this.user.id) > -1
          })
          .map(chat => {
            let interlocutors = [];
            chat.users.forEach(uid => {
              if (uid !== this.user.id) {
                interlocutors.push(this.findUser(uid));
              }
            });
            let lastMessage = chat.messages?.[chat.messages.length - 1] || {};
            lastMessage.owner = lastMessage.userId === this.user.id;
            return {
              id: chat.id,
              isGroup,
              title: isGroup ? chat.name : interlocutors[0].name + " " + interlocutors[0].surname,
              interlocutors,
              lastMessage
            }
          }).sort((a, b) => {
            let t1 = a.lastMessage.timestamp;
            let t2 = b.lastMessage.timestamp;
            if (t1 > t2) {
              return -1;
            } else if (t1 < t2) {
              return 1
            } else {
              return 0;
            }
          });
      }
    }
  }
</script>

<style src="./ChatList.scss" lang="scss" scoped></style>
