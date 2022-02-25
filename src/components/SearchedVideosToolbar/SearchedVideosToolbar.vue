<template>
  <div class='toolbar'>
    <div class='toolbar__left'>
      <div>
        <span>Видео по запросу </span>
        <span>"{{ searchRequest }}"</span>
        <span>{{ videosTotal }}</span>
      </div>
    </div>
    <div class='toolbar__right'>
      <button>list</button>
      <button>grid</button>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  name: 'SearchedVideosToolbar',

  setup() {
    const store = useStore();

    const searchRequest = computed(() => store.state.searchRequest);
    const videosTotal = computed(() => store.state.searchedVideosTotal);

    return {
      searchRequest,
      videosTotal
    };
  },
}
</script>

<style scoped>
  .toolbar {
    display: flex;
    justify-content: space-between;
  }
</style>