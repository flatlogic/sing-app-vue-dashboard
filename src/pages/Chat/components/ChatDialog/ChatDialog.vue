<template>
  <div>
    <header class="chat-dialog-header">
      <div>
        <h5 class="fw-normal mb-0">{{activeChatUser.name}} {{activeChatUser.surname}}</h5>
        <small class="text-muted ">{{activeChatUser.isOnline ? 'Online' : 'Was online ' + wasOnline}}</small>
      </div>
      <i class="info-icon la la-ellipsis-v"></i>
    </header>
    <div class="chat-dialog-body">
      <div v-for="(part, i) of dialogParts" :key="i">
        <div v-if="isTimeDivider(part)" class="dialog-divider">
          {{part[0]}}
        </div>
        <div v-else class="dialog-messages">
          <ChatMessage :user="message.owner ? user : activeChatUser" :key="message.id" v-for="(message, j) of part" :message="message" :showAvatar="showAvatar(part, message, j)"></ChatMessage>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex';
  import moment from 'moment';
  import ChatMessage from './ChatMessage';

  export default {
    name: 'ChatDialog',
    components: {ChatMessage},
    computed: {
      ...mapState('chat', ['activeChatUser', 'user']),
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
    methods: {
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
        if (index === 0 || dialogPart[index - 1].owner !== message.owner) {
          return true;
        } else {
          return false;
        }
      }
    }
  }
</script>

<style src="./ChatDialog.scss" lang="scss" scoped></style>
