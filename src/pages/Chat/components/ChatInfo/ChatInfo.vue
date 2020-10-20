<template>
  <div v-if="info.name">
    <div class="d-lg-none chat-mobile-navigation" @click="changeMobileState(mobileChatStates.CHAT)">
      <i class="la la-angle-left la-lg"></i>
      Dialog
    </div>
    <section v-if="!info.isGroup" class="chat-info-header chat-section bg-info">
      <div class="d-flex mb-3">
        <header>
          <h3 class="mb-3 fw-semi-bold">{{info.name}} {{info.surname}}</h3>
          <h5>{{info.company}}</h5>
          <h6>{{info.position}}</h6>
        </header>
        <Avatar class="ml-auto mr-3" :user="info" :size="70" :showStatus="false"></Avatar>
      </div>
      <footer class="d-flex align-items-center justify-content-between">
        <a :href="'mailto:' + info.email" class="text-white mt-2">{{info.email}}</a>
        <ul class="social-links mt-2" v-if="info.social">
          <li class="social-link">
            <a :href="info.social.facebook"><i class="fa fa-facebook"></i></a>
          </li>
          <li class="social-link">
            <a :href="info.social.twitter"><i class="fa fa-twitter"></i></a>
          </li>
          <li class="social-link">
            <a :href="info.social.linkedin"><i class="fa fa-linkedin"></i></a>
          </li>
        </ul>
      </footer>
    </section>
    <section v-if="info.isGroup" class="chat-info-header chat-section bg-info">
      <div class="d-flex align-items-center mb-3">
        <h4 class="mb-0 fw-semi-bold">{{info.name}}</h4>
        <ul class="avatars-row ml-auto">
          <li v-for="user of shortUsersList" :key="user.id">
            <Avatar :showStatus="false" :user="user" :size="35" :stroke="true"></Avatar>
          </li>
        </ul>
      </div>
      <footer class="d-flex align-items-center justify-content-between">
        <a @click="openedGroupList = true">
          <h5 class="text-white mb-0">{{info.users.length}} members</h5>
        </a>
        <b-button variant="white" class="text-info fw-semi-bold">Add people</b-button>
      </footer>
      <group-list
          v-if="openedGroupList"
          class="group-list-modal animated fadeIn"
          :uids="info.users"
          @close="openedGroupList = false"
      ></group-list>
    </section>
    <section class="chat-section chat-info-body">
      <ul class="chat-info-list">
        <li class="chat-info-item">
          <header class="item-header" v-b-toggle.common-info>
            <img class="icon" :src="img.information">
            <h5 class="title">Information</h5>
            <i class="la la-angle-up ml-auto"></i>
          </header>
          <b-collapse id="common-info" visible role="tabpanel" class="item-body">
            <div v-if="!info.isGroup">
              <p class="mb-0">{{info.tel}}</p>
              <span class="help-block">Mobile</span>
              <p class="mb-0">@{{info.username}}</p>
              <span class="help-block">Username</span>
            </div>
            <div v-else>
              <p class="mb-0">{{info.name}}</p>
              <span class="help-block">Name</span>
              <p class="mb-0">by {{createdBy}} on {{createdAt}}</p>
              <span class="help-block">Created</span>
            </div>
          </b-collapse>
        </li>
        <li class="chat-info-item">
          <header class="item-header">
            <img class="icon" :src="img.notifications">
            <h5 class="title">Notifications</h5>
            <label for="checkbox-ios1" class="switch ml-auto mb-0">
              <input type="checkbox" id="checkbox-ios1" :checked="info.notifications"
                 class="ios form-check-input">
              <i></i>
            </label>
          </header>
        </li>
        <li class="chat-info-item">
          <header class="item-header" v-b-toggle.images>
            <img class="icon" :src="img.images">
            <h5 class="title">Images</h5>
            <i class="la la-angle-up ml-auto"></i>
          </header>
          <b-collapse id="images" role="tabpanel" class="item-body">
            <p v-if="!info.images.length" class="text-muted"><i>No images</i></p>
          </b-collapse>
        </li>
        <li class="chat-info-item">
          <header class="item-header" v-b-toggle.links>
            <img class="icon" :src="img.links">
            <h5 class="title">Links</h5>
            <i class="la la-angle-up ml-auto"></i>
          </header>
          <b-collapse id="links" role="tabpanel" class="item-body">
            <p v-if="!info.links.length" class="text-muted"><i>No links</i></p>
          </b-collapse>
        </li>
        <li class="chat-info-item">
          <header class="item-header" v-b-toggle.files>
            <img class="icon" :src="img.files">
            <h5 class="title">Files</h5>
            <i class="la la-angle-up ml-auto"></i>
          </header>
          <b-collapse id="files" visible role="tabpanel" class="item-body">
            <p v-if="!info.files.length" class="text-muted"><i>No links</i></p>
            <ul v-else class="files-list">
              <li class="file-item" v-for="file of info.files" :key="file.id">
                <img class="download-icon" :src="img.download">
                <a :href="file.url">{{file.name}}</a>
              </li>
            </ul>
          </b-collapse>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import moment from 'moment';
  import Avatar from '../Avatar/Avatar';
  import { ChatMixin } from '../../../../mixins/chat';

  import files from '../../../../assets/chat/files.svg';
  import images from '../../../../assets/chat/images.svg';
  import information from '../../../../assets/chat/information.svg';
  import links from '../../../../assets/chat/links.svg';
  import notifications from '../../../../assets/chat/notifications.svg';
  import download from '../../../../assets/chat/download.svg';
  import GroupList from './GroupList';

  export default {
    name: 'ChatInfo',
    data() {
      return {
        openedGroupList: false,
        img: {
          files, images, information, links, notifications, download
        }
      }
    },
    components: {GroupList, Avatar},
    mixins: [ChatMixin],
    computed: {
      ...mapState('chat', ['activeChatId', 'chats']),
      info() {
        let chat = this.chats.find(chat => chat.id === this.activeChatId);
        if (chat && chat.isGroup) {
          return {...chat}
        }
        return {...this.findInterlocutor(chat), ...chat};
      },
      shortUsersList() {
        if (this.chatUsers.length <= 3) {
          return [...this.chatUsers];
        } else {
          return this.chatUsers.slice(0, 3);
        }
      },
      chatUsers() {
        return this.info.users.map(uid => this.findUser(uid));
      },
      createdBy() {
        let user = this.findUser(this.info.createdBy);
        return `${user.name} ${user.surname}`;
      },
      createdAt() {
        return moment(this.info.createdAt).format('MMMM DD, YYYY');
      }
    }
  }
</script>

<style src="./ChatInfo.scss" lang="scss" scoped></style>
