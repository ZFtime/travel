<template>
  <div class="tour_list">
    <ul>
      <li class="list-item" v-for="(item,index) in tourList" :key="index">
        <div class="list-imgicon">
          <img class="mp-list-productimg" :src="item.ImgUrl" :alt="item.productName">
          <span class="list-bookingflag">
            <span class="list-bookingtext">可定明日</span>
          </span>
        </div>
        <div class="list-productinfo border-bottom">
          <h4 class="list-productname">{{item.productName}}</h4>
          <div class="list-taglist">
            <span class="list-tagitemlight border-right">{{item.tagItem}}</span>
            <span class="list-tagitem border-right">{{item.NoPay}}</span>
            <span class="list-tagitem">{{item.NoShopp}}</span>
          </div>
          <div class="list-priceinfo">
            <span class="list-qunarprice">
              ¥
              <em>{{item.Qunarprice}}</em>
            </span>
            <span class="list-priceflag">起</span>
          </div>
          <div class="list-moreinfo">
            <span class="list-text">
              已售
              <em>{{item.Sold}}</em>
            </span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "TourList",
  data() {
    return {
      tourList: [
        {
          ImgUrl:
            "https://imgs.qunarzz.com/p/tts9/1901/bf/c17152382fab5502.jpg_110x110_74ed9703.jpg",
          productName:
            "【去哪儿精选】天安门+故宫+八达岭长城+鸟巢水立方 赠珍宝馆",
          tagItem: "北京出发",
          NoPay: "无自费",
          NoShopp: "无购物",
          Sold: "2652",
          Qunarprice: "128"
        },
        {
          ImgUrl:
            "https://imgs.qunarzz.com/p/tts9/1901/19/ff4871ded7f05d02.jpg_110x110_aeced45b.jpg",
          productName:
            "【去哪儿精选】天安门+故宫+八达岭长城+鸟巢水立方 赠珍宝馆",
          tagItem: "北京出发",
          NoPay: "无自费",
          NoShopp: "无购物",
          Sold: "2652",
          Qunarprice: "128"
        },
        {
          ImgUrl:
            "https://imgs.qunarzz.com/p/tts9/1901/bf/c17152382fab5502.jpg_110x110_74ed9703.jpg",
          productName:
            "【去哪儿精选】天安门+故宫+八达岭长城+鸟巢水立方 赠珍宝馆",
          tagItem: "北京出发",
          NoPay: "无自费",
          NoShopp: "无购物",
          Sold: "2652",
          Qunarprice: "128"
        },
        {
          ImgUrl:
            "https://imgs.qunarzz.com/p/tts9/1901/bf/c17152382fab5502.jpg_110x110_74ed9703.jpg",
          productName:
            "【去哪儿精选】天安门+故宫+八达岭长城+鸟巢水立方 赠珍宝馆",
          tagItem: "北京出发",
          NoPay: "无自费",
          NoShopp: "无购物",
          Sold: "2652",
          Qunarprice: "128"
        },
        {
          ImgUrl:
            "https://imgs.qunarzz.com/p/tts9/1901/bf/c17152382fab5502.jpg_110x110_74ed9703.jpg",
          productName:
            "【去哪儿精选】天安门+故宫+八达岭长城+鸟巢水立方 赠珍宝馆",
          tagItem: "北京出发",
          NoPay: "无自费",
          NoShopp: "无购物",
          Sold: "2652",
          Qunarprice: "128"
        }
      ]
    };
  },
  mounted() {
    // this.getTourList();
  },
  methods: {
    // getTourList() {
    //   this.tourList.forEach(element => {
    //     this.ImgUrl = element.ImgUrl;
    //     this.productName=element.productName
    //     this.tagItem=element.tagItem
    //     console.log(element.ImgUrl);
    //   });
    // }
  }
};
</script>
<style lang="less" scoped>
.tour_list {
  .list-item {
    position: relative;
    display: flex;
    width: 100%;
    .list-imgicon {
      margin: 0.2rem;
      position: relative;
      width: 1.6rem;
      height: 1.6rem;
      img {
        width: 1.6rem;
        height: 1.6rem;
        opacity: 1;
        transition: opacity 400ms;
      }
      .list-bookingflag {
        position: absolute;
        top: 0px;
        left: 0px;
        background: #00bcd4;
        position: absolute;
        left: -0.04rem;
        top: -0.04rem;
        // height: 0.24rem;
        padding: 0.02rem;
        color: #fff;
        line-height: 0.24rem;
        .list-bookingtext {
          display: block;
          font-size: 0.24rem;
          color: #fff;
          line-height: 0.24rem;
          font-size: 12px;
        }
      }
      .list-bookingflag:after {
        border-top: 0.14rem solid #00bcd4;
        border-bottom: 0.14rem solid #00bcd4;
      }
      .list-bookingflag:before {
        content: "";
        position: absolute;
        top: 0;
        right: -0.1rem;
        width: 0;
        height: 0;
        border-top: 0.14rem solid #00bcd4;
        border-bottom: 0.14rem solid #00bcd4;
        border-right: 0.1rem solid transparent;
      }
    }
    .list-productinfo {
      padding: 0.2rem 0.2rem 0.2rem 0;
      //   height: 1.6rem;
      overflow: hidden;
      .list-productname {
        line-height: 0.36rem;
        font-size: 0.3rem;
      }
      .list-taglist {
        position: relative;
        top: 0.06rem;
        overflow: hidden;
        max-height: 0.58rem;
        margin-right: 1rem;
        padding-top: 0.06rem;
        line-height: 0.24rem;
        font-size: 0;
        .list-tagitemlight {
          display: inline;
          padding: 0 0.1rem;
          font-size: 0.24rem;
          color: #00bcd4;
        }
        .list-tagitem {
          display: inline;
          padding: 0 0.1rem;
          font-size: 0.24rem;
          color: #616161;
        }
        .border-right::before {
          border-color: #ccc;
        }
      }
      .list-priceinfo {
        position: absolute;
        right: 0.2rem;
        bottom: 0.2rem;
        height: 0.32rem;
        line-height: 0.32rem;
        color: #9e9e9e;
        text-align: right;
        .list-qunarprice {
          font-size: 0.22rem;
          font-weight: bold;
          color: #ff8300;
          em {
            font-size: 0.32rem;
            padding-left: 0.04rem;
          }
        }
        .list-priceflag {
          font-size: 0.24rem;
          padding-left: 0.02rem;
        }
      }
      .list-moreinfo {
        position: absolute;
        left: -0.1rem;
        bottom: 0.2rem;
        width: 100%;
        font-size: 0;
        color: #9e9e9e;
        .list-text {
          padding: 0 0.1rem;
          font-size: 0.22rem;
        }
      }
    }
  }
}
</style>
