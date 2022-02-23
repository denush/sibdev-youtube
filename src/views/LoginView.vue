<template>
  <div class='login-view'>
    login view

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
    background-color: #E5E5E5;
    height: 100vh;
    width: 100vw;
  }
</style>