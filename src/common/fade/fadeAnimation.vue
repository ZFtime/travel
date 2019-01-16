<template>
  <div class="detail">
    <transition>
      <slot></slot>
    </transition>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Fade"
};
</script>
<style lang="less" scoped>
.v-enter,
.v-leave-to {
  opacity: 0;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s;
}
</style>
