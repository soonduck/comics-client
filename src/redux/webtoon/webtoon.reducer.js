import {
  MAIN_WEBTOONS,
  SET_ACTIVE_CATEGORIES,
  SET_CATEGORIES,
  SET_EPISODE,
  SET_GENRES,
  SET_MY_VIEW_RECORDS,
  SET_MY_WEBTOONS,
  SET_VIEWER,
  SET_WEBTOON,
} from './webtoon.type';

const initialState = {
  mainWebtoons: [],
  searchWebtoons: [],
  categories: [],
  activeCategories: {},
  genres: [],
  page: 1,
  totalPage: 1,
  webtoon: {},
  episodes: [],
  episode: {},
  viewer: false,
  myWebtoons: [],
  myViewRecords: [],
};
export default function webtoonReducer(state = initialState, action) {
  switch (action.type) {
    case MAIN_WEBTOONS:
      return { ...state, mainWebtoons: action.payload.mainWebtoons };

    case SET_GENRES:
      return { ...state, genres: action.payload.genres };

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

    case SET_MY_WEBTOONS:
      return { ...state, myWebtoons: action.payload.myWebtoons };
    case SET_MY_VIEW_RECORDS:
      return { ...state, myViewRecords: action.payload.myViewRecords };

    default:
      return state;
  }
}
