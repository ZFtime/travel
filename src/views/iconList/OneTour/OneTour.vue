<template>
  <div>
    <TourHeader/>
    <TourList/>
  </div>
</template>
<script>
import TourHeader from "../ticket/components/Header";
import TourList from "../OneTour/components/List";
export default {
  name: "OneTour",
  components: {
    TourHeader,
    TourList
  }
};
</script>
<style>
</style>
