<template>
<div :class="{root: true, chatOpen, sidebarClose, sidebarStatic}">
  <Sidebar />
  <Helper />
  <div class="wrap">
    <Header />
    <Chat />
    <v-touch class="content" @swipe="handleSwipe" :swipe-options="{direction: 'horizontal'}">
      <transition name="router-animation">
        <router-view />
      </transition>
      <footer class="contentFooter">
        Sing App Vue Admin Dashboard Template - Made by <a href="https://flatlogic.com" rel="nofollow noopener noreferrer" target="_blank">Flatlogic</a>
        </footer>
    </v-touch>
  </div>
</div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

import Sidebar from '@/components/Sidebar/Sidebar';
import Header from '@/components/Header/Header';
import Chat from '@/components/Chat/Chat';
import Helper from '@/components/Helper/Helper';

import './Layout.scss';

export default {
  name: 'Layout',
  components: { Sidebar, Header, Chat, Helper },
  methods: {
    ...mapActions(
      'layout', ['switchSidebar', 'handleSwipe', 'changeSidebarActive'],
    ),
  },
  computed: {
    ...mapState('layout', {
      sidebarClose: state => state.sidebarClose,
      sidebarStatic: state => state.sidebarStatic,
      chatOpen: state => state.chatOpen,
    }),
  },
  created() {
    const staticSidebar = JSON.parse(localStorage.getItem('sidebarStatic'));

    if (staticSidebar) {
      this.$store.state.layout.sidebarStatic = true;
    } else if (!this.sidebarClose) {
      setTimeout(() => {
        this.switchSidebar(true);
        this.changeSidebarActive(null);
      }, 2500);
    }
  },
};
</script>

<style src="./Layout.scss" lang="scss" />
