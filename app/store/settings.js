
import { ToastProgrammatic as Toast } from 'buefy'
export const state = () => ({
  apiKey: null,
  token: null,
  name: null,
  lastUsedApiKey: null,
  lastUsedToken: null,
  lastUsedName: null,
  boards: []
})

const _mutations = {
}
const setterKeys = [
  'apiKey',
  'token',
  'name',
  'lastUsedApiKey',
  'lastUsedToken',
  'lastUsedName',
  'boards'
]
// 単純なsetter
setterKeys.forEach((item) => {
  _mutations[`set${item.charAt(0).toUpperCase() + item.slice(1)}`] = function (state, value) {
    state[item] = value
  }
})

export const mutations = _mutations

export const actions = {
  async fetchBoards ({ commit, state }) {
    try {
      const items = await this.$axios.$get(
        `/members/${state.name}/boards`, {
          params: {
            filter: 'all',
            fields: 'all',
            lists: 'none',
            memberships: 'none',
            organization: 'false',
            organization_fields: 'name,displayName',
            key: state.apiKey,
            token: state.token
          }
        }
      )
      // ボード、リスト、すべての情報をクリア(TODO)
      commit('setBoards', items)
      commit('setLastUsedApiKey', state.apiKey)
      commit('setLastUsedToken', state.token)
      Toast.open('boards ready!')
    } catch (error) {
      Toast.open('error: check the input values are right')
    }
  }
}
