import Vue from 'vue';
import Vuex from 'vuex';

import UserStore from './user/user-state';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    UserStore,
  },
});
