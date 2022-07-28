import request from '@/utils/request';
import api from './allUrl';

/**
 * 获取用户信息
 * @returns {*}
 */
export function getLoad() {
  return request({
    url: api.load,
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
