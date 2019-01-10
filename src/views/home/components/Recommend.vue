<template>
  <div class="recommend">
    <div class="title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item in recommendList" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" :alt="item.itemTitle">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.itemTitle}}</p>
          <p class="item-desc">{{item.itemDesc}}</p>
          <button class="item-button">{{item.itemButton}}</button>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "HomeRecommend",
  data() {
    return {
      // recommendList: [
      //   {
      //     id: "0001",
      //     imgUrl:
      //       "http://img1.qunarzz.com/sight/p0/1712/95/95f38f28a6ff19cba3.img.jpg_200x200_af967e35.jpg",
      //     itemTitle: "水奥雪世界",
      //     itemDesc: "北京市顺义区奥林匹克水上公园",
      //     itemButton: "查看详情"
      //   },
      //   {
      //     id: "0002",
      //     imgUrl:
      //       "http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_200x200_1bc99086.jpg",
      //     itemTitle: "故宫",
      //     itemDesc: "北京市东城区景山前街4号",
      //     itemButton: "查看详情"
      //   },
      //   {
      //     id: "0003",
      //     imgUrl:
      //       "http://img1.qunarzz.com/sight/p0/1511/d2/d2aec2dfc5aa771290.water.jpg_200x200_69e4a80d.jpg",
      //     itemTitle: "南山滑雪场",
      //     itemDesc: "北京市密云县河南寨镇圣水头村",
      //     itemButton: "查看详情"
      //   }
      // ]
    };
  },
  props:{
    recommendList:Array
  }
};
</script>
<style lang="less" scoped>
.recommend {
  background-color: #fff;
  .title {
    // margin-top: 0.2rem;
    line-height: 0.8rem;
    background: #eee;
    text-indent: 0.2rem;
  }
  .item {
    overflow: hidden;
    display: flex;
    height: 1.9rem;
    .item-img {
      width: 1.7rem;
      height: 1.7rem;
      padding: 0.1rem;
    }
    .item-info {
      flex: 1;
      padding: 0.1rem;
      .item-title {
        line-height: 0.54rem;
        font-size: 0.32rem;
      }
      .item-desc {
        line-height: 0.4rem;
        color: #ccc;
      }
      .item-button {
        line-height: 0.14rem;
        margin-top: 0.16rem;
        background-color: #ff9300;
        padding: 0.2rem;
        border-radius: 0.06rem;
        color: #fff;
      }
    }
  }
}
</style>


