<template>
  <div class="search">
    <input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或拼音">
    <div class="search-content" ref="search" v-show="keyword">
      <ul>
        <li class="search-item border-bottom" @click="handleCityClick(item.name)" v-for="item in list" :key="item.id">{{item.name}}</li>
        <li class="search-item border-bottom" v-show="hasNodata">暂无匹配项</li>
      </ul>
    </div>
  </div>
</template>
<script>
import Bscroll from "better-scroll";
import { mapMutations } from "vuex"
export default {
  name: "CitySearch",
  props: {
    cities: Object
  },
  computed: {
    hasNodata() {
      return !this.list.length;
    }
  },
  methods: {
    handleCityClick(city) {
      // this.$store.dispatch('changeCity',city)
      // this.$store.commit("changeCity", city);
      this.changeCity(city)
      this.$router.push("/");
    },
    ...mapMutations(['changeCity'])
  },
  mounted() {
    this.scroll = new Bscroll(this.$refs.search);
  },
  data() {
    return {
      keyword: "",
      list: [],
      timer: null
    };
  },
  watch: {
    keyword() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      if (!this.keyword) {
        this.list = [];
        return;
      }
      this.timer = setTimeout(() => {
        const result = [];
        for (let i in this.cities) {
          this.cities[i].forEach(value => {
            if (
              value.spell.indexOf(this.keyword) > -1 ||
              value.name.indexOf(this.keyword) > -1
            ) {
              result.push(value);
            }
          });
        }
        this.list = result;
      }, 100);
    }
  }
};
</script>
<style lang="less" scoped>
@import "../../../assets/styles/varibles.less";
.search {
  height: 0.82rem;
  padding: 0.1rem;
  background-color: @bgColor;
  .search-input {
    box-sizing: border-box;
    padding: 0.15rem;
    height: 0.62rem;
    width: 100%;
    text-align: center;
    border-radius: 0.06rem;
    color: #666 !important;
  }
  .search-content {
    z-index: 1;
    width: 100%;
    overflow: hidden;
    position: absolute;
    top: 1.58rem;
    left: 0;
    bottom: 0;
    background-color: #eee;
  }
  .search-item {
    line-height: 0.62rem;
    color: #666;
    padding-left: 0.2rem;
    background-color: #fff;
  }
}
</style>
