
import { ToastProgrammatic as Toast } from 'buefy'
export const state = () => ({
  apiKey: null,
  token: null,
  name: null,
  lastUsedApiKey: null,
  lastUsedToken: null,
  lastUsedName: null,
  boards: [],
  selectedBoard: null,
  labelColorStyles: {
    green: { backgroundColor: 'green', color: 'white' },
    blue: { backgroundColor: '#0079c2', color: 'white' },
    red: { backgroundColor: '#a73836', color: 'white' },
    yellow: { backgroundColor: '#ffdb4f' },
    black: { backgroundColor: '#4b4b6b', color: 'white' },
    orange: { backgroundColor: 'orange', color: 'white' },
    sky: { backgroundColor: '#33CCFF', color: 'white' },
    purple: { backgroundColor: '#8f76d6', color: 'white' },
    gray: {}
  }
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
    commit('labels/clearLabels', null, { root: true })
    dispatch('labels/fetchLabels', null, { root: true })
  }
}
