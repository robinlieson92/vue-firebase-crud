<template>
  <div class="sign-up">
    <p>Let's create a new account !</p>
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
    <button type="button" @click="signUp" class="btn btn-primary">Sign Up</button>
    <span>or go back to
      <router-link to="/login">login</router-link>
    </span>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "signup",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    signUp: function() {
      firebase
        .auth()
        .createUserAndRetrieveDataWithEmailAndPassword(
          this.email,
          this.password
        )
        .then(
          user => {
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
.signUp {
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
  margin-top: 10px;
  /* width: 10%; */
  cursor: pointer;
}
span {
  display: block;
  margin-top: 20px;
  font-size: 11px;
}
</style>