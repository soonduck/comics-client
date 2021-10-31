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

export const setMainWebtoons = (mainWebtoons) => ({
  type: MAIN_WEBTOONS,
  payload: { mainWebtoons },
});
export const setGenres = (genres) => ({
  type: SET_GENRES,
  payload: { genres },
});
export const setGenre = (genre) => ({
  type: SET_GENRE,
  payload: { genre },
});
export const setPage = (page) => ({
  type: SET_PAGE,
  payload: { page },
});
export const setTotalPage = (totalPage) => ({
  type: SET_TOTAL_PAGE,
  payload: { totalPage },
});
export const setCategories = (categories) => ({
  type: SET_CATEGORIES,
  payload: { categories },
});
export const setActiveCategories = (activeCategories) => ({
  type: SET_ACTIVE_CATEGORIES,
  payload: { activeCategories },
});
export const setWebtoon = (webtoon, episodes) => ({
  type: SET_WEBTOON,
  payload: { webtoon, episodes },
});
