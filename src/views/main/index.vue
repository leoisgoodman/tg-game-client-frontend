<template>
  <div class="main_view">
    <van-tabs v-model:active="active" class="main_tabs">
      <van-tab title="群管理">
        <div class="main_item">
          <GroupManag />
        </div>
      </van-tab>
      <van-tab title="所有投注"><AllBets /> </van-tab>
      <van-tab title="换庄"> <ChangeMaker /></van-tab>
      <van-tab title="赔率设置"><SetOdds /> </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import AllBets from './allBets.vue';
import ChangeMaker from './changeMaker.vue';
import GroupManag from './groupManag.vue';
import SetOdds from './setOdds.vue';
export default {
  name: 'MainView',
  components: {
    AllBets,
    ChangeMaker,
    GroupManag,
    SetOdds,
  },
};
</script>

<style lang="less" scoped>
.main_view {
  .main_tabs {
    /deep/ .van-tabs__nav {
      background-color: transparent;
    }
    /deep/ .van-tabs__line {
      width: 2.1333rem;
      height: 1px;
    }
  }
  .main_item {
    width: 100%;
    margin: 0.2667rem 0;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
}
</style>
