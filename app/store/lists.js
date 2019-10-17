import { ToastProgrammatic as Toast } from 'buefy'
export const state = () => ({
  lists: []
})

export const getters = {
  lists (state, getters, rootState) {
    const lists = JSON.parse(JSON.stringify(state.lists))
    lists.forEach((list) => {
      list.cards.forEach((card) => {
        card.labels = []
        card.idLabels.forEach((idLabel) => {
          if (rootState.labels.labels[idLabel]) {
            card.labels.push({
              id: idLabel,
              ...rootState.labels.labels[idLabel]
            })
          } else {
            card.labels.push({
              id: idLabel,
              name: '***',
              color: 'gray'
            })
          }
        })
        card.members = []
        card.idMembers.forEach((idMember) => {
          if (rootState.members.members[idMember]) {
            card.members.push({
              id: idMember,
              ...rootState.members.members[idMember]
            })
          } else {
            card.members.push({
              id: idMember,
              name: '***',
              displayName: '***'
            })
          }
        })
      })
    })
    return lists
  }
}

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
  async fetchLists ({ commit, state, rootState, dispatch }) {
    if (!rootState.settings.selectedBoard) {
      Toast.open('error: set base board at setting')
      return
    }
    try {
      commit('labels/clearLabels', null, { root: true })
      await dispatch('labels/fetchLabels', null, { root: true })

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

      commit('setLists', items)

      Toast.open('Cards ready!')
    } catch (error) {
      Toast.open('error: something went wrong')
    }
  }

}
