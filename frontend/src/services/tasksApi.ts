import axios from 'axios';

export const taskApi = axios.create({
  baseURL: 'https://localhost:3001',
});

export const tokenService = {
  set(token: string) {
    taskApi.defaults.headers.Authorization = `Bearer ${token}`;
  },
  unset() {
    taskApi.defaults.headers.Authorization = null;
  },
};
