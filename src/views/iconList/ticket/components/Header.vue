<template>
  <div class="header">
    <router-link tag="div" to="/">
      <div class="header-left">
        <Icon type="ios-arrow-back" class="left-back"/>
      </div>
    </router-link>
    <div class="header-input">
      <input type="text" placeholder="输入城市或景点" :value="iconDesc">
    </div>
    <router-link to="/city">
      <div class="header-right">
        <!-- {{this.city}} -->
        搜索
      </div>
    </router-link>
  </div>
</template>
<script>
// import { mapState, mapGetters } from "vuex";
export default {
  name: "ticketHeader",
  data() {
    return {
      iconDesc: ""
    };
  },
  mounted() {
    this.receiveData();
  },
  methods: {
    receiveData() {
      this.iconDesc = this.$route.name.split("_")[1];
    }
  }
};
</script>
<style lang="less" scoped>
//~@代表根目录src
@import "~@/assets/styles/varibles.less";

.header {
  display: flex;
  height: @headerHeight;
  line-height: @headerHeight;
  background-color: #ffffff;
  color: #616161;
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
    padding-right: 0.2rem;
    border-radius: 0.3rem;
    text-align: center;
    background: #f2f2f2;
    color: #212121;
    input {
      width: 100%;
      height: 0.4rem;
      line-height: 0.4rem;
      padding: 0.1rem 0;
      background: #f2f2f2;
      border: 0;
      font-family: "Microsoft Yahei", Arial;
      font-size: 0.28rem;
      // border-radius: 0.06rem;
      text-align: center;
    }
  }
  .header-right {
    min-width: 1.24rem;
    padding: 0.1rem;
    float: right;
    text-align: center;
    color: #616161;
    .right-dropdown {
      font-size: 0.44rem;
      margin-left: -0.04rem;
    }
  }
}
</style>
