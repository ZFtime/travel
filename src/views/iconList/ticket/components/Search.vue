<template>
  <div class="tl-main">
    <div class="tl-filter border-bottom">
      <div class="tl-select">
        <span class="tl-select-caption tl-iconfont">全部分类</span>
      </div>
      <div class="tl-select">
        <span class="tl-select-caption tl-iconfont">推荐排序</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
.tl-main {
  .tl-filter {
    height: 0.8rem;
    background-color: #fff;
    width: 100%;
    .tl-select::before{
        border-top: 1px solid #e0e0e0;
    }
    .tl-select {
      float: left;
      width: 50%;
      height: 0.8rem;
      overflow: hidden;
      position: relative;
      color: #212121;
      line-height: 0.8rem;
      text-align: center;
      white-space: nowrap;
      text-overflow: ellipsis;
      .tl-iconfont {
        font-family: "mpiconfont";
        speak: none;
        font-style: normal;
        font-weight: normal;
        font-variant: normal;
        text-transform: none;
        line-height: 1;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
    }
  }
}
</style>
