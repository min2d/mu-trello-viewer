<template>
  <b-navbar type="is-primary" fixed-top="true">
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img src="~/assets/brand.png">
      </b-navbar-item>
    </template>
    <template slot="start">
      <b-navbar-item tag="router-link" :to="{ path: '/lists' }">
        lists
      </b-navbar-item>
      <b-navbar-item tag="router-link" :to="{ path: '/lists_by_members' }">
        members-lists
      </b-navbar-item>
      <b-navbar-item tag="router-link" :to="{ path: '/settings' }">
        settings
      </b-navbar-item>
      <b-navbar-item tag="router-link" :to="{ path: '/members' }">
        members
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
