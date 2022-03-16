<template>
  <div style="display: flex; align-items: center">
    <MyButton @click="proceedSaving" text="Save houses data"/>
    <div v-if="savingInfo" style="margin-left:1rem">
      Data Saved!
    </div>
  </div>
</template>

<script>
import MyButton from "@/components/ui/MyButton";
import {mapActions} from "vuex";

export default {
  name: "SavingData",
  components: {MyButton},
  data() {
    return {
      savingInfo: false
    }
  },
  methods: {
    ...mapActions({
      saveHousesData: 'saveHousesData'
    }),
    proceedSaving() {
      this.saveHousesData()
      this.savingInfo = true
      setTimeout(() => {
        this.savingInfo = false
      }, 2000)
    }
  }
}
</script>

<style scoped>

</style>
