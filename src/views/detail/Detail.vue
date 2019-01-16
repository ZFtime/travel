<template>
  <div class="detail">
    <Banner :sightName="sightName" :gallaryImgs="gallaryImgs" :bannerImg="bannerImg"/>
    <DetailHeader/>
    <DetailList :list="list"/>
    <div class="content"></div>
  </div>
</template>
<script>
import Banner from "./components/Banner";
import DetailHeader from "./components/Header";
import DetailList from "./components/List";
import axios from "axios";
export default {
  name: "Detail",
  components: {
    Banner,
    DetailHeader,
    DetailList
  },
  data() {
    return {
      list: [],
      sightName: "",
      bannerImg: "",
      gallaryImgs: []
    };
  },
  methods: {
    getDataInfo() {
      // console.log(this.$router.currentRoute.params.id)
      axios
        .get("http://localhost:9092/msg?id="
        , {
          params: {
            id: this.$router.currentRoute.params.id
          }
        }
        )
        .then(res => {
          if (res.data.ret) {
            this.list = res.data.data.categoryList;
            this.sightName = res.data.data.sightName;
            this.bannerImg = res.data.data.bannerImg;
            this.gallaryImgs = res.data.data.gallaryImgs;
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },
  mounted() {
    this.getDataInfo();
  }
};
</script>
<style lang="less" scoped>
.content {
  height: 50rem;
}
</style>
