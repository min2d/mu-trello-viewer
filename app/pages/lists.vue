<template>
  <b-tabs>
    <b-tab-item v-for="list in lists" :key="list.id" :label="list.name">
      <template slot="header">
        <span> {{ list.name }} <b-tag rounded> {{ list.cards.length }} </b-tag> </span>
      </template>
      <b-table :data="list.cards" :bordered="true">
        <template slot-scope="props">
          <b-table-column label="members" width="150">
            <span v-for="member in props.row.members" :key="member.id" style="padding-right:.3em;">{{ member.displayName }}</span>
          </b-table-column>
          <b-table-column label="Label">
            <span v-for="label in props.row.labels" :key="label.id" :style="labelColorStyles[label.color]" class="alt-label">{{ label.name }}</span>
          </b-table-column>
          <b-table-column label="Name">
            {{ props.row.name }}
          </b-table-column>
          <b-table-column label="description" class="description">
            <b-collapse :open="false" :aria-id="'clps' + props.row.id">
              <a
                v-if="props.row.desc"
                slot="trigger"
                :aria-controls="'clps' + props.row.id"
              >
                {{ props.row.desc.substring(0,50) }}
              </a>
              <div class="notification">
                <div class="content">
                  {{ props.row.desc }}
                </div>
              </div>
            </b-collapse>
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
import { mapActions, mapState, mapGetters } from 'vuex'

export default {
  layout: 'wide',
  components: {
  },
  computed: {
    ...mapGetters('lists', ['lists']),
    ...mapState('members', ['members']),
    ...mapState('labels', ['labels']),
    ...mapState('settings', ['labelColorStyles'])
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
  &.description{
    font-size:75%;
  }
}
.alt-label{
  font-weight: bold;
  padding: 0 .3em;
  border-radius: .2em;
}

</style>
