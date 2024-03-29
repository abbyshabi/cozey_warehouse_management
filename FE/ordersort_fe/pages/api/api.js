import axios from 'axios';

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('Network error:', error);
    return Promise.reject(error);
  }
);

export default axios;
