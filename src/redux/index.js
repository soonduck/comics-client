import { combineReducers } from 'redux';
import userReducer from './user/user.reducer';
import webtoonReducer from './webtoon/webtoon.reducer';
import commentReducer from './comment/comment.reducer';

const rootReducer = combineReducers({
  userReducer,
  webtoonReducer,
  commentReducer,
});

export default rootReducer;
