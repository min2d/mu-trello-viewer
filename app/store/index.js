import createPersistedState from 'vuex-persistedstate'
export const actions = {
  nuxtClientInit ({ commit, state, dispatch }, { req }) {
    createPersistedState()(this)
  }
}
