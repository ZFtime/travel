<template>
  <div class="header">
    <div class="header-left">
      <Icon type="ios-arrow-back" class="left-back"/>
    </div>
    <div class="header-input">
      <Icon type="ios-search"/>输入城市/景点/游玩主题
    </div>
    <div class="header-right">三亚
      <Icon type="md-arrow-dropdown" class="right-dropdown"/>
    </div>
  </div>
</template>
<script>
export default {
    name:'HomeHeader'
};
</script>
<style lang="less" scoped>
//~@代表根目录src
@import "~@/assets/styles/varibles.less";

.header {
  display: flex;
  height: 0.86rem;
  line-height: 0.86rem;
  background-color: @bgColor;
  color: #fff;
  .header-left {
    width: 0.64rem;
    float: left;
    .left-back {
      font-size: 0.4rem;
      text-align: center;
    }
  }
  .header-input {
    flex: 1;
    height: 0.64rem;
    line-height: 0.64rem;
    margin-top: 0.12rem;
    margin-left: 0.2rem;
    padding-left: 0.2rem;
    background-color: #fff;
    border-radius: 0.1rem;
    color: #ccc;
  }
  .header-right {
    width: 1.24rem;
    float: right;
    text-align: center;
    .right-dropdown {
      font-size: 0.44rem;
      margin-left: -0.04rem;
    }
  }
}
</style>
