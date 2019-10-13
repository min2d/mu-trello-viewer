<template>
  <div>
    <AppNavigation />
    <section>
      <div>
        <nuxt />
      </div>
    </section>
  </div>
</template>

<script>
import AppNavigation from '~/components/AppNavigation.vue'

export default {
  components: {
    AppNavigation
  },
  data () {
    return {
      items: [
        {
          title: 'Home',
          icon: 'home',
          to: { name: 'index' }
        }
      ]
    }
  }
}
</script>
