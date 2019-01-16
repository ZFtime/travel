<template>
  <div>
    <div class="banner" @click="handleGallary">
      <img class="banner-img" :src="bannerImg" alt>
      <div class="banner-info">
        <div class="banner-title">{{this.sightName}}</div>
        <div class="banner-number">
          <span class="iconinfo banner-icon">
            <Icon type="md-photos"/>
          </span>
          {{this.bannerImg.length}}
        </div>
      </div>
    </div>
    <fadeAnimation>
      <CommonGallary :imgs="gallaryImgs" v-show="showGallary" @close="handleGallaryClose"/>
    </fadeAnimation>
  </div>
</template>
<script>
import CommonGallary from "../gallary/Gallary";
import fadeAnimation from "../../../common/fade/fadeAnimation";
export default {
  name: "Banner",
  data() {
    return {
      // imgs:[],
      showGallary: false
    };
  },
  props: {
    sightName: String,
    bannerImg: String,
    gallaryImgs: Array
  },
  components: {
    CommonGallary,
    fadeAnimation
  },
  methods: {
    handleGallary() {
      this.showGallary = true;
    },
    handleGallaryClose() {
      this.showGallary = false;
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
