<template>
  <div class="city">
    <CityHeader/>
    <CitySearch/>
    <CityList :hotCities="hotCities" :cities="cities"/>
    <Alphabet :cities="cities"/>
  </div>
</template>
<script>
import axios from "axios";
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
  },
  data() {
    return {
      hotCities: [],
      cities:{}
    };
  },
  mounted() {
    this.getCityList();
  },
  methods: {
    getCityList() {
      axios
        .get("http://localhost:9091/msg")
        .then(res => {
          const data = res.data.data;
          this.hotCities = data.hotCities;
          this.cities=data.cities
          console.log(data);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>
<style>
</style>
