<template>
  <div v-if='isOpen' class='fav-modal'>
    <div @click='close' class='fav-modal__background'></div>
    <div class='fav-modal__window'>
      <ModalForm @cancel='close'/>
    </div>
  </div>
</template>

<script>
import ModalForm from './FavoriteModalForm';

export default {
  name: 'FavoriteModal',

  components: {
    ModalForm
  },

  emits: [ 'close' ],

  props: {
    isOpen: {
      type: Boolean,
      default: false
    }
  },

  setup(props, { emit }) {
    const close = () => emit('close');

    return {
      close
    };
  }
}
</script>

<style scoped>
.fav-modal {
  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  top: 0;
  left: 0;

  height: 100vh;
  width: 100vw;
}

.fav-modal__background {
  

  background-color: #75C7FF;
  opacity: 0.8;
  
  height: 100%;
  width: 100%;
}

.fav-modal__window {
  position: absolute;

  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 10px 50px rgba(19, 144, 229, 0.8);
  padding: 1rem;
  
}
</style>