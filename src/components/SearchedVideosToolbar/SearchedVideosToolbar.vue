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
      <ListIcon
        @click='setViewType("list")'
        fill='#123'
        class='toolbar__view-switcher-icon'
        :class='{ "toolbar__view-switcher-icon--selected": isViewSelected("list") }'
      />
      <GridIcon
        @click='setViewType("grid")'
        class='toolbar__view-switcher-icon'
        :class='{ "toolbar__view-switcher-icon--selected": isViewSelected("grid") }'
      />
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';


import GridIcon from '@/assets/icons/grid.svg';
import ListIcon from '@/assets/icons/list.svg';

export default {
  name: 'SearchedVideosToolbar',

  components: {
    GridIcon,
    ListIcon
  },

  setup() {
    const store = useStore();

    const searchRequest = computed(() => store.state.searchRequest);
    const videosTotal = computed(() => store.state.searchedVideosTotal);

    const viewTypeGrid = computed(() => store.state.viewTypeGrid);

    const setViewType = (type) => {
      const newViewTypeGrid = type === 'grid';
      store.commit('setViewTypeGrid', newViewTypeGrid);
    };

    const isViewSelected = (type) => {
      if (viewTypeGrid.value) {
        return type === 'grid' ? true : false;
      } else {
        return type === 'list' ? true : false;
      }
    };

    return {
      searchRequest,
      videosTotal,

      viewTypeGrid,
      setViewType,
      isViewSelected
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

  .toolbar__view-switcher-icon {
    cursor: pointer;
    padding: 0;
    background-color: transparent;
    border: none;
    vertical-align: middle;
  }

  .toolbar__view-switcher-icon::v-deep path {
    opacity: 0.3;
  }
  .toolbar__view-switcher-icon--selected::v-deep path {
    opacity: 1;
  }

  .toolbar__view-switcher-icon:not(:last-child) {
    margin-right: 0.5rem;
  }
</style>