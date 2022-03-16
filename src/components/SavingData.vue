<template>
  <MyButton @click="saveHousesData" text="save houses data"/>
</template>

<script>
import MyButton from "@/components/ui/MyButton";
import {mapActions} from "vuex";

export default {
  name: "SavingData",
  components: {MyButton},
  methods: {
    ...mapActions({
      saveHousesData: 'saveHousesData'
    })
  }
}
</script>

<style scoped>

</style>