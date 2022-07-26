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
      <th>{{ item.date }}</th>
      <td :class="{ active: item.num === ver }" v-for="ver in defaultList" :key="ver">
        <span v-if="item.num === ver"> {{ ver }} </span>
      </td>
      <td :class="{ red: item.num > 4 }">{{ item.num > 4 ? '大' : '小' }}</td>
      <td :class="{ red: item.num % 2 }">{{ item.num % 2 ? '单' : '双' }}</td>
    </tr>
  </table>
</template>

<script>
export default {
  name: 'TrendView',
  setup() {
    const list = [];
    const defaultList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    for (let i = 0; i <= 100; i++) {
      const item = {
        id: i,
        date: '12:20',
        num: Math.floor(Math.random() * 10),
      };
      list.push(item);
    }
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
