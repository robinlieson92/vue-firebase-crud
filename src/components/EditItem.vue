<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <h3>Edit Item</h3>
      </div>
      <div class="card-body">
        <form v-on:submit.prevent="updateItem">
          <div class="form-group">
            <label for="name">Item Name:</label>
            <input
              type="text"
              v-model="editItem.name"
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
              v-model="editItem.price"
              name="price"
              id="price"
              class="form-control"
              placeholder="Item Price"
            >
          </div>
          <div class="form-group">
            <input type="submit" class="btn btn-primary" value="Update Item">
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
    name: "EditItem"
  },
  data() {
    return {
      editItem: {
        name: "",
        price: ""
      },
      firestoreRef: db.collection("items")
    };
  },
  created() {
    this.firestoreRef
      .doc(this.$route.params.id)
      .get()
      .then(doc => {
        if (doc.exists) {
          console.log(doc.id, "=>", doc.data());
          this.editItem.name = doc.data().name;
          this.editItem.price = doc.data().price;
        } else {
          alert("No document is loaded !");
        }
      });
  },
  methods: {
    updateItem() {
      this.firestoreRef
        .doc(this.$route.params.id)
        .set(this.editItem)
        .then(docRef => {
          this.editItem.price = "";
          this.editItem.name = "";
          this.$router.push("/list");
        });
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