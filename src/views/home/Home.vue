<template>
  <div class="home">
    <!-- 原来的写法 -->
    <!-- <HomeHeader :city="city"/> -->
    <!-- 使用vuex的写法 -->
    <HomeHeader/>
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
// 优化页面的性能
import { mapState } from "vuex";

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
      //    原来的写法
      // city: "",
      SwiperList: [],
      iconList: [],
      recommendList: [],
      WeekendList: [],
      lastCity: ""
    };
  },
  computed: {
    ...mapState(["city"])
  },
  methods: {
    getHomeInfo() {
      axios
        .get("http://localhost:9090/msg?city=" + this.city)
        .then(res => {
          const data = res.data.data;
          //    原来的写法
          // this.city = res.data.city;
          this.SwiperList = data.SwiperList;
          this.iconList = data.iconList;
          this.recommendList = data.recommendList;
          this.WeekendList = data.WeekendList;
          // console.log(data);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },
  mounted() {
    this.getHomeInfo();
  },
  // keep-alive自带的方法
  activated() {
    if (this.lastCity !== this.city) {
      this.lastCity = this.city;
      this.getHomeInfo();
    }
  }
};
</script>
