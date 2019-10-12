export const state = () => ({
  apiKey: null,
  token: null
})
export const mutations = {
  setApiKey (state, value) {
    state.apiKey = value
  },
  setToken (state, value) {
    state.token = value
  }
}
