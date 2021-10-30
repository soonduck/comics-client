import { LOGIN, LOGOUT, MYINFO } from './user.type';

export const login = (token) => ({
  type: LOGIN,
  payload: { token },
});
export const logout = () => ({
  type: LOGOUT,
});
export const myInfo = (user) => ({
  type: MYINFO,
  payload: { user },
});
