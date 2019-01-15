<template>
  <div class="container" @click="closeGallary">
    <div class="wrapper">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(item,index) in imgs" :key="index">
          <div>
            <img
              class="gallary-image"
              :src="item"
            >
          </div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>
<script>
export default {
  name: "CommonGallary",
  props:{
    imgs:{
      type:Array,
      default(){
        return [
          
        ]
      }
    }
  },
  data() {
    return {
      swiperOption: {
        pagination : '.swiper-pagination',
        paginationType: "fraction",
        observeParents:true,
        observer:true
      }
    };
  },
  methods:{
    closeGallary(){
      this.$emit("close");
    }
  }
};
</script>
<style lang="less" scoped>
.container /deep/ .swiper-container {
  overflow: inherit !important;
}
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 99;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #000;
  .wrapper {
    width: 100%;
    height: 0;
    padding-bottom: 100%;
    .gallary-image {
      width: 100%;
    }
    .swiper-pagination {
      z-index: 199;
      color: #fff;
      bottom: -0.1rem;
    }
  }
}
</style>
