import { createStore } from 'vuex';

const KEY_API = 'AIzaSyAg9ajasQvZMtn4nZoMiGBzPjMT7wEmJvU';
const SEARCH_PATH = 'https://youtube.googleapis.com/youtube/v3/search';

export default createStore({
  state: {
    searchRequest: '',
    maxResults: 12,
    searchedVideos: [],
  },

  getters: {
    isSearched: state => {
      return state.searchRequest !== '';
    }
  },

  mutations: {
    setSearchRequest(state, request) { state.searchRequest = request; },
    setSearchedVideos(state, videos) { state.searchedVideos = videos; }
  },

  actions: {
    searchVideos({ state, commit }) {
      if (state.searchUrl === '') {
        return;
      }

      const searchUrl = createSearchUrl(state.searchRequest, state.maxResults);

      return fetch(searchUrl).then(res => res.json()).then(res => {
        commit('setSearchedVideos', res.items);
      });
    }
  },

  modules: {
  }
});

function createSearchUrl(searchRequest, maxResults) {
  const urlParams = `part=snippet&key=${KEY_API}&type=video&maxResults=${maxResults}&q=${searchRequest}`;
  const fullUrl = `${SEARCH_PATH}?${urlParams}`;

  return fullUrl;
}