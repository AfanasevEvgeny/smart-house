<template>
  <div>
    <div v-if="session.state">
      <div class="add-device-form">
        <div>
          <form>
            <label>Device Name </label>
            <MyInput label="Device value"
                     type="text"
                     :value="session.deviceName"
                     @input="changeDeviceName"
                     style="margin-right: 1rem"
            />
            <label style="margin-right: 0.6rem">Dimmable </label>
            <input type="checkbox" v-model="session.isDimmable">
          </form>
        </div>
        <div>
          <MyButton @click="closeSession"
                    text="Back"
                    background="a52a2a"
          />
        </div>
        <div>
          <MyButton
            v-if="session.deviceName"
            @click="addDevice"
            text="Add"
            background="008b8b"
          />
        </div>
      </div>
    </div>
    <MyButton
      v-else
      text="Add device"
      @click="initiateSession"
      background="008b8b"
    />
  </div>
</template>

<script>
import MyButton from "@/components/ui/MyButton";
import {mapMutations} from 'vuex'
import MyInput from "@/components/ui/MyInput";

export default {
  name: "AddDevice",
  components: {MyInput, MyButton},
  props: {
    houseId: String,
  },
  data() {
    return {
      session: {
        state: false,
        deviceName: '',
        isDimmable: false,
      }
    }
  },
  methods: {
    initiateSession() {
      this.session.state = true
    },
    addDevice() {
      this.$store.commit('addDevice',
        {
          houseId: this.houseId,
          newDevice: {
            name: this.session.deviceName,
            dimmable: this.session.isDimmable,
            state: this.session.isDimmable ? 0 : false
          }
        }
      )
      this.closeSession()
    },
    closeSession() {
      this.session.state = false
      this.session.deviceName = ''
      this.session.isDimmable = false
    },
    changeDeviceName(val) {
      this.session.deviceName = val
    }
  },
  watch: {
    houseId() {
      this.closeSession()
    }
  }
}
</script>

<style scoped>
.add-device-form {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.add-device-form div {
  margin-right: 1rem;
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
</style>
