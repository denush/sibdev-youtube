<template>
  <div class='search-view-container'>
    <div class='search-view'>

      <div class='search-view__content' :class='{ "search-view__content--default": !isSearched }'>
        <div class='search-view__search-bar-container'>
          <div class='search-view__title'>Поиск видео</div>
          <SearchBar />
        </div>

        <div v-if='isSearched' class='search-view__videos'>
          <SearchedVideos />
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

import SearchBar from '@/components/SearchBar';
import SearchedVideos from '@/components/SearchedVideos';

export default {
  name: 'SearchView',

  components: {
    SearchBar,
    SearchedVideos
  },

  setup() {
    const store = useStore();

    const isSearched = computed(() => store.getters.isSearched);

    return {
      isSearched
    };
  }
}
</script>

<style lang='scss' scoped>
@import '@/styles/constants.scss';

.search-view-container {
  background-color: $background-color-gray;
  height: 100%;
  padding: $main-wrapper-padding;
}

.search-view {
  box-sizing: border-box;
  padding-top: 1rem;
  margin: auto;
  max-width: $main-wrapper-width;
  height: 100%;
}

.search-view__content {
  
  height: 100%;
}

.search-view__content--default {
  
  display: flex;
  justify-content: center;
  align-items: center;
}

.search-view__content--default .search-view__search-bar-container {
  transform: translate(0, -100%);
  flex: 1;
  max-width: 600px;
  margin: auto;
}

.search-view__title {
  font-size: 1.4rem;
  margin-bottom: 1rem;
}

.search-view__content--default .search-view__title {
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
}

.search-view__search-bar-container {
  margin-bottom: 2rem;
}
</style>