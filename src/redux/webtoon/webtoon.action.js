import {
  MAIN_WEBTOONS,
  SET_ACTIVE_CATEGORIES,
  SET_CATEGORIES,
  SET_EPISODE,
  SET_GENRE,
  SET_GENRES,
  SET_MY_VIEW_RECORDS,
  SET_MY_WEBTOONS,
  SET_SELECTED_GENRE,
  SET_VIEWER,
  SET_WEBTOON,
} from './webtoon.type';
import webtoonReducer from './webtoon.reducer';

export const setMainWebtoons = (mainWebtoons) => ({
  type: MAIN_WEBTOONS,
  payload: { mainWebtoons },
});
export const setGenres = (genres) => ({
  type: SET_GENRES,
  payload: { genres },
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
export const setEpisode = (episode) => ({
  type: SET_EPISODE,
  payload: { episode },
});
export const setViewer = (boolean) => ({
  type: SET_VIEWER,
  payload: { viewer: boolean },
});

// 내 작품정보
export const setMyWebtoons = (myWebtoons) => ({
  type: SET_MY_WEBTOONS,
  payload: { myWebtoons },
});
export const setMyViewRecords = (myViewRecords) => ({
  type: SET_MY_VIEW_RECORDS,
  payload: { myViewRecords },
});

// 장르 선택정보
export const setSelectedGenre = (id) => ({
  type: SET_SELECTED_GENRE,
  payload: { selectedGenre: id },
});
