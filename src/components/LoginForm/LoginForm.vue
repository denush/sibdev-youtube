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

const TEST_USERNAME = '1';
const TEST_PASSWORD = '1';

export default {
  name: 'LoginForm',

  setup() {
    const router = useRouter();

    const username = ref('');
    const password = ref('');

    const login = () => {
      console.log('trying to login');
      console.log('username: ', username.value);
      console.log('password: ', password.value);

      if (username.value === TEST_USERNAME &&
          password.value === TEST_PASSWORD) {
        router.push({ name: 'main' });
        console.log('LOGIN SUCCESS');
      } else {
        console.log('ERROR - WRONG INPUT');
      }
    };

    return {
      username,
      password,
      login
    };
  }
};
</script>
