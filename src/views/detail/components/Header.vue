<template>
  <div>
    <router-link tag="div" to="/" v-show="showAbs">
      <div class="header-abs">
        <Icon class="header-abs-back left-back" type="ios-arrow-back"/>
      </div>
    </router-link>
    <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
      <router-link tag="div" to="/">
        <div class="header-abs-fixed">
          <Icon class="header-fixed-back left-back" type="ios-arrow-back"/>
        </div>
      </router-link>景点详情
    </div>
  </div>
</template>
<script>
export default {
  name: "DetailHeader",
  data() {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    };
  },
  methods: {
    hideAbs() {
      this.showAbs = false;
    },
    handleScroll() {
      const top = document.documentElement.scrollTop;
      if (top > 60) {
        let opacity = top / 140;
        opacity = opacity > 1 ? 1 : opacity;
        this.opacityStyle = { opacity };
        this.showAbs = false;
      } else {
        this.showAbs = true;
      }
    }
  },
  activated() {
    window.addEventListener("scroll", this.handleScroll);
  },
  deactivated(){
      window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>
<style lang="less" scoped>
@import "../../../assets/styles/varibles.less";

.header-abs {
  position: absolute;
  left: 0.2rem;
  top: 0.2rem;
  width: 0.8rem;
  height: 0.8rem;
  line-height: 0.8rem;
  text-align: center;
  border-radius: 0.4rem;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.6);
  .header-abs-back {
    font-size: 0.4rem;
  }
}
.header-fixed {
  z-index: 2;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 0.75rem;
  line-height: 0.74rem;
  text-align: center;
  overflow: hidden;
  color: #fff;
  background-color: @bgColor;
  font-size: 0.32rem;
  .header-abs-fixed {
    position: absolute;
    left: 0.2rem;
    top: 0.2rem;
    width: 0.8rem;
    height: 0.8rem;
    color: #fff;
    .header-fixed-back {
      position: absolute;
      top: 0;
      left: 0;
      width: 0.64rem;
      font-size: 0.4rem;
    }
  }
}
</style>
