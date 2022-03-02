<template>
  <div class='login-view'>
    <LoginForm />
  </div>
</template>

<script>
import LoginForm from '@/components/LoginForm';

import SomeIcon from '@/assets/icons/grid.svg';

export default {
  name: 'LoginView',

  components: {
    LoginForm,
    SomeIcon
  }
}
</script>

<style scoped>
.icon {
  /* color: black; */
  /* background-color: red; */
}

.login-view {
  background-color: #FAFAFA;
  height: 100vh;
  width: 100vw;

  display: flex;
  align-items: center;
  justify-content: center;
}
</style>