<template>
  <div class="home">
    <HomeHeader :city="city"/>
    <HomeSwiper :SwiperList="SwiperList"/>
    <HomeIcons :iconList="iconList"/>
    <HomeRecommend :recommendList="recommendList"/>
    <HomeWeekend :WeekendList="WeekendList"/>
  </div>
</template>

<script>
import HomeHeader from "./components/Header";
import HomeSwiper from "./components/HomeSwiper";
import HomeIcons from "./components/Icons";
import HomeRecommend from "./components/Recommend";
import HomeWeekend from "./components/Weekend";
import axios from "axios";

export default {
  name: "home",
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  data() {
    return {
      city: "",
      SwiperList:[],
      iconList:[],
      recommendList:[],
      WeekendList:[]
    };
  },
  methods: {
    getHomeInfo() {
      axios
        .get("http://localhost:9090/msg")
        .then(res => {
          const data=res.data.data
          this.city = res.data.city;
          this.SwiperList = data.SwiperList;
          this.iconList=data.iconList;
          this.recommendList=data.recommendList;
          this.WeekendList=data.WeekendList
          console.log(data);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },
  mounted() {
    this.getHomeInfo();
  }
};
</script>
