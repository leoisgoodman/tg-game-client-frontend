<template>
  <div class="main">
    <div class="content">
      <div class="head">
        <span>群: 旺彩娱乐-试玩</span>
        <span>用户: root</span>
        <span style="color: #ff0">群主 庄家 100% </span>
      </div>
      <div class="router">
        <router-view />
      </div>
      <van-tabbar route active-color="#ee0a24" inactive-color="#000">
        <van-tabbar-item to="/rule" icon="bars">规则</van-tabbar-item>
        <van-tabbar-item to="/bet" icon="fire">投注</van-tabbar-item>
        <van-tabbar-item to="/main" icon="setting">庄家</van-tabbar-item>
        <van-tabbar-item to="/recharge" icon="gold-coin">充值提现</van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>
<script>
export default {
  setup() {},
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
  background-color: #f2f5f5;
  font-size: 0.32rem;

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
    .head {
      height: 50px;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      width: 100%;
      background: #f00;
      color: #fff;
      box-shadow: 0 5px 5px rgb(170 170 170 / 60%);
    }
    .router {
      box-sizing: border-box;
      height: calc(100% - 100px);
      overflow-y: auto;
    }
  }
}
</style>
