//axios 통신 모듈
import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  withCredentials: true,
  responseType: 'json',
});

export default api;
