import axios from "axios";
import router from '../Routes';

export default {
  namespaced: true,
  state: {
    isFetching: false,
    errorMessage: ''
  },
  mutations: {
    REGISTER_REQUEST(state) {
      state.isFetching = true;
    },
    REGISTER_SUCCESS(state) {
      state.isFetching = false;
      state.errorMessage = '';
    },
    REGISTER_FAILURE(state, payload) {
      state.isFetching = false;
      state.errorMessage = payload;
    },
  },
  actions: {
    registerUser({dispatch}, payload) {
      dispatch('requestRegister');
      const creds = payload.creds;
      if (creds.email.length > 0 && creds.password.length > 0) {
        axios.post("/user/signup", creds).then(() => {
          dispatch('receiveRegister');
          payload.$toaster.success("You've been registered successfully");
          router.push('/login');
        }).catch(err => {
          dispatch('registerError', err.response.data);
        })
      } else {
        dispatch('registerError', 'Something was wrong. Try again');
      }
    },
    requestRegister({commit}) {
      commit('REGISTER_REQUEST');
    },
    receiveRegister({commit}) {
      commit('REGISTER_SUCCESS');
    },
    registerError({commit}, payload) {
      commit('REGISTER_FAILURE', payload);
    },
  },
};
