import axios from 'axios';
import { getProfile } from '../lib/localstorage';

const { session } = getProfile();

const api = axios.create({
  baseURL: 'http://127.0.0.1:3333',
  headers: {
    Authorization: `Bearer ${session.token}`,
  },
});

export default api;
