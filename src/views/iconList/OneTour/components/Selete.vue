<template>
  <div class="selete">
    <!-- 上面的部分 -->
    <div class="tl-top">
      <div class="content">
        <div
          class="tl-select"
          v-for="(item,index) in caption"
          :key="index"
          @click="showMask(index)"
        >
          <span :class="{open:show==index}">{{item}}</span>
          <Icon v-if="seen==index" type="ios-arrow-up"/>
          <Icon v-else type="ios-arrow-down"></Icon>
        </div>
      </div>
    </div>
    <!-- 全部分类 -->
    <div class="test" v-show="show==0">
      <div class="allsort">
        <div class="menu-left">
          <ul>
            <li
              class="menu-item"
              v-for="(item,index) in sortAll"
              :key="index"
              @click="showList(index)"
            >
              <img class="menu-item-icon" :src="item.imgUrl">
              <span>{{item.name}}</span>
              <span class="num-menu">{{item.number}}</span>
            </li>
          </ul>
        </div>
        <div class="menu-right">
          <ul>
            <li v-if="index==1">
              <ul>
                <li class="menu-item">一日游</li>
                <li class="menu-item">周边游</li>
                <li class="menu-item">当地游</li>
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
    <!-- 全部目的地 -->
    <div class="test" v-show="show==1">
      <div class="allsort">
        <div class="menu-left">
          <ul>
            <li
              class="menu-item menu-center"
              v-for="(item,index) in desAll"
              :key="index"
              @click="showList(index)"
            >
              <span>{{item}}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 推荐票排序 -->
    <div class="test" v-show="show==2">
      <div class="allsort">
        <div class="menu-left">
          <ul>
            <li
              class="menu-item menu-center"
              v-for="(item,index) in recAll"
              :key="index"
              @click="showList(index)"
            >
              <span>{{item}}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "TourSelete",
  data() {
    return {
      show: -1,
      index: 0,
      close: false,
      seen: -1,
      caption: ["全部分类", "全部目的地", "推荐票排序"],
      sortAll: [
        {
          imgUrl:
            "https://img1.qunarzz.com/piao/fusion/1509/9d/0ee9e4808773f.png",
          name: "全部分类",
          number: "201"
        },
        {
          imgUrl:
            "https://imgs.qunarzz.com/piao/fusion/1608/8b/4bea8e26d8f12502.png",
          name: "一日游",
          number: "201"
        },
        {
          imgUrl:
            "https://imgs.qunarzz.com/piao/fusion/1608/73/0c8e23368dceac02.png",
          name: "文化古迹",
          number: "34"
        },
        {
          imgUrl:
            "https://imgs.qunarzz.com/piao/fusion/1608/15/d94c0a3f16a48a02.png",
          name: "交通",
          number: "27"
        },
        {
          imgUrl:
            "https://imgs.qunarzz.com/piao/fusion/1608/86/95cb8117ad91a402.png",
          name: "温泉",
          number: "6"
        },
        {
          imgUrl:
            " https://imgs.qunarzz.com/piao/fusion/1608/3e/72d2396d47131702.png",
          name: "运动健身",
          number: "3"
        }
      ],
      desAll: ["全部目的地", "北京", "天津", "张家口", "承德", "忻州"],
      recAll: [
        "推荐排序",
        "销量最高",
        "价格最高",
        "价格最低",
        "热门评论",
        "本周最热"
      ]
    };
  },
  methods: {
    showMask(i) {
      if (this.show == i) {
        this.show = -1;
        this.seen = -1;
        return;
      }
      this.show = i;
      this.seen = i;
    },
    showList(i) {
      this.index = i;
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
.open {
  color: #00afc7;
}
.reActive {
  background: #f1f1f1;
}
.selete {
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
          .menu-item-icon {
            width: 0.3rem;
            height: 0.3rem;
            vertical-align: middle;
            margin-right: 0.1rem;
          }
          .num-menu {
            line-height: 0.8rem;
            margin-right: 0.2rem;
            float: right;
            color: #9e9e9e;
          }
        }
        .menu-center {
          text-align: center;
          font-size: 14px;
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
