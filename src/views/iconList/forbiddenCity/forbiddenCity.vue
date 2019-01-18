<template>
  <div>
    <forbiddenHeader/>
    <forbiddenBanner/>
  </div>
</template>
<script>
import forbiddenHeader from "./components/Header";
import forbiddenBanner from "./components/Banner";
export default {
  name: "MuseumCity",
  components: {
    forbiddenHeader,
    forbiddenBanner
  }
};
</script>
<style lang="less" scoped>
</style>
