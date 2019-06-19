import Vue from 'vue';
import Vuex from 'vuex';

import layout from './layout';
import auth from './auth';
import register from './register';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    layout,
    auth,
    register,
  },
});
