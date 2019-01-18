<template>
  <div>
    <forbiddenHeader/>
    <forbiddenBanner/>
    <forbiddenList/>
  </div>
</template>
<script>
import forbiddenHeader from "./components/Header";
import forbiddenBanner from "./components/Banner";
import forbiddenList from "./components/List";
export default {
  name: "forbiddenCity",
  components: {
    forbiddenHeader,
    forbiddenBanner,
    forbiddenList
  }
};
</script>
<style lang="less" scoped>
</style>
