<template>
  <button class='custom-button'>
    <slot name='default'></slot>
  </button>
</template>

<script>
export default {
  name: 'CustomButton',

  props: {
    type: {
      type: String,
      default: null
    }
  }
}
</script>

<style scoped>
.custom-button {
  background-color: #1390e5;
  border: none;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  font-size: 1rem;
  padding: 12px;
}
</style>