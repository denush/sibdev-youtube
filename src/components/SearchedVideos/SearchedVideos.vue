<template>
  <div>
    <!-- <div>Видео по запросу <span>"{{ searchRequest }}"</span></div> -->
    <div>
      <SearchedVideosToolbar />
    </div>

    <div>
      <SearchedVideosList />
    </div>

    <div>
      <div v-for='video in videos' :key='video.etag'>{{ video.snippet.title }}</div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

import SearchedVideosToolbar from './components/SearchedVideosToolbar';
import SearchedVideosList from './components/SearchedVideosList';

export default {
  name: 'SearchedVideos',

  components: {
    SearchedVideosToolbar,
    SearchedVideosList
  },

  setup() {
    const store = useStore();

    const searchRequest = computed(() => store.state.searchRequest);
    const videos = computed(() => store.state.searchedVideos);

    return {
      searchRequest,
      videos
    };
  },
}
</script>