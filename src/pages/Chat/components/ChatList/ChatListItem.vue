<template>
  <li class="chat-list-item" :class="{active: isActive}">
    <div class="chat-list-item-wrapper">
      <Avatar v-if="!chat.isGroup" :user="chat.interlocutors[0]" :size="45" class="mr-3"></Avatar>
      <ul v-else class="avatars-column">
        <li v-for="user of chatUsers" :key="user.id">
          <Avatar :showStatus="false" :user="user" :size="35" class="mr-3" :stroke="true"></Avatar>
        </li>
      </ul>
      <section class="chat-item-main">
        <header class="d-flex align-items-center justify-content-between mb-1">
          <h6 class="chat-title">
            <img class="group-chat-icon mr-1" v-if="chat.isGroup" :src="img.people">
            {{chat.title}}
            <span v-if="chat.isGroup" class="ml-1">({{chat.interlocutors.length + 1}})</span>
          </h6>
          <span class="ml-auto timestamp">
            {{time}}
          </span>
        </header>
        <p class="chat-last-message">
          <span v-if="chat.lastMessage.owner" class="owner-indicator mr-1">
            You:
          </span>
          <span v-if="!chat.lastMessage.owner && chat.isGroup" class="owner-indicator mr-1">
            {{findUser(chat.lastMessage.userId).name}}:
          </span>
          {{chat.lastMessage.text || 'Write a first message'}}
        </p>
      </section>
    </div>
  </li>
</template>

<script>
  import Avatar from '../Avatar/Avatar';
  import moment from 'moment';
  import { ChatMixin } from '../../../../mixins/chat';

  import people from '../../../../assets/chat/people.svg';

  export default {
    name: 'ChatListItem',
    data() {
      return {
        img: {
          people
        }
      }
    },
    components: {Avatar},
    mixins: [ChatMixin],
    props: {
      chat: {type: Object, default: () => {}},
      isActive: {type: Boolean, default: false}
    },
    computed: {
      time() {
        return moment(this.chat.lastMessage?.timestamp).format('D MMM') || "";
      },
      chatUsers() {
        if (this.chat.interlocutors.length <= 2) {
          return [...this.chat.interlocutors, this.user];
        } else {
          return this.chat.interlocutors.slice(0, 3);
        }
      }
    },
  }
</script>

<style src="./ChatList.scss" lang="scss" scoped></style>
