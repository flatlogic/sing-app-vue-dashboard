<template>
  <div class="d-flex flex-column">
    <header class="chat-dialog-header">
      <div>
        <h5 class="fw-normal mb-0">{{title}}</h5>
        <small v-if="!chat.isGroup" class="text-muted ">{{interlocutor.isOnline ? 'Online' : 'Was online ' + wasOnline}}</small>
      </div>
      <i class="info-icon la la-ellipsis-v"></i>
    </header>
    <div class="chat-dialog-body" ref="chatDialogBody">
      <div v-for="(part, i) of dialogParts" :key="i">
        <div v-if="isTimeDivider(part)" class="dialog-divider">
          {{part[0]}}
        </div>
        <div v-else class="dialog-messages">
          <ChatMessage
              v-for="(message, j) of part"
              :user="message.userId === user.id ? user : findUser(message.userId)"
              :key="message.id"
              :message="message"
              :owner="message.userId === user.id"
              :showAvatar="showAvatar(part, message, j)"
          ></ChatMessage>
        </div>
      </div>
    </div>
    <form class="chat-section new-message mb-0" @submit="sendMessage($event)">
      <b-button class="attachment" variant="transparent p-0"><i class="la la-plus"></i></b-button>
      <b-input v-model="newMessage" placeholder="Type Your Message"></b-input>
      <b-button variant="danger" class="px-4 new-message-btn" type="submit">
        <Loader v-if="sendingMessage"></Loader>
        <span v-else>Send</span>
      </b-button>
    </form>
  </div>
</template>

<script>
  import {mapState, mapActions} from 'vuex';
  import moment from 'moment';
  import ChatMessage from './ChatMessage';
  import Loader from '../../../../components/Loader/Loader';
  import { ChatMixin } from '../../../../mixins/chat';

  export default {
    name: 'ChatDialog',
    components: {ChatMessage, Loader},
    mixins: [ChatMixin],
    data() {
      return {
        newMessage: ''
      }
    },
    computed: {
      ...mapState('chat', ['activeChatId', 'user', 'sendingMessage', 'chats']),
      chat() {
        return this.chats.find(chat => chat.id === this.activeChatId);
      },
      dialogParts() {
        let firstMessage = this.chat.messages[0];
        let dialogParts = [[this.shortCalendarDate(firstMessage.timestamp)],[firstMessage]];
        let messagesLength = this.chat.messages.length;

        for (let i = 1; i < messagesLength; i++) {
          let lastDialogPart = dialogParts[dialogParts.length - 1];
          let prevMessage = lastDialogPart[lastDialogPart.length - 1];
          let message = this.chat.messages[i];
          let messageDate = moment(message.timestamp).format('YYYY MM dd');
          let prevMessageDate = moment(prevMessage.timestamp).format('YYYY MM dd');
          if (messageDate === prevMessageDate) {
            lastDialogPart.push(message);
          } else {
            dialogParts.push([this.shortCalendarDate(message.timestamp)], [message]);
          }
        }

        return dialogParts;
      },
      wasOnline() {
        let calendarDate = moment(this.interlocutor.prevOnline).calendar();
        let firstLetter = calendarDate[0].toLowerCase();
        let substring = calendarDate.substr(1);

        return firstLetter + substring;
      },
      interlocutor() {
        if (this.chat.isGroup) {
          return;
        }
        return this.findInterlocutor(this.chat);
      },
      title() {
        return this.chat.isGroup ? this.chat.name : `${this.interlocutor.name} ${this.interlocutor.surname}`
      }
    },
    watch: {
      dialogParts() {
        this.newMessage = '';
        setTimeout(() => {
          this.$refs.chatDialogBody.scrollTop = this.$refs.chatDialogBody.scrollHeight;
        })
      }
    },
    mounted() {
      this.$refs.chatDialogBody.scrollTop = this.$refs.chatDialogBody.scrollHeight;
    },
    methods: {
      ...mapActions('chat', ['newMessageRequest']),
      sendMessage(event) {
        event.preventDefault();
        this.newMessageRequest({message: this.newMessage});
      },
      shortCalendarDate(date) {
        return moment(date).calendar(null, {
          sameDay: '[Today]',
          nextDay: '[Tomorrow]',
          nextWeek: 'dddd',
          lastDay: '[Yesterday]',
          lastWeek: '[Last] dddd',
          sameElse: 'dddd, MMMM Do'
        })
      },
      isTimeDivider(dialogPart) {
        return typeof dialogPart[0] === 'string';
      },
      showAvatar(dialogPart, message, index) {
        return index === 0 || dialogPart[index - 1].userId !== message.userId;
      },
    }
  }
</script>

<style src="./ChatDialog.scss" lang="scss" scoped></style>
