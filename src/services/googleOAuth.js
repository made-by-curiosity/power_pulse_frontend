import axios from 'axios';

// const BASE_URL = 'https://power-pulse.onrender.com';

const BASE_URL = 'http://localhost:3030';

axios.defaults.baseURL = BASE_URL;

const navigeteFn = url => {
  window.location.href = url;
};

export const googleOAuth = async () => {
  const res = await axios.post(`${BASE_URL}/api/auth/request`);
  const { data } = res;
  navigeteFn(data.url);
};
