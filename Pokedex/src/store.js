import { createStore } from 'vuex';

export default createStore({
  state: {
    loggedIn: false,
  },
  mutations: {
    setLoggedIn(state, value) {
      state.loggedIn = value;
    },
  },
  actions: {
    login({ commit }, { username, password }) {
      if (username === 'usuario' && password === 'contraseña') {
        commit('setLoggedIn', true);
        return true;
      } else {
        commit('setLoggedIn', false);
        return false;
      }
    },
    logout({ commit }) {
      commit('setLoggedIn', false);
    },
  },
  getters: {
    isLoggedIn: (state) => state.loggedIn,
  },
});
