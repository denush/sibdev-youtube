<template>
  <div>
    MAIN HEADER
    <button @click='logout'>Выйти</button>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
  name: 'MainHeader',

  setup() {
    const router = useRouter();

    const logout = () => {
      localStorage.removeItem('token');
      router.push({ name: 'login' });
    };

    return {
      logout
    };
  },
}
</script>