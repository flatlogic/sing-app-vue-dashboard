import Vue from 'vue';
import Vuex from 'vuex';

import layout from './layout';
import auth from './auth';
import register from './register';
import dashboard from './dashboard';
import products from './products';
import chat from './chat';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    layout,
    auth,
    register,
    dashboard,
    products,
    chat
  },
});
