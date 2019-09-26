import axios from 'axios';

const api = axios.create({
  baseURL: 'http://private-anon-4a82813977-tradersclubapi.apiary-mock.com/api',
});

export default api;
