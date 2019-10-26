import Vue from "vue";
import AppComponent from "./App/index.vue";

const vm = new Vue({
  el: "#app",
  components: {
    AppComponent
  },
  render: h => h("AppComponent")
});
