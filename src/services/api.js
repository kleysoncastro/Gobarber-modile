import axios from 'axios';

const api = axios.create({
  base: 'http://192.168.11.5:3333',
});

export default api;
