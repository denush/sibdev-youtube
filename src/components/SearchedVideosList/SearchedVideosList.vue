<template>
  <div class='video-list' :class='{ "video-list--grid-view": viewTypeGrid, "video-list--list-view": !viewTypeGrid }'>
    <div v-for='video in videos' :key='video.id.videoId' class='video-list__video-component'>
      <iframe
        allowFullscreen
        width='100%'
        :src='"http://youtube.com/embed/" + video.id.videoId'
        class='video-list__iframe'
      ></iframe>
      <div class='video-list__video-info'>
        <div class='video-list__video-title-container'>
          <div class='video-list__video-title'>{{ video.snippet.title }}</div>
        </div>
        <div class='video-list__channel-title'>{{ video.snippet.channelTitle }}</div>    
      </div>
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

    const viewTypeGrid = computed(() => store.state.viewTypeGrid);

    const videos = computed(() => store.state.searchedVideos);

    return {
      viewTypeGrid,
      videos
    };
  },
}
</script>

<style lang='scss' scoped>
@import '@/styles/constants.scss';

.video-list--grid-view {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1rem;
}
.video-list__video-component {
  margin-bottom: 1.5rem;
}

.video-list--grid-view .video-list__video-component {
  width: 245px;
  margin-bottom: 1.5rem;
}

.video-list--list-view .video-list__video-component {
  display: flex;
  gap: 1rem;
}

.video-list__video-info {
  flex: 1
}

.video-list__iframe {
  width: 245px;
  margin-bottom: 0.5rem;
  border-radius: 10px;
  border: 2px solid #35A2EC;
  box-sizing: border-box;
}

.video-list__video-title {
  margin-bottom: 0.5rem;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  line-height: 16px;
  // height: 32px;
}

.video-list__channel-title {
  color: rgba(23, 23, 25, 0.3);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>