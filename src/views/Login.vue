<template>
  <div class="login">
    <h3>Sign In</h3>
    <input
      type="text"
      v-model="email"
      name="email"
      id="email"
      placeholder="Email"
      class="form-control"
    >
    <br>
    <input
      type="password"
      v-model="password"
      name="password"
      id="password"
      placeholder="Password"
      class="form-control"
    >
    <br>
    <button type="button" class="btn btn-primary" @click="login">Login</button>
    <p>You don't have an account ? You can
      <router-link to="/sign-up">create one</router-link>
    </p>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "login",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    login: function() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
            console.log(user);
            this.$router.replace("home");
          },
          err => {
            alert("Oops. " + err.message);
          }
        );
    }
  }
};
</script>

<style scoped>
.login {
  margin-top: 40px;
  padding: 10px 20px;
}
h3 {
  margin-bottom: 25px;
}
input {
  margin: 10px auto;
  width: 40%;
  padding: 15px;
}
button {
  margin-top: 20px;
  /* width: 10%; */
  cursor: pointer;
}
p {
  margin-top: 40px;
  font-size: 13px;
}
p a {
  text-decoration: underline;
  cursor: pointer;
}
</style>