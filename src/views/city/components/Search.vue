<template>
  <div class="search">
      <input class="search-input" type="text" placeholder="输入城市名或拼音">
  </div>
</template>
<script>
export default {
  name: "CitySearch"
};
</script>
<style lang="less" scoped>
@import "../../../assets/styles/varibles.less";
.search{
    height: .82rem;
    padding: .1rem;
    background-color: @bgColor;
    .search-input{
        box-sizing: border-box;
        padding: .15rem;
        height: .62rem;
        width: 100%;
        text-align: center;
        border-radius: .06rem;
        color: #666 !important;
    }
}
</style>
