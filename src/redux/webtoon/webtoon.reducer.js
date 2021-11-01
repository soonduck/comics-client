import {
  MAIN_WEBTOONS,
  SET_ACTIVE_CATEGORIES,
  SET_CATEGORIES,
  SET_EPISODE,
  SET_GENRE,
  SET_GENRES,
  SET_VIEWER,
  SET_WEBTOON,
} from './webtoon.type';
import { createStore } from 'redux';

const initialState = {
  mainWebtoons: [],
  searchWebtoons: [],
  categories: [],
  activeCategories: {},
  genres: [],
  genre: 1,
  page: 1,
  totalPage: 1,
  webtoon: {},
  episodes: [],
  episode: {},
  viewer: false,
};
export default function webtoonReducer(state = initialState, action) {
  switch (action.type) {
    case MAIN_WEBTOONS:
      return { ...state, mainWebtoons: action.payload.mainWebtoons };

    case SET_GENRES:
      return { ...state, genres: action.payload.genres };
    case SET_GENRE:
      return { ...state, genre: action.payload.genre };

    case SET_CATEGORIES:
      return { ...state, categories: action.payload.categories };
    case SET_ACTIVE_CATEGORIES:
      return { ...state, activeCategories: action.payload.activeCategories };

    case SET_WEBTOON:
      return {
        ...state,
        webtoon: action.payload.webtoon,
        episodes: action.payload.episodes,
      };
    case SET_EPISODE:
      return { ...state, episode: action.payload.episode };

    case SET_VIEWER:
      return { ...state, viewer: action.payload.viewer };
    default:
      return state;
  }
}
