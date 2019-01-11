<template>
  <div class="list" ref="wrapper">
    <ul>
      <li class="item">A</li>
      <li class="item">A</li>
      <li class="item">A</li>
      <li class="item">A</li>
      <li class="item">A</li>
      <li class="item">A</li>
      <li class="item">A</li>
      <li class="item">A</li>
      <li class="item">A</li>
      <li class="item">A</li>
      <li class="item">A</li>
      <li class="item">A</li>
    </ul>
  </div>
</template>
<script>
// import Bscroll from "better-scroll";
export default {
  name: "Alphabet"
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
      line-height: .44rem;
    text-align: center;
    color:@bgColor;
  }
}
</style>
