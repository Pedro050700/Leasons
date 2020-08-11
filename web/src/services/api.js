import axios from 'axios';
import { getProfile } from '../lib/localstorage';

const userProfile = getProfile();

const token = userProfile !== null ? userProfile.session.token : '';

const api = axios.create({
  baseURL: 'http://127.0.0.1:3333',
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export default api;
