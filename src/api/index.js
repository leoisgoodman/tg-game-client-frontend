import request from '@/utils/request';
import api from './allUrl';

export function getUser(parameter) {
  return request({
    url: api.LogIn,
    params: parameter,
  });
}
