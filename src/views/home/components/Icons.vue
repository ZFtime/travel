<template>
  <div class="icons">
    <!-- arrow="never" -->
    <Carousel v-model="value2" loop  :radius-dot="true">
      <CarouselItem v-for="(page,index) in pages" :key="index">
      <div class="demo-carousel">
        <div class="icon" v-for="item in page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl" alt>
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </div>
      </CarouselItem>
      <!-- <CarouselItem>
        <div class="demo-carousel">2</div>
      </CarouselItem>
      <CarouselItem>
        <div class="demo-carousel">3</div>
      </CarouselItem>
      <CarouselItem>
        <div class="demo-carousel">4</div>
      </CarouselItem>-->
    </Carousel>

    <!-- <div class="icon">
      <div class="icon-img">
        <img
          class="icon-img-content"
          src="http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png"
          alt
        >
      </div>
      <p class="icon-desc">一日游</p>
    </div>
    <div class="icon">
      <div class="icon-img">
        <img
          class="icon-img-content"
          src="http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png"
          alt
        >
      </div>
      <p class="icon-desc">北京必游</p>
    </div>
    <div class="icon">
      <div class="icon-img">
        <img
          class="icon-img-content"
          src="http://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png"
          alt
        >
      </div>
      <p class="icon-desc">帝都范儿</p>
    </div>
    <div class="icon">
      <div class="icon-img">
        <img
          class="icon-img-content"
          src="http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png"
          alt
        >
      </div>
      <p class="icon-desc">植物园儿</p>
    </div>
    <div class="icon">
      <div class="icon-img">
        <img
          class="icon-img-content"
          src="http://img1.qunarzz.com/piao/fusion/1803/6c/9e54a8540fee0102.png"
          alt
        >
      </div>
      <p class="icon-desc">故宫</p>
    </div>
    <div class="icon">
      <div class="icon-img">
        <img
          class="icon-img-content"
          src="http://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png"
          alt
        >
      </div>
      <p class="icon-desc">名胜古迹</p>
    </div>
    <div class="icon">
      <div class="icon-img">
        <img
          class="icon-img-content"
          src="http://img1.qunarzz.com/piao/fusion/1803/fc/b10a6b2e4f0fe102.png"
          alt
        >
      </div>
      <p class="icon-desc">北京滑雪</p>
    </div>-->
  </div>
</template>
<script>
export default {
  name: "HomeIcons",
  data() {
    return {
      value2: 0,
      iconList: [
        {
          id: "0001",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
          desc: "景点门票"
        },
        {
          id: "0002",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
          desc: "景点门票"
        },
        {
          id: "0003",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
          desc: "景点门票"
        },
         {
          id: "0004",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
          desc: "景点门票"
        },
         {
          id: "0005",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
          desc: "景点门票"
        },
         {
          id: "0006",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
          desc: "景点门票"
        },
         {
          id: "0007",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
          desc: "景点门票"
        },
         {
          id: "0008",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
          desc: "景点门票"
        },
         {
          id: "0009",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
          desc: "景点门票"
        }
      ]
    };
  },
  computed: {
    pages() {
      const pages = [];
      this.iconList.forEach((iterm, index) => {
        const page = Math.floor(index / 8);
        if (!pages[page]) {
          pages[page] = [];
        }
        pages[page].push(iterm);
      })
      return pages;
    }
  }
};
</script>
<style lang="less" scoped>
@import "../../../assets/styles/varibles.less";
.icons {
  overflow: hidden;
  height: 0;
  padding-bottom: 50%;
    // bottom: green;
  .icon {
    position: relative;
    overflow: hidden;
    float: left;
    width: 25%;
    height: 0;
    padding-bottom: 25%;
    // background-color: red;
    .icon-img {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0.44rem;
        // background-color: blue;
      box-sizing: border-box;
      padding: 0.2rem;
      .icon-img-content {
        display: block;
        margin: 0 auto;
        height: 100%;
      }
    }
    .icon-desc {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 0.44rem;
      line-height: 0.44rem;
      text-align: center;
      color: @darkTextColor;
    }
  }
}
</style>