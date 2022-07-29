import request from '@/utils/request';
import api from './allUrl';

/**
 * 获取用户信息
 * @returns {*}
 */
export function getLoad() {
  return request({
    // method: 'post',  // 默认 get
    url: api.load,
    // params: params,  // params就是query参数
    // data: params // data就是body参数
  });
}

/**
 * 获取当前期数
 * @returns {*}
 */
export function getCurrentRecord() {
  return request({
    url: api.getCurrentRecord,
  });
}
