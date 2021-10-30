import { LOGIN, LOGOUT, MY_INFO } from './user.type';

export const login = (token) => ({
  type: LOGIN,
  payload: { token },
});
export const logout = () => ({
  type: LOGOUT,
});
export const myInfo = (user) => ({
  type: MY_INFO,
  payload: { user },
});
