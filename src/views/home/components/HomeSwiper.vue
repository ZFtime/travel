<template>
  <div class="swiper">
    <Carousel v-model="value1" :radius-dot="true">
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
    </Carousel>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value1: 0
    };
  },
  name: "HomeSwiper"
};
</script>
<style lang="less" scoped>
.swiper /deep/ .ivu-carousel-dots li button {
  background-color: #fff !important;
}
.swiper {
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-bottom: 31.25%;
  background-color: #eee;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>