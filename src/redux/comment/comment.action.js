import { SET_EPISODE_COMMENTS, SET_WEBTOON_COMMENTS } from './comment.type';

export const setWebtoonComments = (webtoonComments) => ({
  type: SET_WEBTOON_COMMENTS,
  payload: {
    webtoonComments,
  },
});
export const setEpisodeComments = (episodeComments) => ({
  type: SET_EPISODE_COMMENTS,
  payload: {
    episodeComments,
  },
});
