<template>
  <div class="record_item" v-for="item in list" :key="item.id">
    <div class="record_head">
      <div class="record_left">
        <div class="col4 ps4"><span class="tag">试玩</span> 1 , 小 , 单</div>
        <div class="ps4">两面赔率: 1.95</div>
        <div class="ps4">号码赔率: 9.75</div>
      </div>
      <div class="record_right">
        <div class="ps4">盈: 40 余额：100659.235</div>
        <div class="ps4">佣金：0.2</div>
      </div>
    </div>
    <div class="ps4">庄家： 双:20 6:20</div>
    <div class="ps4">BTCUSDT: 23447.1 2022-07-22 17:18</div>
  </div>
</template>

<script>
export default {
  name: 'LotteryRecord',
  setup() {
    const list = [];

    for (let i = 0; i <= 100; i++) {
      const item = {
        id: i,
        date: '12:20',
        num: Math.floor(Math.random() * 10),
      };
      list.push(item);
    }
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
