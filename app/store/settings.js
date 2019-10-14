
import { ToastProgrammatic as Toast } from 'buefy'
export const state = () => ({
  apiKey: null,
  token: null,
  name: null,
  lastUsedApiKey: null,
  lastUsedToken: null,
  lastUsedName: null,
  boards: [],
  selectedBoard: null
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
  'boards',
  'selectedBoard'
]
// 単純なsetter
setterKeys.forEach((item) => {
  _mutations[`set${item.charAt(0).toUpperCase() + item.slice(1)}`] = function (state, value) {
    state[item] = value
  }
  _mutations[`clear${item.charAt(0).toUpperCase() + item.slice(1)}`] = function (state) {
    if (Array.isArray(state[item])) {
      state[item] = []
    } else {
      state[item] = null
    }
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
      // メンバー情報は自分でボタンを押す以外でクリアしない
      commit('clearBoards')
      commit('clearSelectedBoard')
      commit('setBoards', items)
      commit('setLastUsedApiKey', state.apiKey)
      commit('setLastUsedToken', state.token)
      commit('setLastUsedName', state.name)
      commit('lists/clearLists', null, { root: true })

      Toast.open('boards ready!')
    } catch (error) {
      Toast.open('error: check the input values are right')
    }
  },
  setSelectedBoard ({ commit, dispatch }, value) {
    commit('setSelectedBoard', value)
    dispatch('members/fetchMembers', null, { root: true })
  }
}
