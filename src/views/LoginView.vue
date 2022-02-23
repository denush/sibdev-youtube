<template>
  <div>
    login view

    <router-link :to='{ name: "main" }'>Войти</router-link>

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