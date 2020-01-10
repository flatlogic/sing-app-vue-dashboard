import {user, chats, users} from '../pages/Chat/mock';
import moment from 'moment';

export const MobileChatStates = {
  LIST: 'list',
  CHAT: 'chat',
  INFO: 'info'
};

Object.freeze(MobileChatStates);

export default {
  namespaced: true,
  state: {
    user,
    chats,
    users,
    activeChatId: chats[3].id,
    sendingMessage: false,
    mobileState: MobileChatStates.CHAT
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
    },
    CHANGE_MOBILE_STATE(state, payload) {
      state.mobileState = payload;
      if (payload === MobileChatStates.LIST) {
        state.activeChatId = null;
      }
    }
  },
  actions: {
    setActiveChat({commit, dispatch}, payload) {
      commit('SET_ACTIVE_CHAT', payload);
      dispatch('changeMobileState', MobileChatStates.CHAT);
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
    },
    changeMobileState({commit}, payload) {
      commit('CHANGE_MOBILE_STATE', payload);
    }
  },
};
