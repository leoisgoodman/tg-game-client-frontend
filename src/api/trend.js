import request from '@/utils/request';
import api from './allUrl';

/**
 * 获取趋势数据
 * @param parameter
 * @returns {*}
 */
export function getTrendRecordList(parameter) {
  return request({
    url: api.getTrendRecordList,
    params: parameter,
  });
}
