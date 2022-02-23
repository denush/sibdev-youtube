<template>
  <div class='login-view'>
    <LoginForm />
  </div>
</template>

<script>
import LoginForm from '@/components/LoginForm';

export default {
  name: 'LoginView',

  components: {
    LoginForm
  }
}
</script>

<style scoped>
.login-view {
  background-color: #FAFAFA;
  height: 100vh;
  width: 100vw;

  display: flex;
  align-items: center;
  justify-content: center;
}
</style>