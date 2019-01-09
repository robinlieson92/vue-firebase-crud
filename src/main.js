import Vue from "vue";
import VueFire from "vuefire";

import App from "./App.vue";
import router from "./router";
import store from "./store";

import fireApp from "./db";
import "firebase/firestore";

Vue.config.productionTip = false;
Vue.use(VueFire);

let app = "";

fireApp.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app");
  }
});
