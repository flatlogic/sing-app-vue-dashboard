import isScreen from '@/core/screenHelper';
import config from '../config';
import chroma from 'chroma-js';

export const NavbarTypes = {
  STATIC: "static",
  FLOATING: "floating",
};

export const NavbarColorSchemes = {
  LIGHT: "light",
  DARK: "dark",
};

export const SidebarTypes = {
  SOLID: "solid",
  TRANSPARENT: "transparent",
};

export const LayoutComponents = {
  NAVBAR: "navbar",
  SIDEBAR: "sidebar",
};

Object.freeze(NavbarTypes);
Object.freeze(NavbarColorSchemes);
Object.freeze(SidebarTypes);
Object.freeze(LayoutComponents);

function updateRootCss(cssVar, value) {
  document.querySelector('.root.sing-dashboard').style.setProperty(cssVar, value);
}

export function updateTourPosition(tour) {
  if (!tour) return;
  let interval = setInterval(() => {
    tour.scheduleUpdate();
  });
  setTimeout(() => {
    clearInterval(interval)
  }, config.app.sidebarTransitionTime + 100)
}

export default {
  namespaced: true,
  state: {
    sidebarClose: false,
    sidebarStatic: false,
    sidebarColorName: config.app.themeColors[0][0],
    navbarColorName: config.app.themeColors[1][0],
    navbarColorScheme: NavbarColorSchemes.LIGHT,
    navbarType: NavbarTypes.STATIC,
    sidebarType: SidebarTypes.SOLID,
    sidebarActiveElement: null,
    helperOpened: false,
    tourInstance: null,
  },
  mutations: {
    toggleSidebar(state) {
      const nextState = !state.sidebarStatic;

      localStorage.sidebarStatic = nextState;
      state.sidebarStatic = nextState;

      if (!nextState && (isScreen('lg') || isScreen('xl'))) {
        state.sidebarClose = true;
      }
      updateTourPosition(state.tourInstance);
    },
    switchSidebar(state, value) {
      if (value) {
        state.sidebarClose = value;
      } else {
        state.sidebarClose = !state.sidebarClose;
      }
      updateTourPosition(state.tourInstance);
    },
    handleSwipe(state, e) {
      if ('ontouchstart' in window) {
        if (e.direction === 4) {
          state.sidebarClose = false;
        }

        if (e.direction === 2 && !state.sidebarClose) {
          state.sidebarClose = true;
        }
      }
    },
    changeSidebarActive(state, index) {
      state.sidebarActiveElement = index;
    },
    updateLayoutComponentType(state, payload) {
      state[payload.component + 'Type'] = payload.type;
    },
    updateSidebarColor(state, payload) {
      state.sidebarColorName = payload.color[0];
    },
    updateNavbarColor(state, payload) {
      let colorName = payload.color[0];
      let colorValue = payload.color[1];
      state.navbarColorName = colorName;
      updateRootCss('--navbar-bg', colorValue);
      state.navbarColorScheme = chroma(colorValue).luminance() < 0.4 ? NavbarColorSchemes.DARK : NavbarColorSchemes.LIGHT;
    },
    toggleHelper(state, payload) {
      state.helperOpened = payload;
      updateTourPosition(state.tourInstance);

    },
    applyTourStep(state, payload) {
      state.tourInstance = payload;
    }
  },
  actions: {
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
      if (payload.component === LayoutComponents.SIDEBAR) {
        commit('updateSidebarColor', payload)
      } else {
        commit('updateNavbarColor', payload)
      }
    },
    toggleHelper({commit}, payload) {
      commit('toggleHelper', payload)
    },
    applyTourStep({commit}, payload) {
      commit('applyTourStep', payload)
    }
  },
};
