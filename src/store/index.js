import { createStore } from 'vuex';

const KEY_API = 'AIzaSyAg9ajasQvZMtn4nZoMiGBzPjMT7wEmJvU';
const SEARCH_PATH = 'https://youtube.googleapis.com/youtube/v3/search';

export default createStore({
  state: {
    searchRequest: '',
    maxResults: 12,
    searchedVideos: [],
    searchedVideosTotal: 0,

    viewTypeGrid: true
  },

  getters: {
    isSearched: state => {
      return state.searchRequest !== '';
    }
  },

  mutations: {
    setSearchRequest(state, request) { state.searchRequest = request; },
    setSearchedVideos(state, videos) { state.searchedVideos = videos; },
    setSearchedVideosTotal(state, total) { state.searchedVideosTotal = total; },

    setViewTypeGrid(state, isGrid) { state.viewTypeGrid = isGrid; }
  },

  actions: {
    searchVideos({ state, commit }) {
      if (state.searchUrl === '') {
        return;
      }

      const searchUrl = createSearchUrl(state.searchRequest, state.maxResults);

      return fetch(searchUrl).then(res => res.json()).then(res => {
        commit('setSearchedVideos', res.items);
        commit('setSearchedVideosTotal', res.pageInfo.totalResults);
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