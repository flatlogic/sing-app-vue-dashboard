<template>
  <div class="col-lg-9 col-xl-10 col-xs-12">
    <Pagination v-if="openedMessage === null && !compose" />
    <b-button v-else variant="default" class="mb" @click="openMessage(null)">
      <i class="fa fa-angle-left fa-lg" />
    </b-button>
    <Widget v-if="openedMessage === null && !compose">
        <MessageTableHeader
          :search="search"
          :chooseAll="chooseAll"
          :chooseNone="chooseNone"
          :chooseRead="chooseRead"
          :chooseUnread="chooseUnread"
          :markRead="markRead"
          :markUnread="markUnread"
          :deleteMsg="deleteMsg"
        />
        <div class="table-responsive">
          <table class="table table-striped table-hover mb-0">
            <thead>
              <tr>
                <th>
                  <div class="abc-checkbox">
                    <input
                      type="checkbox"
                      id="checkbox"
                      @click="isMainChecked ? chooseNone() : chooseAll()"
                      :checked="isMainChecked"
                    />
                    <label for="checkbox" />
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="message in dataToDisplay"
                v-show="_searchable(message)"
                :key="message.id"
                :class="{ unreadedMessage: message.unreaded }"
              >
                <td class="messageCheckbox">
                  <div class="abc-checkbox">
                    <input
                      type="checkbox"
                      :id="`checkbox${message.id}`"
                      :checked="checkedIds.indexOf(message.id) !== -1"
                      @change="changeChoosed(message.id)"
                    />
                    <label :for="`checkbox${message.id}`" />
                  </div>
                </td>
                <td
                  class="messageStar"
                  @click="starItem(message.id)"
                >
                    <span v-if="message.starred" class="messageStarred">
                      <i class="fa fa-star" />
                    </span>
                    <span v-else><i class="fa fa-star-o" /></span>
                </td>
                <td
                  class="messageFrom"
                  @click="handleOpenMessage(message.id)"
                >{{message.from}}</td>
                <td @click="handleOpenMessage(message.id)">{{message.theme}}</td>
                <td class="messageClip">
                  <i v-show="message.attachments" class="fa fa-paperclip" />
                </td>
                <td class="text-right">{{message.date}}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Widget>
    <Compose v-else-if="compose" :data="composeData" />
    <Message v-else :changeCompose="changeCompose" :message="messages[openedMessage]" />
  </div>
</template>

<script>
import Vue from 'vue';

import Widget from '@/components/Widget/Widget';
import Pagination from '../Pagination/Pagination';
import MessageTableHeader from '../MessageTableHeader/MessageTableHeader';
import Message from '../Message/Message';
import Compose from '../Compose/Compose';

import mock from '../../mock';

export default {
  name: 'MessageTable',
  components: {
    Widget, Pagination, MessageTableHeader, Message, Compose,
  },
  props: ['filter', 'openedMessage', 'openMessage', 'composeData', 'changeCompose', 'compose'],
  data() {
    return {
      messages: mock,
      checkedIds: [],
      searchString: '',
    };
  },
  methods: {
    changeChoosed(id) {
      const index = this.checkedIds.indexOf(id);

      if (index === -1) {
        this.checkedIds.push(id);
      } else {
        this.checkedIds.splice(index, 1);
      }
    },
    chooseAll() {
      this.chooseNone();

      const { messages, filter, checkedIds } = this;

      if (filter) {
        messages
          .filter(message => message[filter])
          .forEach(message => checkedIds.push(message.id));
      } else {
        messages.forEach(message => checkedIds.push(message.id));
      }
    },
    chooseNone() {
      this.checkedIds = [];
    },
    chooseRead() {
      this.chooseNone();

      this.messages.forEach((message) => {
        if (!message.unreaded) {
          this.checkedIds.push(message.id);
        }
      });
    },
    chooseUnread() {
      this.chooseNone();

      this.messages.forEach((message) => {
        if (message.unreaded) {
          this.checkedIds.push(message.id);
        }
      });
    },
    markUnread() {
      this.messages.map((message) => {
        if (this.checkedIds.indexOf(message.id) !== -1) {
          message.unreaded = true; // eslint-disable-line
        }

        return message;
      });
    },
    markRead() {
      this.messages.map((message) => {
        if (this.checkedIds.indexOf(message.id) !== -1) {
          message.unreaded = false; // eslint-disable-line
        }

        return message;
      });
    },
    deleteMsg() {
      this.messages = this.messages.filter(m => this.checkedIds.indexOf(m.id) === -1);
      this.chooseNone();
    },
    starItem(id) {
      const message = this.messages.find(m => m.id === id);

      message.starred = !message.starred;
    },
    handleOpenMessage(id) {
      this.messages.find(m => m.id === id).unreaded = false;

      this.openMessage(id);
    },
    search(value) {
      Vue.set(this, 'searchString', value.toLowerCase());
    },
    _searchable(m) {
      if (this.searchString) {
        return (m.content.toLowerCase().indexOf(this.searchString) !== -1
          || m.from.toLowerCase().indexOf(this.searchString) !== -1
          || m.theme.toLowerCase().indexOf(this.searchString) !== -1);
      }

      return true;
    },
  },
  computed: {
    filteredMessages() {
      return this.messages.filter(message => message[this.filter]);
    },
    dataToDisplay() {
      return this.filter ? this.filteredMessages : this.messages;
    },
    isMainChecked() {
      return this.dataToDisplay.length === this.checkedIds.length;
    },
  },
  watch: {
    filter(newVal, oldVal) {
      if (oldVal !== newVal) {
        this.chooseNone();
      }
    },
  },
};
</script>

<style src="./MessageTable.scss" lang="scss" scoped />
