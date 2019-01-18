<template>
  <div class="banner">
    <ul>
      <li>
        <div class="content">
          <div class="tl-search">
            <div class="tl-left">
              <div class="tl-img">
                <img
                  src="https://imgs.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_110x110_fac6a6cd.jpg"
                  alt="故宫"
                >
                <span class="bookingflag">随买随用</span>
              </div>
            </div>
            <div class="tl-right">
              <div class="tl-info">
                <div class="title">故宫</div>
                <div class="comments">
                  <div class="rate">
                    <Rate v-model="value"/>
                  </div>
                  <div class="totalnum">3829439评论</div>
                </div>
                <div class="tl-pricecon">
                  <div class="price">
                    ¥
                    <i>10</i>
                    <em>起</em>
                  </div>
                  <div class="area">东城区</div>
                </div>
                <div class="taglist">
                  <span class="border tag01">
                    <em>古建筑</em>
                  </span>
                  <span class="border tag02">
                    <em>世界遗产</em>
                  </span>
                  <span class="border tag03">
                    <em>博物馆排名第一</em>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="border-top">
            <h4 class="ticket-name">【当日票】故宫成人票</h4>
            <span class="ticket-qunarprice">
              ¥
              <em>40</em>
            </span>
          </div>
          <div class="border-top">
            <h4 class="ticket-name">【当日票】故宫成人票</h4>
            <span class="ticket-qunarprice">
              ¥
              <em>40</em>
            </span>
          </div>
        </div>
      </li>
      <li>
        <div class="content">
          <div class="tl-search">
            <div class="tl-left">
              <div class="tl-img">
                <img
                  src="https://imgs.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_110x110_fac6a6cd.jpg"
                  alt="故宫"
                >
                <span class="bookingflag">随买随用</span>
              </div>
            </div>
            <div class="tl-right">
              <div class="tl-info">
                <div class="title">故宫</div>
                <div class="comments">
                  <div class="rate">
                    <Rate v-model="value"/>
                  </div>
                  <div class="totalnum">3829439评论</div>
                </div>
                <div class="tl-pricecon">
                  <div class="price">
                    ¥
                    <i>10</i>
                    <em>起</em>
                  </div>
                  <div class="area">东城区</div>
                </div>
                <div class="taglist">
                  <span class="border tag01">
                    <em>古建筑</em>
                  </span>
                  <span class="border tag02">
                    <em>世界遗产</em>
                  </span>
                  <span class="border tag03">
                    <em>博物馆排名第一</em>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="border-top">
            <h4 class="ticket-name">【当日票】故宫成人票</h4>
            <span class="ticket-qunarprice">
              ¥
              <em>40</em>
            </span>
          </div>
          <div class="border-top">
            <h4 class="ticket-name">【当日票】故宫成人票</h4>
            <span class="ticket-qunarprice">
              ¥
              <em>40</em>
            </span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "TicketBanner",
  data() {
    return {
      value: 5
    };
  }
};
</script>
<style lang="less" scoped>
//~@代表根目录src
@import "~@/assets/styles/varibles.less";
.rate /deep/ .ivu-rate-star {
  margin-right: 0px;
  font-size: 0.3rem;
}
.banner {
  background-color: #f5f5f5;
  li {
    background-color: #ffffff;
    margin-bottom: 0.2rem;
    .tl-search {
      overflow: hidden;
      padding: 0.2rem 0.22rem;
      .tl-left {
        float: left;
        .tl-img {
          position: relative;
          background-size: contain;
          width: 2rem;
          height: 2rem;
          img {
            width: 100%;
            height: 100%;
          }
          .bookingflag {
            background-image: url(https://img1.qunarzz.com/piao/fusion/1802/20/2ba6d10b17972e02.png);
            position: absolute;
            left: 0;
            top: 0;
            width: 1.04rem;
            height: 0.38rem;
            background-size: 100%;
            background-repeat: no-repeat;
            color: #fff;
            font-size: 0.2rem;
            line-height: 0.38rem;
            text-indent: 0.08rem;
          }
        }
      }
      // .tl-right {
      .tl-info {
        //   float: left;
        position: relative;
        overflow: hidden;
        padding-left: 0.2rem;
        .title {
          overflow: hidden;
          height: 0.44rem;
          color: #212121;
          font-size: 0.32rem;
          line-height: 0.44rem;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
        .comments {
          margin-top: 0.14rem;
          height: 0.34rem;
          font-size: 0;
          line-height: 0.34rem;
          .rate {
            float: left;
          }
          .totalnum {
            float: left;
            position: relative;
            color: #616161;
            height: 0;
            padding-bottom: 0.45rem;
            line-height: 0.55rem;
            font-size: 0.24rem;
          }
        }
        .tl-pricecon {
          position: relative;
          margin-top: 0.18rem;
          .price {
            height: 0.36rem;
            color: #ff8300;
            font-size: 0.2rem;
            line-height: 0.4rem;
            i {
              font-size: 0.4rem;
            }
            em {
              color: #616161;
              font-size: 0.24rem;
              vertical-align: 0.02rem;
            }
          }
          .area {
            position: absolute;
            bottom: 0;
            right: 0;
            color: #616161;
            font-size: 0;
            white-space: nowrap;
            font-size: 0.24rem;
          }
        }
        .taglist {
          margin-top: 0.18rem;
          font-size: 0;
          .border {
            margin-right: 0.08rem;
            color: #00afc7;
            display: inline-block;
            margin-top: 0.04rem;
            height: 0.32rem;
            em {
              display: inline-block;
              height: 0.336rem;
              font-size: 0.24rem;
              line-height: 0.336rem;
              transform: scale(0.83);
            }
            .tag03 {
              background: #f0fbfd;
              color: #00bcd4;
            }
          }
        }
      }
      // }
    }
    .border-top {
      position: relative;
      height: 0.96rem;
      margin-left: 0.2rem;
      .ticket-qunarprice {
        overflow: hidden;
        position: absolute;
        top: 0;
        right: 0.2rem;
        width: 1.2rem;
        height: 0.96rem;
        color: #ff8300;
        font-size: 0.2rem;
        line-height: 0.96rem;
        text-align: right;
        em {
          font-size: 0.32rem;
        }
      }
      .ticket-name {
        overflow: hidden;
        margin-right: 1.4rem;
        height: 0.96rem;
        color: #616161;
        font-size: 0.28rem;
        line-height: 0.96rem;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
    .border-top::before {
      border-color: #e0e0e0;
    }
  }
}
</style>
