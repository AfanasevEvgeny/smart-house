<!-- CustomInput.vue -->
<template>
  <label>
    <input
      :type="type"
      :name="name"
      :value="value"
      @input="$emit('input', $event.target.value)"
    />
  </label>
</template>

<script>
export default {
  name: 'MyInput',
  props: {
    type:{
      required:true
    },
    label: {
      type: String,
      required: true
    },
    value: {
      required: true
    },
  },
  computed: {
    name() {
      return this.label.toLowerCase();
    },
  },
  methods:{
    changeValue(event, type){
      this.emit('on-change-value', !this.value)
    }
  }
}
</script>
<style scoped>
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
