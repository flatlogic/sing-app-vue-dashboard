import {user, groups, users} from '../pages/Chat/mock';

export default {
  namespaced: true,
  state: {
    user,
    groups,
    users,
    activeChatUser: users[0]
  },
  mutations: {
    SET_ACTIVE_USER(state, payload) {
      state.activeChatUser = state.users.find(u => u.id === payload);
    },

  },
  actions: {
    setActiveUser({commit}, payload) {
      commit('SET_ACTIVE_USER', payload)
    },
  },
};
