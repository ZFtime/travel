<template>
  <div id="app">
    <!-- 优化网页性能 keep-alive-->
    <!-- exclude="Detail"不让Detail做缓存-->
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
  </div>
</template>

<style>

</style>
