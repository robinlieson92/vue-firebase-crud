<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <h3>Add Item</h3>
      </div>
      <div class="card-body">
        <form v-on:submit.prevent="addItem">
          <div class="form-group">
            <label for="name">Item Name:</label>
            <input
              type="text"
              v-model="newItem.name"
              name="name"
              id="name"
              class="form-control"
              placeholder="Item Name"
            >
          </div>
          <div class="form-group">
            <label for="price">Item Price:</label>
            <input
              type="text"
              v-model="newItem.price"
              name="price"
              id="price"
              class="form-control"
              placeholder="Item Price"
            >
          </div>
          <div class="form-group">
            <input type="submit" class="btn btn-primary" value="Add Item">
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "../db.js";

export default {
  components: {
    name: "AddItem"
  },
  data() {
    return {
      items: [],
      newItem: {
        name: "",
        price: ""
      },
      firestoreRef: db.collection("items")
    };
  },
  methods: {
    addItem() {
      const createdAt = new Date();
      this.firestoreRef.add({
        name: this.newItem.name,
        price: this.newItem.price,
        createdAt
      });
      this.newItem.price = "";
      this.newItem.name = "";
      this.$router.push("/list");
    }
  }
};
</script>

<style scoped>
.card {
  width: 60%;
  margin: 15px auto;
}
form {
  text-align: left;
}
</style>