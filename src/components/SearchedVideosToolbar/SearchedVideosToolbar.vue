<template>
  <div class='toolbar'>
    <div class='toolbar__left'>
      <div>
        <span>Видео по запросу </span>
        <span class='toolbar__query-text'>&#171;{{ searchRequest }}&#187;</span>
        <span class='toolbar__video-total-text'>{{ videosTotal }}</span>
      </div>
    </div>
    <div class='toolbar__right'>
      <span>{{ viewTypeGrid }}</span>
      <button @click='setViewType("list")' class='toolbar__view-switcher-button'><img width='26' src='@/assets/list.svg'></button>
      <button @click='setViewType("grid")' class='toolbar__view-switcher-button'><img width='17' src='@/assets/four-squares.svg'></button>
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

    const viewTypeGrid = computed(() => store.state.viewTypeGrid);

    const setViewType = (type) => {
      const viewTypeGrid = type === 'grid';
      store.commit('setViewTypeGrid', viewTypeGrid);
    };

    return {
      searchRequest,
      videosTotal,

      viewTypeGrid,
      setViewType
    };
  },
}
</script>

<style scoped>
  .toolbar {
    display: flex;
    justify-content: space-between;
    vertical-align: middle;
  }

  .toolbar__query-text {
    font-weight: bold;
  }

  .toolbar__video-total-text {
    margin-left: 1rem;
    color: rgba(23, 23, 25, 0.3);
  }

  .toolbar__view-switcher-button {
    cursor: pointer;
    padding: 0;
    background-color: transparent;
    border: none;
    vertical-align: middle;
  }

  .toolbar__view-switcher-button:not(:last-child) {
    margin-right: 0.5rem;
  }
</style>