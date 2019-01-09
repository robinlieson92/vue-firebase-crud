import Vue from "vue";
import firebase from "firebase";
import Router from "vue-router";

import Home from "./views/Home.vue";
import Login from "./views/Login.vue";
import SignUp from "./views/SignUp.vue";

import AddItem from "./components/AddItem.vue";
import EditItem from "./components/EditItem.vue";
import ListItem from "./components/ListItem.vue";

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "*",
      redirect: "/login"
    },
    {
      path: "/",
      redirect: "/login"
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    },
    {
      path: "/sign-up",
      name: "SignUp",
      component: SignUp
    },
    {
      path: "/home",
      name: "home",
      component: Home,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/add",
      name: "add",
      component: AddItem,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/edit/:id",
      name: "edit",
      component: EditItem,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/list",
      name: "list",
      component: ListItem,
      meta: {
        requiresAuth: true
      }
    }
  ]
});

router.beforeEach((to, from, next) => {
  // to and from are both route objects. must call `next`.
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) next("login");
  else if (!requiresAuth && currentUser) next("home");
  else next();
});

export default router;
