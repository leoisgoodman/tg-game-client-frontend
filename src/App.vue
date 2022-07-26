<template>
  <div class="main">
    <div class="content">
      <div class="router">
        <router-view />
      </div>
      <van-tabbar route active-color="#ee0a24" inactive-color="#000">
        <van-tabbar-item to="/rule" icon="bars">规则</van-tabbar-item>
        <van-tabbar-item to="/" icon="fire">投注</van-tabbar-item>
        <van-tabbar-item to="/main" icon="setting">庄家</van-tabbar-item>
        <van-tabbar-item to="/recharge" icon="gold-coin">充值提现</van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>
<script>
import { ref } from 'vue';

export default {
  setup() {
    const active = ref(0);
    return { active };
  },
};
</script>

<style lang="less" scoped>
.main {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  font-size: 12px;

  .content {
    width: 100%;
    max-width: 750px;
    overflow: hidden;
    background-color: #f7f8fa;
    /deep/ .van-tabbar--fixed {
      width: 100%;
      max-width: 750px;
      left: auto;
      // min-width: 750px;
    }
    .router {
      height: calc(100% - 50px);
      overflow-y: auto;
    }
  }
}
</style>
