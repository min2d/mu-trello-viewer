<template>
  <div>
    <div v-for="listsByMember in listsByMembers" :key="listsByMember.id" style="display:flex; margin-bottom:3em;">
      <div style="width:50px;flex-shrink:0;font-weight:bold;">
        {{ listsByMember.displayName }}
      </div>
      <div v-for="list in listsByMember.lists" :key="list.id" style="padding:0 .5em; .5em .5em">
        <div class="title is-5">
          {{ list.name }}
        </div>
        <div v-for="card in list.cards" :key="card.id" style="width:300px;padding:.3em;background-color:#fff;margin:.3em 0;">
          <span v-for="label in card.labels" :key="label.id" :style="labelColorStyles[label.color]" class="alt-label">
            {{ label.name }}
          </span>
          <div>
            {{ card.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapState, mapActions } from 'vuex'
export default {
  computed: {
    ...mapGetters('lists', ['listsByMembers']),
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
  .alt-label{
    font-weight: bold;
    font-size: 90%;
    padding: 0 .3em;
    border-radius: .2em;
  }
</style>
