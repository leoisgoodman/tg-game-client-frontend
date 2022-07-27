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
          <TrendView />
        </div>
      </van-tab>
      <van-tab title="开奖记录">
        <div class="bet_tabs_con">
          <LotteryRecord />
        </div>
      </van-tab>
      <van-tab>
        <template #title>投注记录<van-icon name="replay" /></template>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { getLoad } from '@/api';
import TrendView from './trend.vue';
import LotteryRecord from './lotteryRecord.vue';

export default {
  name: 'BetView',
  components: { TrendView, LotteryRecord },
  setup() {
    const minNum = [0, 1, 2, 3, 4];
    const maxNum = [5, 6, 7, 8, 9];

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

    onMounted(() => {
      getLoad().then((res) => {
        //获取当前用户信息
        console.log(res);
      });
    });
    return { minNum, maxNum, butState, setButState, active, activeList, setActiveList };
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
      align-items: center;
      flex-direction: column;
    }
  }
}
</style>
