<template>
  <div>
    <MainHeader />

    <div>
      <router-link :to='{ name: "search" }'>Поиск</router-link>
      <router-link :to='{ name: "favorites" }'>Избранное</router-link>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
import MainHeader from '@/components/MainHeader';

export default {
  name: 'MainView',

  components: {
    MainHeader
  }
}
</script>