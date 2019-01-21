<template>
  <div>
    <forbiddenDownload/>
    <forbiddenHeader/>
    <forbiddenBanner/>
    <forbiddenList/>
  </div>
</template>
<script>
import forbiddenHeader from "./components/Header";
import forbiddenBanner from "./components/Banner";
import forbiddenList from "./components/List";
import forbiddenDownload from "./components/Download";
export default {
  name: "forbiddenCity",
  components: {
    forbiddenHeader,
    forbiddenBanner,
    forbiddenList,
    forbiddenDownload
  }
};
</script>
<style lang="less" scoped>
</style>
