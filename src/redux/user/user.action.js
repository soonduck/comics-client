import { LOGIN } from './user.type';

export const login = (token) => ({
  type: LOGIN,
  payload: { token },
});
