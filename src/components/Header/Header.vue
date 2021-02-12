<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <b-navbar class="app-header d-print-none" :class="[navbarTypeClass, 'header-' + navbarColorScheme]">
    <b-nav>
      <b-nav-item id="v-step-0">
        <a class="d-md-down-none px-2" href="#" @click="toggleSidebarMethod">
          <i class='fi flaticon-menu' />
        </a>
        <a class="fs-lg d-lg-none" href="#" @click="switchSidebarMethod">
          <i class='fi flaticon-menu' />
        </a>
      </b-nav-item>
      <b-nav-item class="d-md-down-none">
        <a href="#" class="px-2">
          <i class='fi flaticon-flip' />
        </a>
      </b-nav-item>
      <b-nav-item class="d-md-down-none">
        <a href="#" class="px-2">
          <i class='fi flaticon-close' />
        </a>
      </b-nav-item>
    </b-nav>
    <b-nav>
      <b-form class="d-sm-down-none ml-5" inline>
        <b-form-group>
          <b-input-group class="input-group-no-border search-input">
            <template v-slot:prepend>
              <b-input-group-text><i class='fi flaticon-search-2'/></b-input-group-text>
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
        menu-class="notificationsWrapper py-0 animate__animated animate__animated-fast animate__fadeIn"
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
          <span>{{user.name || user.email || 'Philip smith'}}</span>
          <span class="ml-2 mr-2 circle badge-dark text-white fw-bold" style="padding: 13px 13px;">9</span>
          <i class='fi flaticon-arrow-down px-2' />
        </template>
        <Notifications />
      </b-nav-item-dropdown>
      <b-nav-item-dropdown id="v-step-2" class="settingsDropdown d-sm-down-none" no-caret right>
        <template slot="button-content">
          <i class='fi flaticon-settings-10 px-3' />
        </template>
        <b-dropdown-item><i class='fi flaticon-person px-3 mr-3' /> My Account</b-dropdown-item>
        <b-dropdown-divider />
        <b-dropdown-item><i class='fi flaticon-calendar-9 px-3 mr-3' />Calendar</b-dropdown-item>
        <b-dropdown-item href="/inbox"><i class='fi flaticon-email px-3 mr-3' />
          Inbox &nbsp;&nbsp;<b-badge variant="dark" pill class="animate__animated animate__bounceIn" style="padding: 4px 9px">9</b-badge>
        </b-dropdown-item>
        <b-dropdown-divider />
        <b-dropdown-item-button @click="logoutUser">
          <i class="fi flaticon-power-1 px-3 mr-3" /> Log Out
        </b-dropdown-item-button>
      </b-nav-item-dropdown>
    </b-nav>
  </b-navbar>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import avatarImage from '@/assets/people/a7.png';
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
      'switchSidebar',
      'changeSidebarActive',
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
  }
};
</script>

<style src="./Header.scss" lang="scss"></style>
