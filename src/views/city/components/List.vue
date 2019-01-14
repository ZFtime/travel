<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area border-topbottom">
        <div class="title">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <!-- 原来的写法 -->
            <!-- <div class="button">北京</div> -->
            <div class="button">{{this.currentCity}}</div>
          </div>
        </div>
      </div>
      <div class="area border-topbottom">
        <div class="title">热门城市</div>
        <div class="button-list">
          <div
            class="button-wrapper"
            v-for="item in hotCities"
            :key="item.id"
            @click="handleCityClick(item.name)"
          >
            <div class="button">{{item.name}}</div>
          </div>
          <!-- <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>-->
        </div>
      </div>
      <div class="area border-topbottom" v-for="(item,key) in cities" :key="key" :ref="key">
        <div class="title">{{key}}</div>
        <div
          class="item-list"
          v-for="innerItem in item"
          :key="innerItem.id"
          @click="handleCityClick(innerItem.name)"
        >
          <div class="item border-topbottom">{{innerItem.name}}</div>
          <!-- <div class="item border-topbottom">阿拉尔</div>
          <div class="item border-topbottom">阿拉尔</div>-->
        </div>
        <!-- <div class="title">A</div>
        <div class="item-list">
          <div class="item border-topbottom">阿拉尔</div>
          <div class="item border-topbottom">阿拉尔</div>
          <div class="item border-topbottom">阿拉尔</div>
        </div>-->
        <!-- <div class="title">A</div>
        <div class="item-list">
          <div class="item border-topbottom">阿拉尔</div>
          <div class="item border-topbottom">阿拉尔</div>
          <div class="item border-topbottom">阿拉尔</div>
        </div>
        <div class="title">A</div>
        <div class="item-list">
          <div class="item border-topbottom">阿拉尔</div>
          <div class="item border-topbottom">阿拉尔</div>
          <div class="item border-topbottom">阿拉尔</div>
        </div>
        <div class="title">A</div>
        <div class="item-list">
          <div class="item border-topbottom">阿拉尔</div>
          <div class="item border-topbottom">阿拉尔</div>
          <div class="item border-topbottom">阿拉尔</div>
        </div>-->
      </div>
    </div>
  </div>
</template>
<script>
import Bscroll from "better-scroll";
import { mapState,mapMutations } from "vuex";
export default {
  name: "CityList",
  mounted() {
    this.scroll = new Bscroll(this.$refs.wrapper);
  },
  computed: {
    ...mapState({
      currentCity:'city'
    })
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
  props: {
    hotCities: Array,
    cities: Object,
    letter: String
  },
  watch: {
    letter() {
      if (this.letter) {
        const element = this.$refs[this.letter][0];
        this.scroll.scrollToElement(element);
      }
    }
  }
};
</script>
<style lang="less" scoped>
@import "../../../assets/styles/varibles.less";
.list {
  overflow: hidden;
  position: absolute;
  top: 1.58rem;
  left: 0;
  right: 0;
  bottom: 0;
  .title {
    line-height: 0.54rem;
    background-color: #eee;
    color: #666;
    font-size: 0.26rem;
  }
  .button-list {
    padding: 0.1rem 0.6rem 0.1rem 0.1rem;
    overflow: hidden;
    .button-wrapper {
      float: left;
      width: 33.33%;
      .button {
        margin: 0.1rem;
        padding: 0.1rem;
        text-align: center;
        border: 0.02rem solid #ccc;
        border-radius: 0.06rem;
      }
    }
  }
  .item-list {
    .item {
      line-height: 0.76rem;
      padding-left: 0.2rem;
      color: #666;
    }
  }
}
</style>
