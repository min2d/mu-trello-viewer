<template>
  <div class="card">
    <div class="card-header">
      <div class="card-header-title">
        fill below
      </div>
    </div>
    <div class="card-content">
      <b-field label="api key">
        <b-input v-model="apiKey" />
      </b-field>
      <b-field label="token">
        <b-input v-model="token" />
      </b-field>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    apiKey: {
      get () {
        return this.$store.state.settings.apiKey
      },
      set (value) {
        this.$store.commit('settings/setApiKey', value)
      }
    },
    token: {
      get () {
        return this.$store.state.settings.token
      },
      set (value) {
        this.$store.commit('settings/setToken', value)
      }
    }
  }
}
</script>
