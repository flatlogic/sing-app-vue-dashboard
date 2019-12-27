<template>
  <div class="d-flex flex-column">
    <header class="chat-dialog-header">
      <div>
        <h5 class="fw-normal mb-0">{{activeChatUser.name}} {{activeChatUser.surname}}</h5>
        <small class="text-muted ">{{activeChatUser.isOnline ? 'Online' : 'Was online ' + wasOnline}}</small>
      </div>
      <i class="info-icon la la-ellipsis-v"></i>
    </header>
    <div class="chat-dialog-body" ref="chatDialogBody">
      <div v-for="(part, i) of dialogParts" :key="i">
        <div v-if="isTimeDivider(part)" class="dialog-divider">
          {{part[0]}}
        </div>
        <div v-else class="dialog-messages">
          <ChatMessage :user="message.owner ? user : activeChatUser" :key="message.id" v-for="(message, j) of part" :message="message" :showAvatar="showAvatar(part, message, j)"></ChatMessage>
        </div>
      </div>
    </div>
    <form class="chat-section new-message mb-0" @submit="newMessageRequest({dialogId: dialog.id, message: newMessage})">
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

  export default {
    name: 'ChatDialog',
    components: {ChatMessage, Loader},
    data() {
      return {
        newMessage: ''
      }
    },
    computed: {
      ...mapState('chat', ['activeChatUser', 'user', 'sendingMessage']),
      dialog() {
        return this.user.dialogs.find(d => d.withId === this.activeChatUser.id);
      },
      dialogParts() {
        let firstMessage = this.dialog.messages[0];
        let dialogParts = [[this.shortCalendarDate(firstMessage.timestamp)],[firstMessage]];
        let messagesLength = this.dialog.messages.length;

        for (let i = 1; i < messagesLength; i++) {
          let lastDialogPart = dialogParts[dialogParts.length - 1];
          let prevMessage = lastDialogPart[lastDialogPart.length - 1];
          let message = this.dialog.messages[i];
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
        let calendarDate = moment(this.activeChatUser.prevOnline).calendar();
        let firstLetter = calendarDate[0].toLowerCase();
        let substring = calendarDate.substr(1);

        return firstLetter + substring;
      },
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
        return index === 0 || dialogPart[index - 1].owner !== message.owner;
      },
    }
  }
</script>

<style src="./ChatDialog.scss" lang="scss" scoped></style>
