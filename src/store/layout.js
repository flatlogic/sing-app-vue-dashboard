import $ from 'jquery';
import isScreen from '@/core/screenHelper';

export const DashboardThemes = {
  LIGHT: "light",
  DARK: "dark"
};

Object.freeze(DashboardThemes);

export default {
  namespaced: true,
  state: {
    sidebarClose: false,
    sidebarStatic: false,
    sidebarActiveElement: null,
    chatOpen: false,
    dashboardTheme: DashboardThemes.DARK,
  },
  mutations: {
    toggleChat(state) {
      state.chatOpen = !state.chatOpen;
      $('.chat-notification-sing').remove();

      setTimeout(() => {
      // demo: add class & badge to indicate incoming messages from contact
      // .js-notification-added ensures notification added only once
        $('#chat-sidebar-user-group').find('.list-group-item:first-child:not(.js-notification-added)')
          .addClass('active js-notification-added')
          .find('.fa-circle')
          .after('<span class="badge badge-danger badge-pill '
          + 'float-right animated bounceInDown">3</span>');
      }, 1000);
    },
    toggleSidebar(state) {
      const nextState = !state.sidebarStatic;

      localStorage.sidebarStatic = nextState;
      state.sidebarStatic = nextState;

      if (!nextState && (isScreen('lg') || isScreen('xl'))) {
        state.sidebarClose = true;
      }
    },
    switchSidebar(state, value) {
      if (value) {
        state.sidebarClose = value;
      } else {
        state.sidebarClose = !state.sidebarClose;
      }
    },
    handleSwipe(state, e) {
      if (e.direction === 4 && !state.chatOpen) {
        state.sidebarClose = false;
      }

      if (e.direction === 2 && !state.sidebarClose) {
        state.sidebarClose = true;
        return;
      }

      state.chatOpen = e.direction === 2;
    },
    changeSidebarActive(state, index) {
      state.sidebarActiveElement = index;
    },
    changeTheme(state, payload) {
      state.dashboardTheme = payload;
    }
  },
  actions: {
    toggleChat({ commit }) {
      commit('toggleChat');
    },
    toggleSidebar({ commit }) {
      commit('toggleSidebar');
    },
    switchSidebar({ commit }, value) {
      commit('switchSidebar', value);
    },
    handleSwipe({ commit }, e) {
      commit('handleSwipe', e);
    },
    changeSidebarActive({ commit }, index) {
      commit('changeSidebarActive', index);
    },
    changeTheme({commit}, theme) {
        // eslint-disable-next-line
        console.log(theme);
      commit('changeTheme', theme);
    }
  },
};
