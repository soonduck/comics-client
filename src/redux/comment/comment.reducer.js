import { SET_EPISODE_COMMENTS, SET_WEBTOON_COMMENTS } from './comment.type';

const initialState = {
  webtoonComments: {},
  episodeComments: {},
};

export default function commentReducer(state = initialState, action) {
  switch (action.type) {
    case SET_WEBTOON_COMMENTS:
      return { ...state, webtoonComments: action.payload.webtoonComments };
    case SET_EPISODE_COMMENTS:
      return { ...state, episodeComments: action.payload.episodeComments };
    default:
      return state;
  }
}
