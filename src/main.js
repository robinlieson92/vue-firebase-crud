import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import firebase from "firebase/app";

Vue.config.productionTip = false;

let app = "";

firebase.initializeApp({
  apiKey: "AIzaSyBAIY57e-iH43s95VEdLkPn8ki9nwAP700",
  authDomain: "vue-firebase-crud-68c0f.firebaseapp.com",
  databaseURL: "https://vue-firebase-crud-68c0f.firebaseio.com",
  projectId: "vue-firebase-crud-68c0f",
  storageBucket: "vue-firebase-crud-68c0f.appspot.com",
  messagingSenderId: "1013503918276"
});

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app");
  }
});
