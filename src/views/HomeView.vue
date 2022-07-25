<template>
  <div class="home">
    <div>asdfasdfas</div>
    <img v-webp alt="Vue logo" src="../assets/lb.png" />
    <div v-webpg class="lb"></div>
  </div>
</template>

<style lang="less" scoped>
.lb {
  .webpbg('@/assets/lb.png');
  width: 200px;
  height: 200px;
  background-size: cover;
}
</style>
