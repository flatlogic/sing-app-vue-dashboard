import {user, chats, users} from '../pages/Chat/mock';
import moment from 'moment';

export default {
  namespaced: true,
  state: {
    user,
    chats,
    users,
    activeChatId: chats[2].id,
    sendingMessage: false,
  },
  mutations: {
    SET_ACTIVE_CHAT(state, payload) {
      state.activeChatId = state.chats.find(chat => chat.id === payload).id;
    },
    NEW_MESSAGE_SUCCESS(state, payload) {
      let chat = state.chats.find(chat => chat.id === state.activeChatId);
      chat.messages.push(payload.message);
      state.sendingMessage = false;
    },
    NEW_MESSAGE_REQUEST(state) {
      state.sendingMessage = true;
    }
  },
  actions: {
    setActiveChat({commit}, payload) {
      commit('SET_ACTIVE_CHAT', payload)
    },
    newMessageRequest({dispatch, commit, state}, payload) {
      if (!payload.message) return;
      commit('NEW_MESSAGE_REQUEST');
      setTimeout(() => {
        let message = {
          id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
          text: payload.message,
          timestamp: moment(),
          userId: state.user.id
        };
        dispatch('newMessageSuccess', {chatId: state.activeChatId, message});
      }, 1000)
    },
    newMessageSuccess({commit}, payload) {
      commit('NEW_MESSAGE_SUCCESS', payload);
    }
  },
};
