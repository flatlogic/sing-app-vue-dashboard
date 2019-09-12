import axios from "axios";
import config from "../config";
import mock from "../pages/Dashboard/mock";

export default {
  namespaced: true,
  state: {
    visits: {},
    performance: {sdk: {}, integration: {}},
    server: {1: {}, 2: {}},
    revenue: [],
    mainChart: [],
    isReceiving: false
  },
  mutations: {
    RECEIVED_DATA_SUCCESS(state, payload) {
      const {visits, performance, server, revenue, mainChart} = payload;
      state = Object.assign(state, {
        visits,
        performance,
        server,
        revenue,
        mainChart,
        isReceiving: false
      })
    },
    RECEIVING_DATA(state) {
      state.isReceiving = true;
    },
  },
  actions: {
    receiveDataRequest({dispatch}) {
      if (!config.isBackend) {
        dispatch('receivingData');
        new Promise((resolve) => {resolve(mock.backendData)}).then(data => {
          dispatch('receiveDataSuccess', data);
        })

      }

      else {
        dispatch('receivingData');
        axios.get('/analytics').then(res => {
          dispatch('receiveDataSuccess', res.data);
        })
      }
    },
    receiveDataSuccess({commit}, payload) {
      commit('RECEIVED_DATA_SUCCESS', payload);
    },
    receivingData({commit}) {
      commit('RECEIVING_DATA');
    },
  },
};
