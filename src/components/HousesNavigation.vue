<template>
  <nav class="navigation-bar">
    <router-link
      v-for="house in housesIdNavLinks"
      :key="house.id"
      :to="`/${house.id}`"
      :class="{
          'home-link':true,
          'home-link-active': currentHouseId === house.id.toString()
        }"
    >
      {{ house.name }}
    </router-link>
  </nav>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: "HousesNavigation",
  computed: {
    ...mapGetters({
      housesIdNavLinks: 'housesIdNavLinks'
    }),
    currentHouseId() {
      return this.$route.params.id
    }
  },
  watch: {
    currentHouseId: {
      immediate: true,
      handler() {
        if (!this.housesIdNavLinks.find(houseLink => houseLink.id === +this.currentHouseId)) {
          this.$router.push("/").catch(()=>{});
        }
      }
    }
  }
}
</script>

<style scoped>
.navigation-bar {
  display: flex;
  font-size: 1.2rem;
}

.home-link {
  color: darkslategrey;
  text-decoration: none;
  margin-right: 1rem;
}

.home-link-active {
  transition: color 150ms ease-in-out;
  color: #6cc292;
}

</style>
