<template>
  <div class="detail">
    <Banner/>
    <DetailHeader/>
    <DetailList :list="list"/>
    <div class="content"></div>
  </div>
</template>
<script>
import Banner from "./components/Banner";
import DetailHeader from "./components/Header";
import DetailList from "./components/List";
export default {
  name: "Detail",
  components: {
    Banner,
    DetailHeader,
    DetailList
  },
  data() {
    return {
      list: [
        {
          title: "成人票",
          children: [
            {
              title: "成人票三级联票",
              children: [
                {
                  title: "成人票三级联票————112"
                }
              ]
            }
          ]
        },
        {
          title: "学生票"
        },
        {
          title: "儿童票"
        },
        {
          title: "特惠票"
        }
      ]
    };
  }
};
</script>
<style lang="less" scoped>
.content {
  height: 50rem;
}
</style>
