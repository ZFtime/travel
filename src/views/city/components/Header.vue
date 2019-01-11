<template>
  <div class="header">城市选择
    <router-link to="/">
      <div class="header-left">
        <Icon type="ios-arrow-back" class="left-back"/>
      </div>
    </router-link>
  </div>
</template>
<script>
export default {
  name: "CityHeader"
};
</script>
<style lang="less" scoped>
@import "../../../assets/styles/varibles.less";
.header {
  position: relative;
  text-align: center;
  overflow: hidden;
  height:.75rem;
  line-height:.74rem;
  color: #fff;
  background-color: @bgColor;
  font-size: 0.32rem;
  .left-back {
    color: #fff;
    position: absolute;
    top: 0;
    left: 0;
    line-height: 0.84rem;
    width: 0.64rem;
    text-align: left;
    font-size: 0.4rem;
  }
}
</style>
