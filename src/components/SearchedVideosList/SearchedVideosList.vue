<template>
  <div class='video-list'>
    <div v-for='video in videos' :key='video.id.videoId' class='video-list__video-component'>
        <iframe
          allowFullscreen
          width='100%'
          :src='"http://youtube.com/embed/" + video.id.videoId'
          class='video-list__iframe'
        ></iframe>
      <div class='video-list__video-label'>{{ video.snippet.title }}</div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  name: 'SearchedVideosList',

  setup() {
    const store = useStore();

    const videos = computed(() => store.state.searchedVideos);

    return {
      videos
    };
  },
}
</script>

<style scoped>
  .video-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 1rem;
  }

  .video-list__video-component {
    width: 245px;
  }

  .video-list__iframe {
    border-radius: 10px;
    border: 2px solid #35A2EC;
    box-sizing: border-box;
  }
</style>