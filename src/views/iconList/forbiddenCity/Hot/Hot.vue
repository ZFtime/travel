<template>
  <div class="hot">
    <div class="hot-content">
      <div class="hot-group">
        <div class="hot-caption">
          <div class="hot-inner">
            <div class="title">等你来</div>
            <div class="arrow arrow-right"></div>
            <div class="arrow arrow-left"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="content">
      <forbiddenContent/>
    </div>
  </div>
</template>
<script>
import forbiddenContent from "./Content";
export default {
  name: "forbiddenHot",
  components: {
    forbiddenContent
  }
};
</script>
<style lang="less" scoped>
.hot {
  background-color: #fbdea3;
  .hot-content {
    position: relative;
    margin: 0 10px;
    padding-bottom: 10px;
    .hot-group {
      padding-top: 10px;
      .hot-caption {
        position: relative;
        height: 35px;
        background-color: #e0ae66;
        .hot-inner {
          position: relative;
          width: 33%;
          height: 35px;
          margin: 0 auto;
          background-color: #f5d17a;
          .title {
            font: bold 16px/35px microsoft yahei, sans-serif;
            letter-spacing: 2px;
            text-align: center;
            color: #ec7b28;
          }
          .arrow {
            overflow: hidden;
            position: absolute;
            top: 0;
            width: 0;
            height: 0;
            border-width: 0 8px 35px;
            border-style: solid;
            border-color: transparent;
          }
          .arrow-right {
            border-left-color: #f5d17a;
            right: -16px;
          }
          .arrow-left {
            border-right-color: #f5d17a;
            left: -16px;
          }
        }
      }
    }
  }
  .content {
    background-color: #fbdea3;
  }
}
</style>
