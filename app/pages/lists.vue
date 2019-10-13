<template>
  <b-tabs>
    <b-tab-item v-for="list in lists" :key="list.id" :label="list.name">
      <b-table :data="list.cards">
        <template slot-scope="props">
          <b-table-column label="Name">
            {{ props.row.name }}
          </b-table-column>
          <b-table-column label="ID">
            {{ props.row.desc }}
          </b-table-column>
        </template>
        <template slot="empty">
          <section class="section">
            <div class="content has-text-grey has-text-centered">
              <p>No Data</p>
            </div>
          </section>
        </template>
        <template slot="header">
          <div style="height:0px" />
        </template>
      </b-table>
    </b-tab-item>
  </b-tabs>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  layout: 'wide',
  components: {
  },
  computed: {
    ...mapState('lists', ['lists'])

  },
  created () {
    this.fetchLists()
  },
  methods: {
    ...mapActions('lists', ['fetchLists'])
  }
}
</script>
<style lang="scss" scoped>
.b-tabs /deep/ .tab-content{
  padding:0;
}
.b-tabs /deep/ th{
  height: 0;
  padding:0;
}
.b-tabs /deep/ td{
  font-size:.9em;
}
</style>
