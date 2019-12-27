import {user, groups, users} from '../pages/Chat/mock';
import moment from 'moment';

export default {
  namespaced: true,
  state: {
    user,
    groups,
    users,
    activeChatUser: users[0],
    sendingMessage: false,
  },
  mutations: {
    SET_ACTIVE_USER(state, payload) {
      state.activeChatUser = state.users.find(u => u.id === payload);
    },
    NEW_MESSAGE_SUCCESS(state, payload) {
      let dialog = state.user.dialogs.find(d => d.id === payload.dialogId);
      dialog.messages.push(payload.message);
      state.sendingMessage = false;
    },
    NEW_MESSAGE_REQUEST(state) {
      state.sendingMessage = true;
    }
  },
  actions: {
    setActiveUser({commit}, payload) {
      commit('SET_ACTIVE_USER', payload)
    },
    newMessageRequest({dispatch, commit}, payload) {
      if (!payload.message) return;
      commit('NEW_MESSAGE_REQUEST');
      setTimeout(() => {
        let message = {
          id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
          text: payload.message,
          timestamp: moment(),
          owner: true
        };
        dispatch('newMessageSuccess', {dialogId: payload.dialogId, message});
      }, 1000)
    },
    newMessageSuccess({commit}, payload) {
      commit('NEW_MESSAGE_SUCCESS', payload);
    }
  },
};
