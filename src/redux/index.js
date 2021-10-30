import { combineReducers } from 'redux';
import userReducer from './user/user.reducer';
import webtoonReducer from './webtoon/webtoon.reducer';

const rootReducer = combineReducers({ userReducer, webtoonReducer });

export default rootReducer;
