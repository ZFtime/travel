<template>
  <div class="home">
    <HomeHeader/>
    <HomeSwiper/>
  </div>
</template>

<script>
import HomeHeader from "./components/Header";
import HomeSwiper from "./components/HomeSwiper"
export default {
  name: "home",
  components: {
    HomeHeader,
    HomeSwiper
  }
};
</script>
