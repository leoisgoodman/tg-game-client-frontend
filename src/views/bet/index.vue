<template>
  <div class="bet">
    <div class="bet_head">彩票已关停 <span class="tag ml20">试玩</span></div>
    <div class="bet_form">
      <div class="bet_input">
        <span> {{ butState ? '选中号码各投注：' : '投注金额：' }} </span>
        <input type="text" />
        <span>USDT</span>
      </div>
      <div class="bet_but" v-show="!butState">
        <van-button color="#1ae" size="small">大</van-button>
        <van-button color="#1ae" size="small">小</van-button>
        <van-button color="#1ae" size="small">单</van-button>
        <van-button color="#1ae" size="small">双</van-button>
        <van-button color="#3369E8" @click="setButState" size="small">号码</van-button>
      </div>
      <div class="bet_but_group" v-show="butState">
        <div class="bet_but_num">
          <van-button
            :color="activeList.includes(ver) ? '#1ae' : ' #adaaaa'"
            size="small"
            v-for="ver in minNum"
            :key="ver"
            @click="setActiveList(ver)"
          >
            {{ ver }}
          </van-button>
        </div>
        <div class="bet_but_num">
          <van-button
            :color="activeList.includes(ver) ? '#1ae' : ' #adaaaa'"
            size="small"
            v-for="ver in maxNum"
            :key="ver"
            @click="setActiveList(ver)"
          >
            {{ ver }}
          </van-button>
        </div>
        <div class="bet_but_num">
          <van-button color="#1ae" size="small">确定</van-button>
          <van-button type="default" @click="setButState" size="small">取消</van-button>
        </div>
      </div>
    </div>

    <van-tabs v-model:active="active" class="bet_tabs">
      <van-tab>
        <template #title>走势图<van-icon name="replay" /></template>
        <div class="bet_tabs_con">
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
        </div>
      </van-tab>
      <van-tab title="开奖记录">
        <div class="bet_tabs_con">
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
        </div>
      </van-tab>
      <van-tab>
        <template #title>投注记录<van-icon name="replay" /></template>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'BetView',
  setup() {
    const list = [];
    const minNum = [0, 1, 2, 3, 4];
    const maxNum = [5, 6, 7, 8, 9];
    const defaultList = minNum.concat(maxNum);

    for (let i = 0; i <= 100; i++) {
      const item = {
        id: i,
        date: '12:20',
        num: Math.floor(Math.random() * 10),
      };
      list.push(item);
    }

    let butState = ref(false);
    const activeList = ref([]);

    const setButState = () => {
      activeList.value = [];
      butState.value = !butState.value;
    };

    const active = ref(0);

    const setActiveList = (num) => {
      if (activeList.value.includes(num)) {
        activeList.value.forEach((element, i) => {
          if (element === num) {
            activeList.value.splice(i, 1);
          }
        });
      } else {
        activeList.value.push(num);
      }
    };
    return { minNum, maxNum, list, defaultList, butState, setButState, active, activeList, setActiveList };
  },
};
</script>

<style lang="less" scoped>
.bet {
  display: flex;
  flex-direction: column;

  .bet_head {
    border-bottom: 1px solid #ddd;
    text-align: center;
    padding: 0.32rem;
  }

  .bet_form {
    padding: 0.5333rem;
    padding-bottom: 0.2667rem;
    border-bottom: 1px solid #ddd;
    .bet_input {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .bet_but {
      margin: 0.2133rem 1.0667rem;
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
    .bet_but_group {
      margin: 0.2133rem 1.0667rem;
      .bet_but_num {
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin-bottom: 0.2133rem;
      }
    }
  }

  .bet_tabs {
    /deep/ .van-tabs__nav {
      background-color: transparent;
    }
    /deep/ .van-tabs__line {
      width: 2.6667rem;
      height: 1px;
    }
    .bet_tabs_con {
      width: 100%;
      margin: 0.2667rem 0;
      display: flex;
      justify-content: center;
      flex-direction: column;
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
    }
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
  }
}
</style>
