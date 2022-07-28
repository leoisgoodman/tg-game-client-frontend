<template>
  <div class="record_item" v-for="item in list" :key="item.id">
    <div class="record_head">
      <div class="record_left">
        <div class="col4 ps4">
          <span class="tag">试玩</span> {{ item.openData }}, {{ item.openData > 4 ? '大' : '小' }},
          {{ item.openData % 2 ? '单' : '双' }}
        </div>
        <!--        <div class="ps4">两面赔率: 1.95</div>-->
        <!--        <div class="ps4">号码赔率: 9.75</div>-->
      </div>
      <div class="record_right">
        <div class="ps4">
          <span v-if="item.status == 'Win'">盈:{{ item.winAmount }}</span>
          <span v-if="item.status == 'Lost'">亏:{{ item.amount }}</span>
        </div>
        <!--        <div class="ps4">佣金：0.2</div>-->
      </div>
    </div>
    <!--    <div class="ps4">庄家： 双:20 6:20</div>-->
    <div class="ps4">投注： {{ item.betName }}:{{ item.amount }}</div>

    <div class="ps4">BTCUSDT: {{ item.btcValue }} {{ item.issue }}</div>
  </div>
</template>

<script>
import { getBetOrderList } from '@/api/lottery';
import { ref } from 'vue';

export default {
  name: 'LotteryRecord',
  setup() {
    let list = ref([]);
    const params = {
      curPage: 0,
      pageSize: 20,
    };
    getBetOrderList(params).then((res) => {
      console.log(res);
      list.value = res.records;
    });
    return { list };
  },
};
</script>

<style lang="less" scoped>
.record_item {
  width: 90%;
  border-bottom: 1px dashed #eee;
  padding: 0.1333rem 0.2667rem;
  color: #888;
  .record_head {
    display: flex;
    justify-content: space-between;
    .col4 {
      color: #444;
      font-size: 14px;
    }
    .record_right {
      color: #444;
      font-size: 14px;
      text-align: right;
    }
  }
}
</style>
