import {user, groups, users} from '../pages/Chat/mock';

export default {
  namespaced: true,
  state: {
    user,
    groups,
    users,
    activeChat: 1
  },
  mutations: {
    LOGIN_FAILURE(state, payload) {
      state.isFetching = false;
      state.errorMessage = payload;
    },

  },
  actions: {
    loginUser({commit}, payload) {

    },
  },
};
