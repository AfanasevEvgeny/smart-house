<template>
  <header class="app-header">
    <span class="title">
      Smart House
    </span>
    <div>
      <houses-navigation/>
    </div>
  </header>
</template>

<script>
import HousesNavigation from "@/components/HousesNavigation";

export default {
  name: "AppHeader",
  components: {HousesNavigation}
}
</script>

<style scoped lang="scss">
.app-header {
  padding: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  border-bottom: 1px solid darkslategrey;
  justify-content: space-between;
}

.title {
  font-size: 2rem;
  text-decoration: none;
}

</style>