import axios from 'axios';

axios.interceptors.response.use(null, error => {
  const errorExpected =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!errorExpected) {
    console.log('Logging the error', error);
    alert('An unexpected error occurred');
  }
  return Promise.reject(error);
});

export default {
  get: axios.get,
  put: axios.put,
  post: axios.post,
  delete: axios.delete,
};
