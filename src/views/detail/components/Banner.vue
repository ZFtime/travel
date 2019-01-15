<template>
  <div>
    <div class="banner" @click="handleGallary">
      <img
        class="banner-img"
        src="//img1.qunarzz.com/sight/p0/1812/38/387730697ee0c7aba3.img.jpg_600x330_1c99d3b7.jpg"
        alt
      >
      <div class="banner-info">
        <div class="banner-title">2019首届三亚凤凰国际光影艺术节</div>
        <div class="banner-number">
          <span class="iconinfo banner-icon">
            <Icon type="md-photos"/>
          </span>
          39
        </div>
      </div>
    </div>
    <CommonGallary :imgs="imgs" v-show="showGallary" @close="handleGallaryClose"/>
  </div>
</template>
<script>
import CommonGallary from "../gallary/Gallary";
export default {
  name: "Banner",
  data(){
      return {
          imgs:[
              "http://img1.qunarzz.com/sight/p0/1812/38/387730697ee0c7aba3.img.jpg_r_800x800_948b8531.jpg","http://img1.qunarzz.com/sight/p0/1801/c1/c188eaa1ebc31e86a3.img.jpg_r_800x800_cbf0e936.jpg"
          ],
           showGallary:false
      }
  },
  components: {
    CommonGallary
  },
  methods:{
      handleGallary(){
          this.showGallary=true
      },
      handleGallaryClose(){
          this.showGallary=false
      }
  }
};
</script>
<style lang="less" scoped>
.banner {
  position: relative;
  overflow: hidden;
  height: 0;
  padding-bottom: 55%;
  .banner-img {
    width: 100%;
  }
  .banner-info {
    display: flex;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    line-height: 0.6rem;
    color: #fff;
    background-image: linear-gradient(top, rgba(0, 0, 0, 0) rgba(0, 0, 0, 0.8));
    .banner-title {
      flex: 1;
    }
    .banner-number {
      height: 0.39rem;
      line-height: 0.4rem;
      margin-top: 0.14rem;
      padding: 0 0.4rem;
      border-radius: 0.2rem;
      background-color: rgba(0, 0, 0, 0.8);
      font-size: 0.24rem;
      .banner-icon {
        font-size: 0.24rem;
      }
    }
  }
}
</style>
