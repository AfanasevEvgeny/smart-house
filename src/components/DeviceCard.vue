<template>
  <div class="device-card">
    <div class="device-title-wrapper">
      <h2>
        {{ device.name }}
      </h2>
    </div>
    <div class="device-body-wrapper">
      <div style="text-align: center">
        <h4 v-if="device.dimmable">
          Value: {{ device.state }}
        </h4>
        <h4 v-else
            :class="{
              'turn-off-state': !device.state,
              'turn-on-state': device.state
            }"
        >
          Power: {{ device.state ? "On" : "Off" }}
        </h4>
      </div>
      <div class="device-options-wrapper">
        <label v-if="!device.dimmable">
          <input type="checkbox" :label="'power'" v-model="device.state">
        </label>
        <div v-else>
          <MyInput label="Device value" type="number" :value="device.state" @input="changeStateDimmable"/>
        </div>
      </div>
      <div style="text-align: center">
        <MyButton @click="resetState"
                  text="Reset"
                  style="margin: 0.6rem"
        />
        <MyButton
          @click="removeDevice"
          text="Remove Device"
          background="a52a2a"
        />
      </div>
    </div>
  </div>
</template>

<script>
import MyButton from "@/components/ui/MyButton";
import MyNumberInput from "@/components/ui/MyInput";
import MyInput from "@/components/ui/MyInput";

export default {
  name: "DeviceCard",
  components: {MyInput, MyNumberInput, MyButton},
  data() {
    return {
      initialState: this.device.state
    }
  },
  props: {
    device: Object,
  },
  methods: {
    resetState() {
      this.device.state = this.initialState
    },
    removeDevice() {
      this.$emit('remove-device')
    },
    changeStateDimmable(val) {
      console.log(val)
      this.device.state = val
    }
  }
}
</script>

<style scoped>
.device-card {
  height: 200px;
  min-width: 300px;
  border: 1px solid #6cc292;
  border-radius: 4px;
  padding: 0.5rem;
}

.device-title-wrapper {
  text-align: center;
}

.device-body-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
}

.device-options-wrapper {
  display: flex;
  justify-content: center;
}

input[type=checkbox] {
  /* Double-sized Checkboxes */
  -ms-transform: scale(2); /* IE */
  -moz-transform: scale(2); /* FF */
  -webkit-transform: scale(2); /* Safari and Chrome */
  -o-transform: scale(2); /* Opera */
  transform: scale(2);
  padding: 10px;
}

.turn-off-state {
  color: firebrick;
}

.turn-on-state {
  color: #569360;
}



</style>
