<template>
  <div>
    <div class="list">
      <div class="list-content">
        <div class="list-group">
          <div class="list-caption">
            <div class="list-inner">
              <h2 class="title">我在这里</h2>
              <div class="arrow arrow-right"></div>
              <div class="arrow arrow-left"></div>
            </div>
          </div>
          <div class="list-detail">
            <ul>
              <li class="list-item">
                <div class="item-img">
                  <img
                    src="https://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_220x200_0888af6d.jpg"
                    alt
                  >
                  <span class="name">故宫</span>
                </div>
                <div class="info">
                  <h4 class="info-name">【当日票】故宫成人票凭身份证入园（随买随用，快速入园）</h4>
                  <p class="info-detail">东方宫殿建筑代表，世界宫殿建筑典范</p>
                  <div class="info-bottom">
                    <div class="lure">
                      <span class="price">¥</span>
                      <em class="price-num">40</em>
                    </div>
                    <span class="info-btn">立即抢购</span>
                  </div>
                </div>
              </li>
              <li class="list-item">
                <div class="item-img">
                  <img
                    src="https://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_220x200_0888af6d.jpg"
                    alt
                  >
                  <span class="name">故宫</span>
                </div>
                <div class="info">
                  <h4 class="info-name">【当日票】故宫成人票凭身份证入园（随买随用，快速入园）</h4>
                  <p class="info-detail">东方宫殿建筑代表，世界宫殿建筑典范</p>
                  <div class="info-bottom">
                    <div class="lure">
                      <span class="price">¥</span>
                      <em class="price-num">40</em>
                    </div>
                    <span class="info-btn">立即抢购</span>
                  </div>
                </div>
              </li>
              <li class="list-item">
                <div class="item-img">
                  <img
                    src="https://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_220x200_0888af6d.jpg"
                    alt
                  >
                  <span class="name">故宫</span>
                </div>
                <div class="info">
                  <h4 class="info-name">【当日票】故宫成人票凭身份证入园（随买随用，快速入园）</h4>
                  <p class="info-detail">东方宫殿建筑代表，世界宫殿建筑典范</p>
                  <div class="info-bottom">
                    <div class="lure">
                      <span class="price">¥</span>
                      <em class="price-num">40</em>
                    </div>
                    <span class="info-btn">立即抢购</span>
                  </div>
                </div>
              </li>
              <li class="list-item">
                <div class="item-img">
                  <img
                    src="https://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_220x200_0888af6d.jpg"
                    alt
                  >
                  <span class="name">故宫</span>
                </div>
                <div class="info">
                  <h4 class="info-name">【当日票】故宫成人票凭身份证入园（随买随用，快速入园）</h4>
                  <p class="info-detail">东方宫殿建筑代表，世界宫殿建筑典范</p>
                  <div class="info-bottom">
                    <div class="lure">
                      <span class="price">¥</span>
                      <em class="price-num">40</em>
                    </div>
                    <span class="info-btn">立即抢购</span>
                  </div>
                </div>
              </li>
              <li class="list-item">
                <div class="item-img">
                  <img
                    src="https://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_220x200_0888af6d.jpg"
                    alt
                  >
                  <span class="name">故宫</span>
                </div>
                <div class="info">
                  <h4 class="info-name">【当日票】故宫成人票凭身份证入园（随买随用，快速入园）</h4>
                  <p class="info-detail">东方宫殿建筑代表，世界宫殿建筑典范</p>
                  <div class="info-bottom">
                    <div class="lure">
                      <span class="price">¥</span>
                      <em class="price-num">40</em>
                    </div>
                    <span class="info-btn">立即抢购</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <forbiddenHot/>
  </div>
</template>
<script>
import forbiddenHot from "../Hot/Hot";
export default {
  name: "forbiddenList",
  components: {
    forbiddenHot
  }
};
</script>
<style lang="less" scoped>
.list {
  background-color: #fbdea3;
  .list-content {
    position: relative;
    margin: 0 10px;
    padding-bottom: 10px;
    .list-group {
      padding-top: 10px;
      .list-caption {
        position: relative;
        height: 35px;
        background-color: #e0ae66;
        .list-inner {
          position: relative;
          width: 33%;
          height: 35px;
          margin: 0 auto;
          background-color: #f5d17a;
          .title {
            font: bold 16px/35px microsoft yahei, sans-serif;
            letter-spacing: 2px;
            text-align: center;
            color: #ec7b28;
          }
          .arrow {
            overflow: hidden;
            position: absolute;
            top: 0;
            width: 0;
            height: 0;
            border-width: 0 8px 35px;
            border-style: solid;
            border-color: transparent;
          }
          .arrow-right {
            border-left-color: #f5d17a;
            right: -16px;
          }
          .arrow-left {
            border-right-color: #f5d17a;
            left: -16px;
          }
        }
      }
      .list-detail {
        min-height: 100px;
        .list-item {
          display: flex;
          position: relative;
          margin-top: 10px;
          background: #fff;
          .item-img {
            flex: 1;
            img {
              width: 100%;
              height: 100%;
              vertical-align: top;
            }
            .name {
              position: absolute;
              left: 0;
              bottom: 0;
              width: 2.57rem;
              padding: 3px 3px;
              background-color: rgba(0, 0, 0, 0.5);
              color: #fff;
              line-height: 18px;
            }
          }
          .info {
            flex: 1.72;
            height: 1%;
            margin-left: 5px;
            .info-name {
              padding: 4px 0;
              font-size: 14px;
              line-height: 18px;
              color: #333;
            }
            .info-detail {
              font-size: 0.2rem;
              margin-top: 2px;
              padding-bottom: 40px;
              color: #666;
              word-wrap: break-word;
              word-break: break-all;
            }
            .info-bottom {
              .info-btn {
                display: inline-block;
                position: absolute;
                right: 0;
                bottom: 0;
                width: 80px;
                min-width: 40px;
                height: 30px;
                background-color: #ff433e;
                color: #fff;
                font-size: 14px;
                line-height: 30px;
                text-align: center;
              }
              .lure {
                position: absolute;
                bottom: 0;
                margin-right: 80px;
                line-height: 30px;
                white-space: nowrap;
                .price {
                  color: #ff433e;
                }
                .price-num {
                  color: #ff433e;
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
