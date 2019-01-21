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
        <li class="item-more">
          <div class="item-cont">
            <div class="item-img">
              <img
                src="https://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_290x180_aad89f75.jpg"
                alt="故宫"
              >
              <span class="name">故宫</span>
            </div>
            <div class="info">
              <h3 class="title">【下午场】故宫成人票凭身份证快速入园（淡季）</h3>
              <div class="lure">
                <span class="hot-btn">抢购</span>
                <span class="hot-price">
                  ¥
                  <em class="hot-price-num">40</em>
                </span>
              </div>
            </div>
          </div>
        </li>
        <li class="item-more">
          <div class="item-cont">
            <div class="item-img">
              <img
                src="https://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_290x180_aad89f75.jpg"
                alt="故宫"
              >
              <span class="name">故宫</span>
            </div>
            <div class="info">
              <h3 class="title">【下午场】故宫成人票凭身份证快速入园（淡季）</h3>
              <div class="lure">
                <span class="hot-btn">抢购</span>
                <span class="hot-price">
                  ¥
                  <em class="hot-price-num">40</em>
                </span>
              </div>
            </div>
          </div>
        </li>
        <li class="item-more">
          <div class="item-cont">
            <div class="item-img">
              <img
                src="https://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_290x180_aad89f75.jpg"
                alt="故宫"
              >
              <span class="name">故宫</span>
            </div>
            <div class="info">
              <h3 class="title">【下午场】故宫成人票凭身份证快速入园（淡季）</h3>
              <div class="lure">
                <span class="hot-btn">抢购</span>
                <span class="hot-price">
                  ¥
                  <em class="hot-price-num">40</em>
                </span>
              </div>
            </div>
          </div>
        </li>
        <li class="item-more">
          <div class="item-cont">
            <div class="item-img">
              <img
                src="https://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_290x180_aad89f75.jpg"
                alt="故宫"
              >
              <span class="name">故宫</span>
            </div>
            <div class="info">
              <h3 class="title">【下午场】故宫成人票凭身份证快速入园（淡季）</h3>
              <div class="lure">
                <span class="hot-btn">抢购</span>
                <span class="hot-price">
                  ¥
                  <em class="hot-price-num">40</em>
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
        <li class="item-more">
          <div class="item-cont">
            <div class="item-img">
              <img
                src="https://img1.qunarzz.com/piao/fusion/1607/41/5837c598ef45b8b6.png_290x180_d5ab7067.png"
                alt="故宫"
              >
              <span class="name">故宫</span>
            </div>
            <div class="info">
              <h3 class="title">【下午场】故宫成人票凭身份证快速入园（淡季）</h3>
              <div class="lure">
                <span class="hot-btn">抢购</span>
                <span class="hot-price">
                  ¥
                  <em class="hot-price-num">40</em>
                </span>
              </div>
            </div>
          </div>
        </li>
        <li class="item-more">
          <div class="item-cont">
            <div class="item-img">
              <img
                src="https://img1.qunarzz.com/piao/fusion/1607/41/5837c598ef45b8b6.png_290x180_d5ab7067.png"
                alt="故宫"
              >
              <span class="name">故宫</span>
            </div>
            <div class="info">
              <h3 class="title">【下午场】故宫成人票凭身份证快速入园（淡季）</h3>
              <div class="lure">
                <span class="hot-btn">抢购</span>
                <span class="hot-price">
                  ¥
                  <em class="hot-price-num">40</em>
                </span>
              </div>
            </div>
          </div>
        </li>
        <li class="item-more">
          <div class="item-cont">
            <div class="item-img">
              <img
                src="https://img1.qunarzz.com/piao/fusion/1607/41/5837c598ef45b8b6.png_290x180_d5ab7067.png"
                alt="故宫"
              >
              <span class="name">故宫</span>
            </div>
            <div class="info">
              <h3 class="title">【下午场】故宫成人票凭身份证快速入园（淡季）</h3>
              <div class="lure">
                <span class="hot-btn">抢购</span>
                <span class="hot-price">
                  ¥
                  <em class="hot-price-num">40</em>
                </span>
              </div>
            </div>
          </div>
        </li>
        <li class="item-more">
          <div class="item-cont">
            <div class="item-img">
              <img
                src="https://img1.qunarzz.com/piao/fusion/1607/41/5837c598ef45b8b6.png_290x180_d5ab7067.png"
                alt="故宫"
              >
              <span class="name">故宫</span>
            </div>
            <div class="info">
              <h3 class="title">【下午场】故宫成人票凭身份证快速入园（淡季）</h3>
              <div class="lure">
                <span class="hot-btn">抢购</span>
                <span class="hot-price">
                  ¥
                  <em class="hot-price-num">40</em>
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
        <li class="item-more">
          <div class="item-cont">
            <div class="item-img">
              <img
                src="https:////img1.qunarzz.com/sight/p0/201405/12/51b63883c25f5d87af3c08bb016e2bd7.jpg_290x180_b88ccfe6.jpg"
                alt="恭王府"
              >
              <span class="name">恭王府</span>
            </div>
            <div class="info">
              <h3 class="title">北京恭王府门票+人工讲解服务*成人票</h3>
              <div class="lure">
                <span class="hot-btn">抢购</span>
                <span class="hot-price">
                  ¥
                  <em class="hot-price-num">60</em>
                </span>
              </div>
            </div>
          </div>
        </li>
        <li class="item-more">
          <div class="item-cont">
            <div class="item-img">
              <img
                src="https:////img1.qunarzz.com/sight/p0/201405/12/51b63883c25f5d87af3c08bb016e2bd7.jpg_290x180_b88ccfe6.jpg"
                alt="恭王府"
              >
              <span class="name">恭王府</span>
            </div>
            <div class="info">
              <h3 class="title">北京恭王府门票+人工讲解服务*成人票</h3>
              <div class="lure">
                <span class="hot-btn">抢购</span>
                <span class="hot-price">
                  ¥
                  <em class="hot-price-num">60</em>
                </span>
              </div>
            </div>
          </div>
        </li>
        <li class="item-more">
          <div class="item-cont">
            <div class="item-img">
              <img
                src="https:////img1.qunarzz.com/sight/p0/201405/12/51b63883c25f5d87af3c08bb016e2bd7.jpg_290x180_b88ccfe6.jpg"
                alt="恭王府"
              >
              <span class="name">恭王府</span>
            </div>
            <div class="info">
              <h3 class="title">北京恭王府门票+人工讲解服务*成人票</h3>
              <div class="lure">
                <span class="hot-btn">抢购</span>
                <span class="hot-price">
                  ¥
                  <em class="hot-price-num">60</em>
                </span>
              </div>
            </div>
          </div>
        </li>
        <li class="item-more">
          <div class="item-cont">
            <div class="item-img">
              <img
                src="https:////img1.qunarzz.com/sight/p0/201405/12/51b63883c25f5d87af3c08bb016e2bd7.jpg_290x180_b88ccfe6.jpg"
                alt="恭王府"
              >
              <span class="name">恭王府</span>
            </div>
            <div class="info">
              <h3 class="title">北京恭王府门票+人工讲解服务*成人票</h3>
              <div class="lure">
                <span class="hot-btn">抢购</span>
                <span class="hot-price">
                  ¥
                  <em class="hot-price-num">60</em>
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
      List: ["玩转故宫", "热销套票", "周边必游"]
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
