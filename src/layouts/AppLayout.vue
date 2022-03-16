<template>
  <div class="app-container">
    <AppHeader/>
    <slot name="AppBody">
      <router-view/>
    </slot>
  </div>
</template>

<script>
import AppFooter from "@/components/AppFooter";
import AppHeader from "@/components/AppHeader";

export default {
  name: "AppLayout",
  components: {AppHeader, AppFooter}
}
</script>

<style scoped>
.app-container {
  min-height: 100vh;
  display: grid;
  grid-template-rows: 8vh 92vh;
}

</style>