import request from '@/utils/request';
import api from './allUrl';

/**
 * 获取开奖记录
 * @param parameter
 * @returns {*}
 */
export function getBetOrderList(parameter) {
  return request({
    url: api.getBetOrderList,
    params: parameter,
  });
}

/**
 * 用户下注
 * @param parameter
 * @returns {*}
 */
export function addBetOrder(parameter) {
  return request({
    url: api.addBetOrder,
    params: parameter,
  });
}
