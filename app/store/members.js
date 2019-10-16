import { ToastProgrammatic as Toast } from 'buefy'
export const state = () => ({
  members: {}
})

export const getters = {
  membersArr (state) {
    return Object.keys(state.members).map((key) => {
      return {
        ...state.members[key],
        id: key
      }
    })
  }
}

class Member {
  constructor (name, color) {
    this.name = name
    this.color = color || 'gray'
    this.displayName = null
  }
}
const _mutations = {
  setMembers (state, value) {
    value.forEach((item) => {
      if (!state.members[item.id]) {
        state.members[item.id] = new Member(item.fullName)
      }
    })
  },
  clearMembers (state) {
    state.members = {}
  },
  setMemberDisplayName (state, { id, dName }) {
    state.members[id].displayName = dName
  }
}
const setterKeys = [
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
  async fetchMembers ({ commit, state, rootState }) {
    if (!rootState.settings.selectedBoard) {
      Toast.open('error: set base board at setting')
      return
    }
    try {
      const items = await this.$axios.$get(
        `/boards/${rootState.settings.selectedBoard.id}/members`, {
          params: {
            key: rootState.settings.lastUsedApiKey,
            token: rootState.settings.lastUsedToken
          }
        }
      )

      commit('setMembers', items)

      Toast.open('Members ready! Check the "members" page!')
    } catch (error) {
      Toast.open('error: something went wrong')
    }
  }

}
