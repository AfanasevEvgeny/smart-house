<template>
  <button
      class="my-button"
      @click="$emit('click')"
      :style="{'background-color':'#'+background}"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "MyButton",
  props: {
    text: String,
    disabled: Boolean,
    background: {
      type: String,
      default: '38867b'
    },
  },
  emits: []
}
</script>

<style scoped>
.my-button {
  border: none;
  color: white;
  text-align: center;
  border-radius: 4px;
  text-decoration: none;
  display: inline-block;
  font-weight: bold;
  padding: 0.3rem 0.8rem;
  font-size: 1rem;
  cursor: pointer;
}
</style>