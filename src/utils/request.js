import axios from 'axios';
import { Toast } from 'vant';

const request = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL,
  timeout: 25000,
});

// 异常拦截处理器
const errorHandler = (error) => {
  if (error.response) {
    const data = error.response.data;
    if (error.response.status === 403) {
      Toast(data.message);
    }
  } else {
    Toast('请求超时!');
  }
  return Promise.reject(error);
};

request.interceptors.request.use((config) => {
  config.headers['timeZone'] = new Date().getTimezoneOffset();
  config.headers['Content-Type'] = config.headers['Content-Type'] ? config.headers['Content-Type'] : 'application/json';
  return config;
}, errorHandler);

// response interceptor
request.interceptors.response.use((response) => {
  return response.data;
}, errorHandler);

export default request;
