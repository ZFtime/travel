<template>
  <div class="search">
    <!-- 上面的部分 -->
    <div class="tl-top">
      <div class="content">
        <div class="tl-select">
          <span>全部分类</span>
          <Icon type="ios-arrow-down"></Icon>
        </div>
        <div class="tl-select">
          <span>推荐排序</span>
          <Icon type="ios-arrow-down"></Icon>
        </div>
      </div>
      <!-- 点击分类出现的内容 -->
      <div class="allsort">
        <div class="menu-left">
          <ul>
            <li
              class="menu-item"
              v-for="(item,index) in 6"
              :key="index"
              @click="showChildren(index)"
            >
              <Icon type="ios-menu"/>
              <span>全部分类</span>
              <span class="num-menu">2373</span>
            </li>
          </ul>
        </div>
        <div class="menu-right">
          <ul v-if="seen==index">
            <li class="menu-item">全部文化古迹</li>
            <li class="menu-item">全部文化古迹</li>
            <li class="menu-item">全部文化古迹</li>
            <li class="menu-item">全部文化古迹</li>
            <li class="menu-item">全部文化古迹</li>
            <li class="menu-item">全部文化古迹</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ticketSearch",
  data() {
    return {
      seen: -1,
      value: false,
      index: ""
    };
  },
  methods: {
    showChildren(index) {
      this.seen = index;
      this.index = index;
    }
  }
};
</script>
<style lang="less" scoped>
//~@代表根目录src
@import "~@/assets/styles/varibles.less";
.search {
  //   display: flex;
  //   flex-direction: column;
  //   justify-content: center;
  z-index: 99;
  position: fixed;
  top: 0.9rem;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.45);
  .content {
    height: 0.8rem;
    line-height: 0.8rem;
    display: flex;
    flex-flow: row wrap;
    border-top: 1px solid #eaeaea;
    border-bottom: 1px solid #eaeaea;
    background-color: #fff;
    .tl-select:first-child {
      border-left: 0;
    }
    .tl-select {
      flex: 1;
      border-left: 1px solid #eaeaea;
      display: block;
      box-flex: 1;
      display: block;
      width: 100%;
      box-sizing: border-box;
      width: 100%;
      height: 0.8rem;
      overflow: hidden;
      position: relative;
      color: #212121;
      line-height: 0.8rem;
      text-align: center;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
  .allsort {
    background-color: #fff;
    display: flex;
    flex-flow: row wrap;
    .menu-left {
      flex: 1;
      .menu-item {
        padding-left: 0.3rem;
        line-height: 0.75rem;
        height: 0.75rem;
        overflow: hidden;
        text-align: left;
        color: #212121;
        font-size: 0.24rem;
        border-bottom: 1px solid #eaeaea;
        .num-menu {
          line-height: 0.8rem;
          margin-right: 0.2rem;
          float: right;
          color: #9e9e9e;
        }
      }
    }
    .menu-right {
      flex: 1;
      background-color: #f1f1f1;
      .menu-item {
        padding-left: 0.3rem;
        line-height: 0.75rem;
        height: 0.75rem;
        overflow: hidden;
        text-align: left;
        color: #212121;
        font-size: 0.24rem;
      }
    }
  }
}
</style>
