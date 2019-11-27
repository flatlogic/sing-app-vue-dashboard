import isScreen from '@/core/screenHelper';
import config from '../config';

export const DashboardThemes = {
  LIGHT: "light",
  DARK: "dark"
};

export const MessageStates = {
  READ: "read",
  NEW: "new",
  HIDDEN: "hidden"
};

export const NavbarTypes = {
  STATIC: "static",
  FLOATING: "floating",
};

export const SidebarTypes = {
  SOLID: "solid",
  TRANSPARENT: "transparent",
};

export const LayoutComponents = {
  NAVBAR: "navbar",
  SIDEBAR: "sidebar",
};

Object.freeze(DashboardThemes);
Object.freeze(MessageStates);
Object.freeze(NavbarTypes);
Object.freeze(SidebarTypes);
Object.freeze(LayoutComponents);

export default {
  namespaced: true,
  state: {
    sidebarClose: false,
    sidebarStatic: false,
    sidebarColor: config.app.colors.sidebar,
    navbarColor: config.app.colors.navbar,
    navbarType: NavbarTypes.STATIC,
    sidebarType: SidebarTypes.SOLID,
    sidebarActiveElement: null,
    chatOpen: false,
    dashboardTheme: DashboardThemes.DARK,
    chatNotificationIcon: false,
    chatNotificationPopover: false,
    chatNotificationMessageState: MessageStates.HIDDEN,
  },
  mutations: {
    initApp(state) {
      setTimeout(() => {
        state.chatNotificationIcon = true;
        state.chatNotificationPopover = true;
        setTimeout(() => {
          state.chatNotificationPopover = false;
        }, 1000 * 6);
      }, 1000 * 4);
    },
    readMessage(state) {
      if (state.chatNotificationMessageState !== MessageStates.READ)
      state.chatNotificationMessageState = MessageStates.READ;
    },
    toggleChat(state) {
      state.chatOpen = !state.chatOpen;
      if (state.chatNotificationIcon) {
        state.chatNotificationIcon = false;
      }

      if (state.chatNotificationMessageState === MessageStates.HIDDEN) {
        setTimeout(() => {
          state.chatNotificationMessageState = MessageStates.NEW;
        }, 1000);
      }
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
      if ('ontouchstart' in window) {
        if (e.direction === 4 && !state.chatOpen) {
          state.sidebarClose = false;
        }

        if (e.direction === 2 && !state.sidebarClose) {
          state.sidebarClose = true;
          return;
        }

        state.chatOpen = e.direction === 2;
      }
    },
    changeSidebarActive(state, index) {
      state.sidebarActiveElement = index;
    },
    changeTheme(state, payload) {
      state.dashboardTheme = payload;
    },
    updateLayoutComponentType(state, payload) {
      state[payload.component + 'Type'] = payload.type;
    },
    updateLayoutComponentColor(state, payload) {
      state[payload.component + 'Color'] = payload.color;
      document.querySelector('.root.sing-dashboard').style.setProperty(`--${payload.component}-bg`, payload.color);
    }
  },
  actions: {
    initApp({commit}) {
      commit('initApp');
    },
    readMessage({commit}) {
      commit('readMessage');
    },
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
      commit('changeTheme', theme);
    },
    updateLayoutComponentType({commit}, payload) {
      commit('updateLayoutComponentType', payload)
    },
    updateLayoutComponentColor({commit}, payload) {
      commit('updateLayoutComponentColor', payload)
    },
  },
};
