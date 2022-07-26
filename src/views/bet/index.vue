<template>
  <div class="bet">
    投注
    <van-cell-group inset>
      <van-field v-model="value" label="文本" placeholder="请输入用户名" />
    </van-cell-group>
    <van-cell-group inset>
      <!-- 输入任意文本 -->
      <van-field v-model="text" label="文本" />
      <!-- 输入手机号，调起手机号键盘 -->
      <van-field v-model="tel" type="tel" label="手机号" />
      <!-- 允许输入正整数，调起纯数字键盘 -->
      <van-field v-model="digit" type="digit" label="整数" />
      <!-- 允许输入数字，调起带符号的纯数字键盘 -->
      <van-field v-model="number" type="number" label="数字" />
      <!-- 输入密码 -->
      <van-field v-model="password" type="password" label="密码" />
    </van-cell-group>
    <div></div>
    <table class="table" border="1">
      <tr class="th">
        <th></th>
        <th v-for="ver in defaultList" :key="ver">
          {{ ver }}
        </th>
        <th>大小</th>
        <th>单双</th>
      </tr>
      <tr v-for="item in list" :key="item.id">
        <th>{{ item.date }}</th>
        <td :class="{ active: item.num === ver }" v-for="ver in defaultList" :key="ver">
          <span v-if="item.num === ver"> {{ ver }} </span>
        </td>
        <td :class="{ red: item.num > 4 }">{{ item.num > 4 ? '大' : '小' }}</td>
        <td :class="{ red: item.num % 2 }">{{ item.num % 2 ? '单' : '双' }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'BetView',
  setup() {
    const value = ref('');
    const tel = ref('');
    const text = ref('');
    const digit = ref('');
    const number = ref('');
    const password = ref('');
    const list = [];
    const defaultList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    for (let i = 0; i <= 100; i++) {
      const item = {
        id: i,
        date: '12:20',
        num: defaultList[i % 10],
      };
      list.push(item);
    }
    return { value, tel, text, digit, number, password, list, defaultList };
  },
};
</script>

<style lang="less" scoped>
.bet {
  display: flex;
  flex-direction: column;
  .table {
    border-color: #ddd;
    border-collapse: collapse;
    margin: 0.2667rem 0.4rem;
    th {
      background-color: #eee;
    }
    td {
      text-align: center;
    }
    .active {
      background: #bee;
    }
    .red {
      color: red;
    }
  }
}
</style>
