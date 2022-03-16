<template>
  <div class="devices-container">
    <DeviceCard
        class="device-card"
        v-for="(device,idx) of house.devices"
        :key="(idx)"
        :device=device
        @remove-device="removeDevice(device)"
    />
    <div v-if="house.devices.length===0">
      Please add device to proceed
    </div>
  </div>
</template>

<script>
import DeviceCard from "@/components/DeviceCard";

export default {
  name: "Devices",
  components: {DeviceCard},
  computed: {
    currentHouseId() {
      return this.$route.params.id
    },
    house() {
      return this.$store.getters.house(this.currentHouseId)
    }
  },
  methods: {
    removeDevice(device) {
      this.$store.commit('removeDevice', {houseId: this.currentHouseId, deviceToRemove: device})
    },
  },
}
</script>

<style scoped>
.devices-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.device-card {
  flex: 1 1 auto;
  margin-top: 1rem;
  margin-right: 1rem;
}
</style>