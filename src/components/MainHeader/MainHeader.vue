<template>
  <div class='main-header-wrapper'>
    <div class='main-header'>
      <div class='main-header__left'>
        <div class='main-header__logo-container'>
          <img src='@/assets/sibdev-logo.png' width='70'>
        </div>
        <div class='main-header__navbar'>
          <div
            class='main-header__nav-item'
            :class='{ "main-header__nav-item--active": isNavItemActive("search") }'
            @click='linkTo("search")'
          >
            Поиск
          </div>
          <div
            class='main-header__nav-item'
            :class='{ "main-header__nav-item--active": isNavItemActive("favorites") }'
            @click='linkTo("favorites")'
          >
            Избранное
          </div>
        </div>
      </div>
      <div class='main-header__right'>
        <button @click='logout' class='main-header__logout-button'>Выйти</button>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter, useRoute } from 'vue-router';

export default {
  name: 'MainHeader',

  setup() {
    const router = useRouter();
    const route = useRoute();

    const linkTo = (path) => {
      const pathObj = { name: path };
      router.push(pathObj);
    };

    const isNavItemActive = (item) => {
      if (route.name === item) {
        return true;
      }
    };

    const logout = () => {
      localStorage.removeItem('token');
      router.push({ name: 'login' });
    };

    return {
      linkTo,
      isNavItemActive,
      logout
    };
  },
}
</script>

<style lang='scss' scoped>
@import '@/styles/constants.scss';

.main-header-wrapper {
  padding: $main-wrapper-padding;
}

.main-header {
  max-width: $main-wrapper-width;
  margin: auto;

  display: flex;
  justify-content: space-between;
  
}

.main-header__left {
  display: flex;
}

.main-header__logo-container {
  margin-right: 1rem;
}

.main-header__navbar {
  display: flex;
  gap: 2rem;
}

.main-header__nav-item {
  border-bottom: 2px solid transparent;
  color: rgba(39, 39, 39, 0.3);
  cursor: pointer;
  display: flex;
  align-items: center;
}

.main-header__nav-item--active {
  border-bottom: 2px solid #1390E5;
  color: #1390E5;
}

.main-header__logout-button {
  background-color: transparent;
  border: none;
  border-bottom: 1px solid transparent;
  color: #1390E5;
  cursor: pointer;
  outline: none;
  font-size: 1rem;
  height: 100%;
  padding: 0;
}

.main-header__logout-button:hover {
  border-bottom: 2px solid #1390E5;
}
</style>