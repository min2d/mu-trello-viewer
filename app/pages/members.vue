<template>
  <div class="card">
    <div class="card-content">
      <div>
        <b-icon icon="alert" />Name is the name fetched when board set.
      </div>
      <button class="button is-warning" @click="clearMembers">
        clear all
      </button>
      <b-table :data="members">
        <template slot-scope="props">
          <b-table-column label="ID">
            {{ props.row.id }}
          </b-table-column>
          <b-table-column label="Name">
            {{ props.row.name }}
          </b-table-column>
          <b-table-column label="Display name">
            <b-input :value="props.row.displayName" @input="setMemberDisplayName({id:props.row.id,dName:$event})" />
          </b-table-column>
        </template>
      </b-table>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  computed: {
    ...mapGetters('members', ['members'])
  },
  methods: {
    ...mapMutations('members', ['setMemberDisplayName', 'clearMembers'])
  }
}
</script>
