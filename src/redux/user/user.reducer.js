import { LOGIN } from './user.type';

const initialState = {
  user: {},
  token: '',
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        token: action.payload.token,
      };
    default:
      return state;
  }
}
