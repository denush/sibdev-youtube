<template>
  <div class='custom-input'>
    <div v-if='label' class='custom-input__label'>{{ label }}</div>
    <div class='custom-input__input-container'>
      <input
        :value='modelValue'
        :type='type'
        :placeholder='placeholder'
        @input='onInput'
        class='custom-input__input'
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'CustomInput',

  emits: [ 'update:modelValue' ],

  props: {
    modelValue: {
      type: String,
      default: ''
    },

    label: {
      type: String,
      default: ''
    },

    placeholder: {
      type: String,
      default: null
    },

    type: {
      type: String,
      default: null
    }
  },

  setup(props, { emit }) {
    const onInput = (event) => {
      emit('update:modelValue', event.target.value);
    };

    return {
      onInput
    };
  }
}
</script>

<style scoped>
.custom-input {
  width: 100%;
}

.custom-input__label {
  color: rgba(23, 23, 25, 0.3);
  margin-bottom: 4px;
  font-size: 0.9rem;
}

.custom-input__input {
  border: 1px solid rgba(23, 23, 25, 0.2);
  border-radius: 10px;
  box-sizing: border-box;
  padding: 8px 16px;
  font-size: 1rem;
  width: 100%;
  height: 42px;
}

.custom-input__input::placeholder {
  color: #272727;
  opacity: 0.3;
}

.custom-input__input:focus {
  background-color: rgba(197, 228, 249, 0.3);
  border: 1px solid #1390E5;
  outline: none;
}
</style>