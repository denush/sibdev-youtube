<template>
  <div class='login-form'>
    <div class='login-form__logo-container'>
      <img src='@/assets/sibdev-logo.png'>
    </div>

    <div class='login-form__title-container'>
      <span>Вход</span>
    </div>

    <form>
      <custom-input v-model='username' label='Логин' class='login-form__login-box'/>
      <custom-input v-model='password' label='Пароль' type='password' class='login-form__password-box'/>
      <div  class='login-form__submit-container'>
        <custom-button type='submit' @click.prevent='login' class='login-form__submit'>Войти</custom-button>
      </div>
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
          console.log('LOGIN_SUCCESS');

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

<style scoped>
.login-form {
  background-color: #fff;
  border: 1px solid rgba(39, 39, 39, 0.1);
  border-radius: 10px;
  padding: 1rem 5rem 3rem 5rem;
}

.login-form__logo-container {
  text-align: center;
  margin-bottom: 2rem;
}

.login-form__title-container {
  text-align: center;
  font-size: 1.2rem;
  margin-bottom: 2rem;
}

.login-form__login-box {
  margin-bottom: 1rem;
}

.login-form__password-box {
  margin-bottom: 2rem;
}

.login-form__submit-container {
  text-align: center;
}

.login-form__submit {
  width: 140px;
}
</style>