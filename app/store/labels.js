export const state = () => ({
  labels: {}
})
const _mutations = {
  setLabels (state, value) {
    value.forEach((item) => {
      if (!state.labels[item.id]) {
        state.labels[item.id] = { name: item.name, color: item.color }
      }
    })
  },
  clearLabels (state) {
    state.labels = {}
  }
}
export const mutations = _mutations

export const actions = {
  async fetchLabels ({ commit, state, rootState }) {
    if (!rootState.settings.selectedBoard) {
      console.error('label fetch failed: board is not ready')
      return
    }
    try {
      const items = await this.$axios.$get(
        `/boards/${rootState.settings.selectedBoard.id}/labels`, {
          params: {
            key: rootState.settings.lastUsedApiKey,
            token: rootState.settings.lastUsedToken
          }
        }
      )

      commit('setLabels', items)
    } catch (error) {
      console.error(error)
    }
  }

}
