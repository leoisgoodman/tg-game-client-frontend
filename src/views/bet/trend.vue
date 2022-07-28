<template>
  <table class="bet_table" border="1">
    <tr class="th">
      <th></th>
      <th v-for="ver in defaultList" :key="ver">
        {{ ver }}
      </th>
      <th>大小</th>
      <th>单双</th>
    </tr>
    <tr v-for="item in list" :key="item.id">
      <th>{{ item.openTime }}</th>
      <td :class="{ active: Number(item.data) === ver }" v-for="ver in defaultList" :key="ver">
        <span v-if="Number(item.data) === ver"> {{ ver }} </span>
      </td>
      <td :class="{ red: item.data > 4 }">{{ item.data > 4 ? '大' : '小' }}</td>
      <td :class="{ red: item.data % 2 }">{{ item.data % 2 ? '单' : '双' }}</td>
    </tr>
  </table>
</template>

<script>
import { ref, onMounted } from 'vue';

import { getTrendRecordList } from '@/api/trend';
// import { onMounted } from 'vue';

export default {
  name: 'TrendView',
  setup() {
    const list = ref([]);
    const defaultList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const params = {
      curPage: 0,
      pageSize: 20,
    };
    // for (let i = 0; i <= 100; i++) {
    //   const item = {
    //     id: i,
    //     date: '12:20',
    //     num: Math.floor(Math.random() * 10),
    //   };
    //   list.push(item);
    // }
    // onMounted(() => {
    //   console.log('dsfdsfds');
    //   this.getList().then((res) => {
    //     //获取当前用户信息
    //     console.log(res);
    //   });
    // });
    onMounted(() => {
      getTrendRecordList(params).then((res) => {
        console.log(res);
        list.value = res.records;
      });
    });
    return { list, defaultList };
  },
};
</script>

<style lang="less" scoped>
.bet_table {
  width: 90%;
  border-color: #ddd;
  border-collapse: collapse;

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
    color: #f00;
  }
}
</style>
