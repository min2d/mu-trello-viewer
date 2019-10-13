<template>
  <b-navbar type="is-primary">
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        muTrelloViewer
      </b-navbar-item>
    </template>
    <template slot="start">
      <b-navbar-item href="/settings">
        settings
      </b-navbar-item>
      <b-navbar-item href="/lists">
        lists
      </b-navbar-item>
    </template>
  </b-navbar>
</template>
<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState('settings', ['userId'])
  },
  methods: {
    ...mapActions('settings', ['clearAll'])
  }
}
</script>
