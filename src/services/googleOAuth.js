import axios from 'axios';

const navigeteFn = url => {
  window.location.href = url;
};

export const googleOAuth = async () => {
  const res = await axios.post('http://localhost:3030/api/auth/request');
  const { data } = res;
  navigeteFn(data.url);
};
