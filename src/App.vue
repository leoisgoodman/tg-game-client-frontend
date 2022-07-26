<template>
  <div class="main">
    <div class="content">
      <router-view />
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

  .content {
    width: 100%;
    max-width: 750px;
    overflow: hidden;
    /deep/ .van-tabbar--fixed {
      width: 100%;
      max-width: 750px;
      left: auto;
      // min-width: 750px;
    }
  }
}
</style>
