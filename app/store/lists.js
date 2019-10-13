import { ToastProgrammatic as Toast } from 'buefy'
export const state = () => ({
  lists: []
})
const _mutations = {
}
const setterKeys = [
  'lists'
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
  async fetchLists ({ commit, state, rootState }) {
    if (!rootState.settings.selectedBoard) {
      Toast.open('error: set base board at setting')
      return
    }
    try {
      const items = await this.$axios.$get(
        `/boards/${rootState.settings.selectedBoard.id}/lists`, {
          params: {
            cards: 'open',
            card_fields: 'all',
            filter: 'open',
            fields: 'all',
            key: rootState.settings.lastUsedApiKey,
            token: rootState.settings.lastUsedToken
          }
        }
      )
      // リストが前提となるものはすべてクリア(TODO)

      commit('setLists', items)

      Toast.open('Cards ready!')
    } catch (error) {
      Toast.open('error: something went wrong')
    }
  }

}
