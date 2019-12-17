<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <b-navbar class="app-header d-print-none" :class="[navbarTypeClass, 'header-' + navbarColorScheme]">
    <b-nav>
      <b-nav-item id="v-step-0">
        <a class="d-md-down-none px-2" href="#" @click="toggleSidebarMethod" id="barsTooltip">
          <i class='la la-bars la-lg' />
        </a>
        <b-tooltip target="barsTooltip" placement="bottom">
          Turn on/off <br> sidebar <br> collapsing
        </b-tooltip>
        <a class="fs-lg d-lg-none" href="#" @click="switchSidebarMethod">
          <i class="la la-bars la-lg" />
        </a>
      </b-nav-item>
      <b-nav-item class="d-md-down-none">
        <a href="#" class="px-2">
          <i class="la la-refresh la-lg" />
        </a>
      </b-nav-item>
      <b-nav-item class="d-md-down-none">
        <a href="#" class="px-2">
          <i class="la la-times la-lg" />
        </a>
      </b-nav-item>
    </b-nav>
    <b-nav>
      <b-form class="d-sm-down-none ml-5" inline>
        <b-form-group>
          <b-input-group class="input-group-no-border">
            <template v-slot:prepend>
              <b-input-group-text><i class="la la-search"/></b-input-group-text>
            </template>
            <b-form-input id="search-input" placeholder="Search Dashboard" />
          </b-input-group>
        </b-form-group>
      </b-form>
    </b-nav>
    <a  class="navbarBrand d-md-none">
      <i class="fa fa-circle text-primary mr-n-sm" />
      <i class="fa fa-circle text-danger" />
      &nbsp;
      sing
      &nbsp;
      <i class="fa fa-circle text-danger mr-n-sm" />
      <i class="fa fa-circle text-primary" />
    </a>
    <b-nav class="ml-auto">
      <b-nav-item-dropdown
        id="v-step-1"
        class="notificationsMenu d-md-down-none mr-2"
        menu-class="notificationsWrapper py-0 animated animated-fast fadeIn"
        right>
        <template slot="button-content">
          <span class="avatar rounded-circle thumb-sm float-left mr-2">
            <img
                v-if="user.avatar || user.email === 'admin@flatlogic.com'"
                class="rounded-circle"
                :src="user.avatar || avatarImage"
                alt="..."
            />
            <span v-else>{{firstUserLetter}}</span>
          </span>
          <span class="small">{{user.name || user.email || 'Philip smith'}}</span>
          <span class="ml-1 circle bg-primary text-white fw-bold">13</span>
        </template>
        <Notifications />
      </b-nav-item-dropdown>
      <b-nav-item-dropdown id="v-step-2" class="settingsDropdown d-sm-down-none" no-caret right>
        <template slot="button-content">
          <i class="la la-cog px-2" />
        </template>
        <b-dropdown-item><i class="la la-user" /> My Account</b-dropdown-item>
        <b-dropdown-divider />
        <b-dropdown-item>Calendar</b-dropdown-item>
        <b-dropdown-item href="/inbox">
          Inbox &nbsp;&nbsp;<b-badge variant="danger" pill class="animated bounceIn">9</b-badge>
        </b-dropdown-item>
        <b-dropdown-divider />
        <b-dropdown-item-button @click="logoutUser">
          <i class="la la-sign-out" /> Log Out
        </b-dropdown-item-button>
      </b-nav-item-dropdown>
      <b-nav-item id="v-step-3">
        <a class="d-sm-down-none px-2" id="toggle-chat" href="#" @click="toggleChat">
          <i class="la la-globe" />
        </a>
        <i v-if="chatNotificationIcon" class="chat-notification-sing animated bounceIn"></i>
        <div id="chat-notification" class="chat-notification" :class="{'notification-hidden': !chatNotificationPopover}">
          <div class="chatNotificationInner">
            <h6 class="title d-flex text-white">
              <span class="thumb-xs">
                <img src="../../assets/people/a6.jpg" alt=""
                  class="rounded-circle mr-xs float-left" />
              </span>
              Jess Smith
            </h6>
            <p class="text">
              Hi there! <br /> This is a completely new version of Sing App <br />
              built with <strong class="text-primary">Vue</strong>
            </p>
          </div>
        </div>
      </b-nav-item>
      <b-nav-item class="fs-lg d-md-none">
        <a href="#" @click="toggleChat">
          <i class="la la-globe" />
        </a>
      </b-nav-item>
    </b-nav>
  </b-navbar>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import avatarImage from '@/assets/people/a5.jpg';
import Notifications from '@/components/Notifications/Notifications';

export default {
  name: 'Header',
  components: { Notifications },
  data() {
    return {
      avatarImage,
      user: JSON.parse(localStorage.getItem('user') || {})
    }
  },
  computed: {
    ...mapState('layout', [
      'sidebarClose',
      'sidebarStatic',
      'chatNotificationIcon',
      'chatNotificationPopover',
      'navbarType',
      'navbarColorScheme'
    ]),
    firstUserLetter() { return (this.user.name || this.user.email || "P")[0].toUpperCase(); },
    navbarTypeClass: function () {
      return "navbar-" + this.navbarType + "-type"
    }
  },
  methods: {
    ...mapActions('layout', [
      'toggleSidebar',
      'toggleChat',
      'switchSidebar',
      'changeSidebarActive',
      'initApp'
    ]),
    ...mapActions('auth', ['logoutUser']),
    switchSidebarMethod() {
      if (!this.sidebarClose) {
        this.switchSidebar(true);
        this.changeSidebarActive(null);
      } else {
        this.switchSidebar(false);
        const paths = this.$route.fullPath.split('/');
        paths.pop();
        this.changeSidebarActive(paths.join('/'));
      }
    },
    toggleSidebarMethod() {
      if (this.sidebarStatic) {
        this.toggleSidebar();
        this.changeSidebarActive(null);
      } else {
        this.toggleSidebar();
        const paths = this.$route.fullPath.split('/');
        paths.pop();
        this.changeSidebarActive(paths.join('/'));
      }
    }
  },
  created() {
    if (window.innerWidth > 576) {
      this.initApp();
    }
  },
};
</script>

<style src="./Header.scss" lang="scss"></style>
