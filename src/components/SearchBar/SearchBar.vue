<template>
  <div class='search-bar'>
    <custom-input
      v-if='isSearched'
      v-model='searchInput'
      placeholder='Что хотите посмотреть?'
      :appendBtn='true'
      @append-btn-clicked='onAddFavoriteClicked'
      class='search-bar__input'
    >
      <template v-slot:icon>
        <HeartIcon />
      </template>
    </custom-input>
    <custom-input
      v-else
      v-model='searchInput'
      placeholder='Что хотите посмотреть?'
      class='search-bar__input'
    />
    <custom-button @click='search' class='search-bar__search-button'>Найти</custom-button>

    <FavoriteModal :isOpen='favModalIsOpen' @close='onCloseFavModal' />
  </div>
</template>

<script>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';

import FavoriteModal from '@/components/FavoriteModal';
import HeartIcon from '@/assets/icons/heart.svg';

export default {
  name: 'SearchBar',

  components: {
    FavoriteModal,
    HeartIcon
  },

  setup() {
    const store = useStore();

    const searchInput = ref('');
    const favModalIsOpen = ref(false);

    const search = () => {
      store.commit('setSearchRequest', searchInput.value);
      store.dispatch('searchVideos');
    };

    const isSearched = computed(() => store.getters.isSearched);

    const onAddFavoriteClicked = () => {
      favModalIsOpen.value = true;
      console.log('add to fav');
    };

    const onCloseFavModal = () => {
      favModalIsOpen.value = false;
    };

    return {
      searchInput,
      search,

      isSearched,
      favModalIsOpen,
      onAddFavoriteClicked,
      onCloseFavModal
    };
  }
}
</script>

<style scoped>
.search-bar {
  display: flex;
}

.custom-input {
  width: 100%;
}

.search-bar__input::v-deep .custom-input__input {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.search-bar__search-button.custom-button {
  border-radius: 0 10px 10px 0;
  padding-left: 2.5rem;
  padding-right: 2.5rem;
}

</style>