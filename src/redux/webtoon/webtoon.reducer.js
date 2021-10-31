import {
  MAIN_WEBTOONS,
  SET_ACTIVE_CATEGORIES,
  SET_CATEGORIES,
  SET_GENRE,
  SET_GENRES,
  SET_PAGE,
  SET_TOTAL_PAGE,
  SET_WEBTOON,
} from './webtoon.type';

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
};
export default function webtoonReducer(state = initialState, action) {
  switch (action.type) {
    case MAIN_WEBTOONS:
      return { ...state, mainWebtoons: action.payload.mainWebtoons };

    case SET_GENRES:
      return { ...state, genres: action.payload.genres };
    case SET_GENRE:
      return { ...state, genre: action.payload.genre };

    case SET_PAGE:
      return { ...state, page: action.payload.page };
    case SET_TOTAL_PAGE:
      return { ...state, totalPage: action.payload.totalPage };

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
    default:
      return state;
  }
}
