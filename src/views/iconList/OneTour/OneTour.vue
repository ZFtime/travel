<template>
  <div>
    <TourHeader/>
    <TourSelete/>
    <TourList/>
  </div>
</template>
<script>
import TourHeader from "../ticket/components/Header";
import TourSelete from "../OneTour/components/Selete";
import TourList from "../OneTour/components/List";
export default {
  name: "OneTour",
  components: {
    TourHeader,
    TourSelete,
    TourList
  }
};
</script>
<style>
</style>
