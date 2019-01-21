<template>
  <div class="download-cont" v-show="show">
    <div class="download">
      <div class="dl-img">
        <img
          src="http://source.qunar.com/site/images/wap/touch/images/v2/images1x/top-logo.png"
          alt="logo"
        >
      </div>
      <div class="dl-word">
        <div class="dl-go">去哪儿旅行</div>
        <div class="dl-over">
          超过
          <span class="dl-num">4.6亿</span>人的聪明选择
        </div>
      </div>
      <div class="dl-btn">打开客户端</div>
      <div class="dl-close" @click="closeDownload">
        <img
          src="http://source.qunar.com/site/images/wap/touch/images/v2/images1x/modifydelete.png"
          alt="关闭"
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "forbiddenDownload",
  data() {
    return {
      show: true,
      name: ""
    };
  },
  methods: {
    closeDownload() {
      this.show = false;
    }
  }
};
</script>
<style lang="less" scoped>
.download-cont {
  height: 60px;
  font-size: 0;
  background-color: #000;
  .download {
    position: fixed;
    top: 0;
    z-index: 5;
    height: 60px;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    font-size: 12px;
    padding: 10px 0;
    box-sizing: border-box;
    .dl-img {
      width: 60px;
      text-align: center;
      position: absolute;
      img {
        width: 40px;
        height: 40px;
      }
    }
    .dl-word {
      position: absolute;
      left: 60px;
      .dl-go {
        font-size: 22px;
        color: #25a4bb;
        font-weight: bold;
        line-height: 22px;
      }
      .dl-over {
        color: #c4c4c4;
        line-height: 20px;
        .dl-num {
          font-size: 14px;
          color: #fab400;
          font-weight: bold;
        }
      }
    }
    .dl-btn {
      position: absolute;
      top: 12px;
      right: 45px;
      width: 80px;
      height: 33px;
      background-color: #f4b000;
      font-size: 14px;
      text-align: center;
      border-radius: 5px;
      color: #fff;
      line-height: 33px;
      font-weight: bold;
    }
    .dl-close {
      position: absolute;
      top: 5px;
      right: 5px;
      width: 20px;
      height: 20px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
