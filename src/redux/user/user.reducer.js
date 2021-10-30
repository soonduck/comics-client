import { LOGIN, LOGOUT } from './user.type';
import Cookies from 'universal-cookie/lib';

const cookies = new Cookies();

const initialState = {
  user: {},
  token: cookies.get('x-jwt') || '',
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        token: action.payload.token,
      };
    case LOGOUT:
      return {
        user: {},
        token: '',
      };
    default:
      return state;
  }
}
