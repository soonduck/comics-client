import { LOGIN, LOGOUT } from './user.type';

export const login = (token) => ({
  type: LOGIN,
  payload: { token },
});
export const logout = () => ({
  type: LOGOUT,
});
