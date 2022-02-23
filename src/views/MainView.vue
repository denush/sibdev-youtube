<template>
  <div>
    <MainHeader />
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