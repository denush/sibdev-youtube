<template>
  <div class='main-view'>
    <MainHeader />
    <div class='main-view__content'>
      <router-view></router-view>
    </div>
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

<style scoped>
.main-view {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.main-view__content {
  flex: 1;
}
</style>