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
      <b-field label="name">
        <b-input v-model="name" />
      </b-field>
    </div>
    <div class="card-content">
      <div>
        <p>api key last used: <code>{{ lastUsedApiKey }}</code></p>
        <p>if you want to use another one, change api key and click this:</p>
      </div>
      <button class="button is-primary" @click="fetchBoards">
        get boards
      </button>
    </div>
    <div class="card-content">
      <div>
        <p>viewer based on: <code>{{ selectedBoard ? selectedBoard.name : 'nothing!' }}</code></p>
        <p>to change another one, click "use this board"</p>
      </div>
      <b-table :data="boards">
        <template slot-scope="props">
          <b-table-column label="Name">
            {{ props.row.name }}
          </b-table-column>
          <b-table-column label="ID">
            {{ props.row.id }}
          </b-table-column>
          <b-table-column>
            <button class="button is-primary" @click="setSelectedBoard(props.row)">
              use this board
            </button>
          </b-table-column>
        </template>
        <template slot="empty">
          <section class="section">
            <div class="content has-text-grey has-text-centered">
              <p>No Data</p>
            </div>
          </section>
        </template>
      </b-table>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
  data () {
    return {
    }
  },
  computed: {
    ...mapState('settings', ['lastUsedApiKey', 'lastUsedToken', 'boards', 'selectedBoard']),
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
    },
    name: {
      get () {
        return this.$store.state.settings.name
      },
      set (value) {
        this.$store.commit('settings/setName', value)
      }
    }
  },
  methods: {
    ...mapActions('settings', ['fetchBoards', 'setSelectedBoard'])
  }
}
</script>
