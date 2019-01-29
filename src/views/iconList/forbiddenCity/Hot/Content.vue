<template>
  <div class="content">
    <ul class="tab">
      <li
        v-for="(item,index) in List"
        :key="index"
        class="tab-item tab-selected"
        @click="handleShow(index)"
        :class="{changeSelected:show==index}"
      >{{item}}</li>
    </ul>
    <!-- 玩转故宫 -->
    <div class="cont" v-show="show==0">
      <ul class="detail-more clearfix">
        <li class="item-more" v-for="(item,index) in playList" :key="index">
          <div class="item-cont">
            <div class="item-img">
              <img :src="item.bannenImg" :alt="item.sighttName">
              <span class="name">{{item.sighttName}}</span>
            </div>
            <div class="info">
              <h3 class="title">{{item.sighttInfoTitle}}</h3>
              <div class="lure">
                <span class="hot-btn">抢购</span>
                <span class="hot-price">
                  ¥
                  <em class="hot-price-num">{{item.InfoPrice}}</em>
                </span>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <!-- 热销套票 -->
    <div class="cont" v-show="show==1">
      <ul class="detail-more clearfix">
        <li class="item-more" v-for="(item,index) in SellWellList" :key="index">
          <div class="item-cont">
            <div class="item-img">
              <img :src="item.bannenImg" :alt="item.sighttName">
              <span class="name">{{item.sighttName}}</span>
            </div>
            <div class="info">
              <h3 class="title">{{item.sighttInfoTitle}}</h3>
              <div class="lure">
                <span class="hot-btn">抢购</span>
                <span class="hot-price">
                  ¥
                  <em class="hot-price-num">{{item.InfoPrice}}</em>
                </span>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <!-- 周边必游 -->
    <div class="cont" v-show="show==2">
      <ul class="detail-more clearfix">
        <li class="item-more" v-for="(item,index) in MustTourList" :key="index">
          <div class="item-cont">
            <div class="item-img">
              <img :src="item.bannenImg" :alt="item.sighttName">
              <span class="name">{{item.sighttName}}</span>
            </div>
            <div class="info">
              <h3 class="title">{{item.sighttInfoTitle}}</h3>
              <div class="lure">
                <span class="hot-btn">抢购</span>
                <span class="hot-price">
                  ¥
                  <em class="hot-price-num">{{item.InfoPrice}}</em>
                </span>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "forbiddenContent",
  data() {
    return {
      show: 0,
      List: ["玩转故宫", "热销套票", "周边必游"],
      playList: [
        {
          sighttName: "故宫",
          sighttInfoTitle: "【下午场】故宫成人票凭身份证快速入园（淡季）",
          sightInfoDetail: "东方宫殿建筑代表，世界宫殿建筑典范",
          InfoPrice: "40",
          bannenImg:
            "https://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_290x180_aad89f75.jpg"
        },
        {
          sighttName: "故宫",
          sighttInfoTitle: "【下午场】故宫成人票凭身份证快速入园（淡季）",
          sightInfoDetail: "东方宫殿建筑代表，世界宫殿建筑典范",
          InfoPrice: "40",
          bannenImg:
            "https://img1.qunarzz.com/piao/fusion/1607/41/5837c598ef45b8b6.png_290x180_d5ab7067.png"
        },
        {
          sighttName: "故宫",
          sighttInfoTitle: "【下午场】故宫成人票凭身份证快速入园（淡季）",
          sightInfoDetail: "东方宫殿建筑代表，世界宫殿建筑典范",
          InfoPrice: "40",
          bannenImg:
            "https://img1.qunarzz.com/piao/fusion/1605/fc/e31ec51c58632ff7.jpg_290x180_a0b9afd2.jpg"
        },
        {
          sighttName: "故宫",
          sighttInfoTitle: "【下午场】故宫成人票凭身份证快速入园（淡季）",
          sightInfoDetail: "东方宫殿建筑代表，世界宫殿建筑典范",
          InfoPrice: "40",
          bannenImg:
            "https://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_290x180_aad89f75.jpg"
        }
      ],
      SellWellList: [
        {
          sighttName: "故宫",
          sighttInfoTitle: "【下午场】故宫成人票凭身份证快速入园（淡季）",
          sightInfoDetail: "东方宫殿建筑代表，世界宫殿建筑典范",
          InfoPrice: "40",
          bannenImg:
            "https://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_290x180_aad89f75.jpg"
        },
        {
          sighttName: "故宫",
          sighttInfoTitle: "【下午场】故宫成人票凭身份证快速入园（淡季）",
          sightInfoDetail: "东方宫殿建筑代表，世界宫殿建筑典范",
          InfoPrice: "40",
          bannenImg:
            "https://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_290x180_aad89f75.jpg"
        },
        {
          sighttName: "故宫",
          sighttInfoTitle: "【下午场】故宫成人票凭身份证快速入园（淡季）",
          sightInfoDetail: "东方宫殿建筑代表，世界宫殿建筑典范",
          InfoPrice: "40",
          bannenImg:
            "https://img1.qunarzz.com/piao/fusion/1607/56/7e27875077bb51b6.jpg_290x180_fa225081.jpg"
        },
        {
          sighttName: "故宫",
          sighttInfoTitle: "【下午场】故宫成人票凭身份证快速入园（淡季）",
          sightInfoDetail: "东方宫殿建筑代表，世界宫殿建筑典范",
          InfoPrice: "40",
          bannenImg:
            "https://img1.qunarzz.com/piao/fusion/1607/41/5837c598ef45b8b6.png_290x180_d5ab7067.png"
        }
      ],
      MustTourList: [
        {
          sighttName: "颐和园",
          sighttInfoTitle: "北京颐和园门票+资深导游讲解服务·成人票",
          InfoPrice: "40",
          bannenImg:
            "https://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_290x180_aad89f75.jpg"
        },
        {
          sighttName: "恭王府",
          sighttInfoTitle: "北京恭王府门票+人工讲解服务*成人票",
          InfoPrice: "60",
          bannenImg:
            "https://img1.qunarzz.com/piao/fusion/1607/41/5837c598ef45b8b6.png_290x180_d5ab7067.png"
        },
        {
          sighttName: "什刹海",
          sighttInfoTitle: "北京北海公园门票成人票",
          InfoPrice: "5",
          bannenImg:
            "https://img1.qunarzz.com/sight/p0/1603/85/85c883189bf7293390.water.jpg_290x180_fca0a68d.jpg"
        },
        {
          sighttName: "水立方",
          sighttInfoTitle: "水立方成人票",
          InfoPrice: "40",
          bannenImg:
            "https://img1.qunarzz.com/sight/p0/1501/40/40b2b6c951b28fdd.water.jpg_290x180_9d3bf220.jpg"
        }
      ]
    };
  },
  methods: {
    handleShow(i) {
      this.show = i;
    }
  }
};
</script>
<style lang="less" scoped>
.content {
  margin: 0 10px;
  .tab {
    display: flex;
    width: 100%;
    .tab-item {
      flex: 1;
      background-color: #e5c584;
      color: #fff !important;
      margin-right: 2px;
      color: #333;
      font-size: 14px;
      line-height: 30px;
      text-align: center;
    }
    .changeSelected {
      background-color: #e3a653;
    }
  }
  .cont {
    .detail-more {
      display: block;
      min-height: 100px;
      margin-right: -10px;
      .item-more {
        float: left;
        width: 50%;
        margin-top: 10px;
        .item-cont {
          display: block;
          position: relative;
          margin-right: 10px;
          padding-bottom: 30px;
          background: #fff;
          .item-img {
            overflow: hidden;
            position: relative;
            width: 100%;
            height: 0;
            padding-bottom: 62.069%;
            background-color: #dcdcdc;
            img {
              width: 100%;
              vertical-align: top;
            }
            .name {
              position: absolute;
              left: 0;
              bottom: 0;
              width: 100%;
              padding: 3px 3px;
              background-color: rgba(0, 0, 0, 0.5);
              color: #fff;
              line-height: 18px;
            }
          }
          .info {
            .title {
              overflow: hidden;
              margin: 8px 5px 10px;
              height: 28px;
              color: #333;
              font-size: 12px;
              line-height: 14px;
            }
            .lure {
              position: absolute;
              margin: 0px 5px;
              left: 0;
              bottom: 0;
              width: 100%;
              height: 30px;
              white-space: nowrap;
              .hot-btn {
                float: right;
                background-color: #ff4444;
                color: #ffffff;
                display: inline-block;
                min-width: 40px;
                height: 30px;
                font-size: 14px;
                line-height: 30px;
                text-align: center;
              }
              .hot-price {
                line-height: 30px;
                color: #f44;
                font: 12px "microsoft yahei", "hiragino sans gb", arial,
                  sans-serif;
                .hot-price-num {
                  font: 14px arial, helvetica, sans-serif;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
