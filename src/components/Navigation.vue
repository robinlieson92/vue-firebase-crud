<template>
  <nav class="navbar navbar-expand-sm bg-light" v-if="user">
    <ul class="nav navbar-nav">
      <li class="nav-item active">
        <router-link to="/home" class="nav-link">Home</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/add" class="nav-link">Add Item</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/list" class="nav-link">List Item</router-link>
      </li>
    </ul>
    <span class="pull-right" v-if="user">
      <button @click="logout" class="btn btn-primary">Logout</button>
    </span>
  </nav>
</template>

<script>
import firebase from "firebase";

export default {
  name: "Navigation",
  data() {
    return {
      user: null
    };
  },
  methods: {
    logout: function() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace("login");
        });
    }
  },
  created: function() {
    const vm = this;
    firebase.auth().onAuthStateChanged(function(userData) {
      if (userData) {
        vm.user = userData;
      } else {
        vm.user = null;
      }
    });
  }
};
</script>

<style scoped>
.navbar-nav {
  width: 100%;
}
</style>