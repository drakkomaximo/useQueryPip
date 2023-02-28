import axios from 'axios';

export const AxiosInstance = axios.create({
  baseURL: '',
  headers: { 'Content-type': 'application/json' },
});
