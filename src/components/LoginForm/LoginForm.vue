<template>
  <div>
    <form>
      <input v-model='username'>
      <input v-model='password'>
      <button type='submit' @click.prevent='login'>Войти</button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
  name: 'LoginForm',

  setup() {
    const router = useRouter();

    const username = ref('');
    const password = ref('');

    const login = async () => {
      const userList = await fetch('users.json').then(res => res.json());

      for (const user of userList) {
        if (username.value === user.username &&
            password.value === user.password) {

          const token = user.username;
          localStorage.setItem('token', token);

          router.push({ name: 'main' });
          console.log('LOGIN SUCCESS');

          return;
        }
      }

      console.log('ERROR_WRONG_INPUT');
    };

    return {
      username,
      password,
      login
    };
  }
};
</script>