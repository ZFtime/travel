import Vue from "vue";
import Router from "vue-router";
import Home from "./views/home/Home.vue";
import City from "./views/city/City.vue";
import Detail from "./views/detail/Detail.vue";
import Ticket  from "./views/iconList/ticket/ticket.vue"

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/city",
      name: "City",
      component: City
    },
    {
      path: "/detail/:id",
      name: "Detail",
      component: Detail
    },
    {
      path: "/list_景点门票",
      name: "list_景点门票",
      component: Ticket
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    };
  }
});
