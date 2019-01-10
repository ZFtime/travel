<template>
  <div class="swiper">
    <!-- 使用移动端 -->
    <!-- <Carousel v-model="value1" :radius-dot="true">
      <CarouselItem>
        <div class="demo-carousel">
          <img
            src="http://img1.qunarzz.com/piao/fusion/1808/70/5603e6a535062402.jpg_750x200_2c552f2c.jpg"
            alt
          >
        </div>
      </CarouselItem>
      <CarouselItem>
        <div class="demo-carousel">
          <img
            src="http://img1.qunarzz.com/piao/fusion/1812/d1/cd4f32e924a5a302.jpg_750x200_3d492837.jpg"
            alt
          >
        </div>
      </CarouselItem>
      <CarouselItem>
        <div class="demo-carousel">
          <img
            src="http://img1.qunarzz.com/piao/fusion/1901/17/d1821879b04ca602.jpg_750x200_115ccc5d.jpg"
            alt
          >
        </div>
      </CarouselItem>
      <CarouselItem>
        <div class="demo-carousel">
          <img
            src="http://img1.qunarzz.com/piao/fusion/1812/d6/daa880b254940402.jpg_750x200_b114308a.jpg"
            alt
          >
        </div>
      </CarouselItem>
    </Carousel>-->
    <!-- 使用手机端 -->
    <!-- v-if为了更好的用户体验（如果没有数据，就不能往下面渲染） -->
    <swiper :options="swiperOption" v-if="showSwiper">
      <!-- slides -->
      <swiper-slide v-for="item in SwiperList" :key="item.id">
        <div class="demo-carousel">
          <img
            :src="item.imgUrl"
            :alt="item.desc"
          >
        </div>
      </swiper-slide>
      <!-- <swiper-slide>
        <div class="demo-carousel">
          <img
            src="http://img1.qunarzz.com/piao/fusion/1901/17/d1821879b04ca602.jpg_750x200_115ccc5d.jpg"
            alt="冰雪嘉年华"
          >
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="demo-carousel">
          <img
            src="http://img1.qunarzz.com/piao/fusion/1812/d6/daa880b254940402.jpg_750x200_b114308a.jpg"
            alt="年终狂欢"
          >
        </div>
      </swiper-slide> -->
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value1: 0,
      swiperOption: {},
      // SwiperList:[
      //    {
      //     id: "0001",
      //     imgUrl:
      //       "http://img1.qunarzz.com/piao/fusion/1808/70/5603e6a535062402.jpg_750x200_2c552f2c.jpg",
      //     desc: "最美山水"
      //   },
      //   {
      //     id: "0002",
      //     imgUrl:
      //       "http://img1.qunarzz.com/piao/fusion/1901/17/d1821879b04ca602.jpg_750x200_115ccc5d.jpg",
      //     desc: "冰雪嘉年华"
      //   },
      //   {
      //     id: "0003",
      //     imgUrl:
      //       "http://img1.qunarzz.com/piao/fusion/1812/d6/daa880b254940402.jpg_750x200_b114308a.jpg",
      //     desc: "年终狂欢"
      //   }
      // ]
    };
  },
  props:{
    SwiperList:Array
  },
  computed:{
    showSwiper(){
      return this.SwiperList.length
    }
  }
};
</script>
<style lang="less" scoped>
// .swiper  .ivu-carousel-dots li button {
//   background-color: #fff !important;
// }
.swiper {
  width: 100%;
  height: 0;
  padding-bottom: 31.25%;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>