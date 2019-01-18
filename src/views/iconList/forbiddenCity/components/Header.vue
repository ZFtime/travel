<template>
  <div class="header">
    <router-link to="/" tag="div">
      <div class="header-left">
        <Icon type="ios-arrow-back" class="left-back"/>
      </div>
    </router-link>
    <div class="header-input">我在故宫等你</div>
    <router-link to="/">
      <div class="header-right">
        <Icon type="ios-home"/>首页
      </div>
    </router-link>
  </div>
</template>
<script>
import { mapState, mapGetters } from "vuex";
export default {
  name: "forbiddenHeader",
  computed: {
    ...mapState(["city"])
    // 使用mapGetters
    // ...mapGetters(['doubleCity'])
  }
  // 父子传值之props   等下要引用父组件的数据
  // props: {
  //   city: String
  // }
};
</script>
<style lang="less" scoped>
//~@代表根目录src
@import "~@/assets/styles/varibles.less";

.header {
  display: flex;
  height: @headerHeight;
  line-height: @headerHeight;
  background-color: #1ba9ba;
  border-bottom: #1b7a8b 0.02rem solid;
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
    border-radius: 0.1rem;
    color: #fff;
    text-align: center;
    font-size: 0.32rem;
  }
  .header-right {
    min-width: 1.24rem;
    // padding: 0.1rem;
    float: right;
    text-align: center;
    color: #fff;
    .right-dropdown {
      font-size: 0.44rem;
      margin-left: -0.04rem;
    }
  }
}
</style>
