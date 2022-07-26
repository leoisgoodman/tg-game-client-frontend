<template>
  <div class="user_item" v-for="item in list" :key="item.id">
    <div class="user_left">
      <div class="ps4">root@time_never_again</div>
      <div class="ps4">余额：100659.235 投注：0 盈利：-52.4禁投</div>
    </div>
    <van-button :color="item.state ? '#adaaaa' : '#f00'" size="mini" @click="setListState(item.id)">
      {{ item.state ? '禁投' : '允投' }}
    </van-button>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'GroupManag',
  setup() {
    const list = ref([]);
    for (let i = 0; i <= 100; i++) {
      const item = {
        id: i,
        state: true,
      };
      list.value.push(item);
    }
    const setListState = (id) => {
      list.value.map((item) => {
        if (item.id === id) {
          item.state = !item.state;
        }
        return item;
      });
    };
    return { list, setListState };
  },
};
</script>

<style lang="less" scoped>
.user_item {
  width: 90%;
  border-bottom: 1px dashed #eee;
  padding: 0.1333rem 0.2667rem;
  color: #888;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .user_left {
    color: #444;
  }
  .user_right {
  }
}
</style>
