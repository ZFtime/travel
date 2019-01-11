<template>
  <div class="list" ref="wrapper">
    <ul>
      <li class="item" v-for="(item,key) in cities" :key="item.id">{{key}}</li>
    </ul>
  </div>
</template>
<script>
// import Bscroll from "better-scroll";
export default {
  name: "Alphabet",
  props: {
    cities: Object
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
