<template>
  <div class="city">
    <CityHeader/>
    <CitySearch/>
    <CityList/>
    <Alphabet/>
  </div>
</template>
<script>
import CityHeader from "./components/Header";
import CitySearch from "./components/Search";
import CityList from "./components/List";
import Alphabet from "./components/Alphabet";
export default {
  name: "City",
  components: {
    CityHeader,
    CitySearch,
    CityList,
    Alphabet
  }
};
</script>
<style>
</style>
