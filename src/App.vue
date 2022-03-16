<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
import {mapActions} from 'vuex'

export default {
  methods: {
    ...mapActions({
      bootSmartHouseData: 'bootSmartHouseData'
    })
  },
  async created() {
    await this.bootSmartHouseData()
  }
}
</script>
<style lang="scss">
* {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: darkslategrey;
}
</style>
