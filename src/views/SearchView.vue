<template>
  <div class='search-view-container'>
    <div class='search-view'>
      <div class='search-view__content'>
        <div class='search-view__title'>Поиск видео</div>
        <SearchBar />
      </div>
    </div>
  </div>
</template>

<script>
import SearchBar from '@/components/SearchBar';

export default {
  name: 'SearchView',

  components: {
    SearchBar
  }
}
</script>

<style lang='scss' scoped>
@import '@/styles/constants.scss';

.search-view-container {
  background-color: $background-color-gray;
  height: 100%;
}

.search-view {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  max-width: $main-wrapper-width;
  height: 100%;

  position: relative;
}

.search-view__content {
  transform: translate(0, -100%);
  flex: 1;
  max-width: 600px;
  margin: auto;

}

.search-view__title {
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
}
</style>