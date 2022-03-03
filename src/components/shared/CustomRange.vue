<template>
  <div class='custom-range'>
    <div v-if='label' class='custom-range__label'>{{ label }}</div>

    <input
      :value='modelValue'
      type='range'
      @input='onInput'
      class='custom-range__input'
    >

  </div>
</template>

<script>
export default {
  name: 'CustomInput',

  emits: [ 'update:modelValue', 'append-btn-clicked' ],

  props: {
    modelValue: {
      type: String,
      default: ''
    },

    label: {
      type: String,
      default: ''
    },

    min: {
      type: String,
      default: 0
    },

    max: {
      type: String,
      max: 100
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

.custom-input__input-container {
  display: flex;
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

.custom-input--btn-control .custom-input__input {
  border-right: none;
}

.custom-input__input:focus ~ .custom-input__append-btn {
  background-color: rgba(197, 228, 249, 0.3);
  border: 1px solid #1390E5;
  border-left: none;
}

.custom-input__append-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 0.6rem;
  background-color: #fff;
  border: 1px solid rgba(23, 23, 25, 0.2);
  border-left: none;
  cursor: pointer;
}
</style>