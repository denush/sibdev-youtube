<template>
  <div>
    <div class='searched-videos__tolbar-container'>
      <SearchedVideosToolbar />
    </div>

    <div>
      <SearchedVideosList />
    </div>
  </div>
</template>

<script>
import SearchedVideosToolbar from '@/components/SearchedVideosToolbar';
import SearchedVideosList from '@/components/SearchedVideosList';

export default {
  name: 'SearchedVideos',

  components: {
    SearchedVideosToolbar,
    SearchedVideosList
  }
}
</script>

<style scoped>
.searched-videos__tolbar-container {
  margin-bottom: 1rem;
}
</style>