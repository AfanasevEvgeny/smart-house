<template>
  <div class="home-container">
    <div class="home-bar-container">
      <div>
        <h1>
          Devices:
        </h1>
      </div>
      <div style="margin-right: 1rem">
        <AddDevice :houseId="houseId"/>
      </div>
    </div>
    <Devices/>
    <div>
      <SavingData/>
    </div>
  </div>
</template>

<script>
import Devices from "@/components/Devices";
import AddDevice from "@/components/AddDevice";
import SavingData from "@/components/SavingData";

export default {
  name: "HomeLayout",
  components: {SavingData, AddDevice, Devices},
  computed: {
    houseId() {
      return this.$route.params.id
    }
  }
}
</script>

<style scoped>
.home-container {
  padding: 1rem;
  display: grid;
  grid-template-rows: 5% auto;
}

.home-bar-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
