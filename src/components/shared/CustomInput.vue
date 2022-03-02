<template>
  <div class='custom-input' :class='{ "custom-input--btn-control": appendBtn }'>
    <div v-if='label' class='custom-input__label'>{{ label }}</div>
    <div class='custom-input__input-container'>
      <input
        :value='modelValue'
        :type='type'
        :placeholder='placeholder'
        ref='inputField'
        @input='onInput'
        class='custom-input__input'
      >
      <div v-if='appendBtn' @click='onAppendBtnClick' class='custom-input__append-btn'>
        <slot name='icon'></slot>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

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

    placeholder: {
      type: String,
      default: null
    },

    type: {
      type: String,
      default: null
    },

    appendBtn: {
      type: Boolean,
      default: false
    }
  },

  setup(props, { emit }) {
    const inputField = ref(null);

    const onInput = (event) => {
      emit('update:modelValue', event.target.value);
    };

    const onAppendBtnClick = (event) => {
      inputField.value.focus();
      emit('append-btn-clicked');
    };

    return {
      inputField,
      onInput,
      onAppendBtnClick
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