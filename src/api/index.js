import request from '@/utils/request';
import api from './allUrl';

export function getLoad() {
  return request({
    url: api.load,
  });
}
