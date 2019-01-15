<template>
  <div>
    <div class="item" v-for="(item,index) in list" :key="index">
      <div class="item-title border-bottom">
        <span class="item-title-icon"></span>
        {{item.title}}
      </div>
      <div v-if="item.children" class="item-children">
          <DetailList :list="item.children"/>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "DetailList",
  data() {
    return {};
  },
  props: {
    list: Array
  },
  methods: {}
};
</script>
<style lang="less" scoped>
@import "../../../assets/styles/varibles.less";
.item-title-icon {
  display: inline-block;
  position: relative;
  top: .08rem;
  left: .06rem;
  width: 0.36rem;
  height: 0.36rem;
  //   top: 0.26rem;
  //   left: 0.2rem;
  background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -0.45rem
    no-repeat;
  margin-right: 0.1rem;
  background-size: 0.4rem 3rem;
}
.item-title {
  line-height: 0.8rem;
  font-size: 0.32rem;
  padding: 0 0.2rem;
}
.item-children{
    padding: 0 .2rem;
}
</style>
