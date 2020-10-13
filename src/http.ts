import axios from 'axios';

// axios 配置
axios.defaults.timeout = 5000;

// http request 拦截器
axios.interceptors.request.use(
  (config: any) => {
    return config;
  },
  (err: any) => Promise.reject(err)
);

// http response 拦截器
axios.interceptors.response.use(
  (response: any) => {
    return response.data;
  },
  (error: any) => {
    return Promise.reject(error.response.data);
  }
);

export default axios;
