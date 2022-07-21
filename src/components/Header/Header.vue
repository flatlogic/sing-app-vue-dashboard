<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <b-navbar class="app-header d-print-none" :class="[navbarTypeClass, 'header-' + navbarColorScheme]">
    <b-nav>
      <b-nav-item id="v-step-0">
        <a class="d-md-down-none px-2" href="#" @click="toggleSidebarMethod">
          <img
              :src="Menu"
              alt="menu"
          />
        </a>
        <a class="fs-lg d-lg-none" href="#" @click="switchSidebarMethod">
          <img
              :src="Menu"
              alt="menu"
          />
        </a>
      </b-nav-item>
      <b-nav-item class="d-md-down-none">
        <a href="#" class="px-2">
          <img
            :src="Exchange"
            alt="exchange"
          />
        </a>
      </b-nav-item>
      <b-nav-item class="d-md-down-none">
        <a href="#" class="px-2">
          <img
              :src="Cross"
              alt="cross"
          />
        </a>
      </b-nav-item>
    </b-nav>
    <b-nav>
      <b-form class="d-sm-down-none ms-5 my-auto" inline>
        <b-form-group>
          <b-input-group class="input-group-no-border search-input">
            <template v-slot:prepend>
              <b-input-group-text>
                <div>
                  <img
                      :src="Search"
                      alt="search"
                  />
                </div>
              </b-input-group-text>
            </template>
            <b-form-input id="search-input" placeholder="Search Dashboard" />
          </b-input-group>
        </b-form-group>
      </b-form>
    </b-nav>
    <a  class="navbarBrand d-md-none">
      <i class="fa fa-circle text-primary me-sm-1" />
      <i class="fa fa-circle text-danger" />
      sing
      <i class="fa fa-circle text-danger me-sm-1" />
      <i class="fa fa-circle text-primary" />
    </a>
    <b-nav class="ms-auto">
      <b-nav-item-dropdown
        @hide="dropdown = false"
        @show="dropdown = true"
        id="v-step-1"
        class="notificationsMenu d-md-down-none ms-2"
        menu-class="notificationsWrapper py-0 animate__animated animate__animated-fast animate__fadeIn"
        right>
        <template slot="button-content">
          <span class="avatar rounded-circle thumb-sm float-left me-2">
            <img
                v-if="user.avatar || user.email === 'admin@flatlogic.com'"
                class="rounded-circle"
                :src="user.avatar || avatarImage"
                :alt="user.name"
            />
            <span v-else>{{firstUserLetter}}</span>
          </span>
          <span>{{user.name || user.email || 'Philip smith'}}</span>
          <span class="mx-2 circle bg-dark text-white fw-bold" style="padding: 13px 13px;">9</span>
<!--          <i :class="['fi flaticon-arrow-down px-2 dropdown-arrow', {active: dropdown}]" />-->
          <img class="px-2 dropdown-arrow"
               :class="{active: dropdown}"
               :src="CaretDown"
               alt="caretDown"
          />
        </template>
        <Notifications />
      </b-nav-item-dropdown>
      <b-nav-item-dropdown id="v-step-2" class="settingsDropdown d-sm-down-none" no-caret right>
        <template slot="button-content">
<!--          <i class='fi flaticon-settings-10 px-3' />-->
          <img class="px-2"
               :src="Settings"
               alt="settings"
          />
        </template>
        <b-dropdown-item>
          <img :src="User"
               class="px-2 mr-3"
               alt="user"
          />
            My Account
        </b-dropdown-item>
        <b-dropdown-divider />
        <b-dropdown-item>
          <img :src="Document"
               class="px-2 mr-2"
               alt="document"
          />
          Calendar
        </b-dropdown-item>
        <b-dropdown-item href="/inbox">
          <img :src="Envelope"
               class="px-2 mr-2"
               alt="envelope"
          />
          Inbox &nbsp;&nbsp;
          <span class="mx-2 circle bg-dark text-white fw-bold" style="padding: 4px 9px">9</span>
        </b-dropdown-item>
        <b-dropdown-divider />
        <b-dropdown-item-button @click="logoutUser">
          <img :src="Cancel"
               class="px-2 mr-2"
               alt="cancel"
          />
          Log Out
        </b-dropdown-item-button>
      </b-nav-item-dropdown>
    </b-nav>
  </b-navbar>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import avatarImage from '@/assets/people/a7.png';
import Menu from '@/assets/sidebar/Fill/Menu.svg';
import Exchange from '@/assets/sidebar/Fill/Exchange.svg';
import Cross from '@/assets/sidebar/Fill/Cross.svg';
import Search from '@/assets/sidebar/Fill/Search.svg';
import CaretDown from '@/assets/sidebar/Fill/Caret down.svg';
import Settings from '@/assets/sidebar/Outline/Settings-alt.svg';
import User from '@/assets/sidebar/Outline/User.svg';
import Document from '@/assets/sidebar/Outline/Document.svg';
import Envelope from '@/assets/sidebar/Outline/Envelope.svg';
import Cancel from '@/assets/sidebar/Outline/Cancel.svg';
import Notifications from '@/components/Notifications/Notifications';

export default {
  name: 'Header',
  components: { Notifications },
  data() {
    return {
      avatarImage,
      Menu,
      Exchange,
      Cross,
      Search,
      CaretDown,
      Settings,
      User,
      Document,
      Envelope,
      Cancel,
      dropdown: false,
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
