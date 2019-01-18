<template>
  <div class="search">
    <!-- 上面的部分 -->
    <div class="tl-top">
      <div class="content">
        <div class="tl-select" @click="showAllSort">
          <span>全部分类</span>
          <Icon type="ios-arrow-down"></Icon>
        </div>
        <div class="tl-select" @click="showRecommendSort">
          <span>推荐排序</span>
          <Icon type="ios-arrow-down"></Icon>
        </div>
      </div>
    </div>
    <!-- 点击分类出现的内容 -->
    <div class="test" v-show="show">
      <div class="allsort">
        <div class="menu-left">
          <ul>
            <li
              class="menu-item"
              v-for="(item,index) in 6"
              :key="index"
              @click="showChildren(index)"
              :class="{active: active == index}"
            >
              <Icon type="ios-menu"/>
              <span>全部分类</span>
              <span class="num-menu">2373</span>
            </li>
          </ul>
        </div>
        <div class="menu-right">
          <ul>
            <li v-if="index==1">
              <ul>
                <li class="menu-item">全部文化古迹</li>
                <li class="menu-item">古建筑</li>
                <li class="menu-item">寺庙</li>
                <li class="menu-item">遗址</li>
                <li class="menu-item">故居</li>
                <li class="menu-item">世界遗产</li>
              </ul>
            </li>
            <li v-if="index==2">
              <ul>
                <li class="menu-item">全部农家度假</li>
                <li class="menu-item">采摘</li>
                <li class="menu-item">农家乐</li>
                <li class="menu-item">庄园</li>
                <li class="menu-item">度假村</li>
                <li class="menu-item">生态园</li>
              </ul>
            </li>
            <li v-if="index==3">
              <ul>
                <li class="menu-item">全部游乐场</li>
                <li class="menu-item">儿童乐园</li>
                <li class="menu-item">水上乐园</li>
                <li class="menu-item">主题乐园</li>
                <li class="menu-item">乐园</li>
                <li class="menu-item">迪士尼</li>
              </ul>
            </li>
            <li v-if="index==4">
              <ul>
                <li class="menu-item">全部自然风光</li>
                <li class="menu-item">山川</li>
                <li class="menu-item">江河湖泊</li>
                <li class="menu-item">峡谷</li>
                <li class="menu-item">地质景观</li>
                <li class="menu-item">瀑布</li>
              </ul>
            </li>
            <li v-if="index==5">
              <ul>
                <li class="menu-item">全部展馆</li>
                <li class="menu-item">博物馆</li>
                <li class="menu-item">展览馆</li>
                <li class="menu-item">人文艺术馆</li>
                <li class="menu-item">美术馆</li>
                <li class="menu-item">纪念馆</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="recommendSort" v-show="showRecommend">
      <div class="re-content">
        <div
          v-for="(item,index1) in 3"
          :key="index1"
          :class="{reActive:reActive==index1}"
          @click="showRecommendChildren(index1)"
          class="re-list border-bottom"
        >推荐排序</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ticketSearch",
  data() {
    return {
      show: false,
      showRecommend: false,
      index: "",
      index1: "",
      active: "",
      reActive: ""
    };
  },
  methods: {
    showChildren(index) {
      this.index = index;
      this.active = index;
    },
    showAllSort() {
      this.show = !this.show;
      this.showRecommend = false;
    },
    showRecommendChildren(index) {
      this.index1 = index;
      this.reActive = index;
    },
    showRecommendSort() {
      this.showRecommend = !this.showRecommend;
      this.show = false;
    }
  }
};
</script>
<style lang="less" scoped>
//~@代表根目录src
@import "~@/assets/styles/varibles.less";
.active {
  background: #f1f1f1;
}
.reActive {
  background: #f1f1f1;
}
.search {
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
  .test {
    z-index: 99;
    position: fixed;
    top: 1.64rem;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.45);
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
}
.recommendSort {
  z-index: 99;
  position: fixed;
  top: 1.64rem;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.45);
  transition-property: transform;
  transform-origin: 0px 0px 0px;
  transform: translate(0px, 0px) translateZ(0px);
  .re-content {
    background-color: #fff;
    .re-list {
      padding-left: 0.3rem;
      line-height: 0.8rem;
      height: 0.8rem;
      overflow: hidden;
      text-align: center;
      color: #212121;
    }
  }

  .border-bottom {
    border-color: #c7ced4;
  }
}
</style>
