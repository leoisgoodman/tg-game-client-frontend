<template>
  <div>
    <router-view />
    <van-button type="primary">主要按钮</van-button>
    <van-button type="success">成功按钮</van-button>
    <van-button type="default">默认按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>
  </div>
</template>
<script>
import { getCurrentInstance } from 'vue';
// import { Toast } from 'vant';
// import 'vant/es/toast/style';

import { onMounted } from 'vue';

export default {
  setup() {
    const { proxy } = getCurrentInstance();
    onMounted(() => {
      proxy.$toast('提示内容');
    });
  },
};
</script>

<style lang="less"></style>
