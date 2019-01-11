<template>
  <div class="list" ref="wrapper">
    <ul>
      <li
        class="item"
        v-for="item in letters"
        :key="item"
        @click="handleLetterClick"
        @touchstart="handleTouchtart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
        :ref="item"
      >{{item}}</li>
    </ul>
  </div>
</template>
<script>
// import Bscroll from "better-scroll";
export default {
  name: "Alphabet",
  props: {
    cities: Object
  },
  data() {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    };
  },
  updated() {
    this.startY = this.$refs["A"][0].offsetTop;
  },
  computed: {
    letters() {
      const letters = [];
      for (let i in this.cities) {
        letters.push(i);
      }
      return letters;
    }
  },
  methods: {
    handleLetterClick(e) {
      this.$emit("change", e.target.innerText);
    },
    handleTouchtart() {
      this.touchStatus = true;
    },
    handleTouchMove(e) {
      if (this.touchStatus) {
        //   关联右边的字母和左边的地方
        if (this.touchStatus) {
          if (this.timer) {
            clearTimeout(this.timer);
          }
          this.timer = setTimeout(() => {
            const touchY = e.touches[0].clientY - 79;
            const index = Math.floor((touchY - this.startY) / 20);
            if (index >= 0 && index < this.letters.length) {
              this.$emit("change", this.letters[index]);
            }
          },16);
        }
      }
    },
    handleTouchEnd() {
      this.touchStatus = false;
    }
  }
};
</script>
<style lang="less" scoped>
@import "../../../assets/styles/varibles.less";
.list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 1.58rem;
  right: 0;
  bottom: 0;
  width: 0.4rem;
  .item {
    line-height: 0.44rem;
    text-align: center;
    color: @bgColor;
  }
}
</style>
