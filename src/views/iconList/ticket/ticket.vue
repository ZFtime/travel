<template>
  <div>
    <ticketHeader/>
    <ticketSearch/>
    <TicketBanner/>
  </div>
</template>
<script>
import ticketHeader from "./components/Header";
import ticketSearch from "./components/Search";
import TicketBanner from "./components/Banner";
export default {
  name: "ticket",
  components: {
    ticketHeader,
    ticketSearch,
    TicketBanner
  }
};
</script>
<style lang="less" scoped>
</style>
