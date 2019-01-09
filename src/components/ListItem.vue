<template>
  <div>
    <h1>List Item</h1>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Item Name</th>
          <th>Item Price</th>
          <th colspan="2">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.id">
          <td>{{ item.name }}</td>
          <td>{{ item.price }}</td>
          <td>
            <router-link :to="`/edit/${item.id}`" class="btn btn-warning">Edit</router-link>
          </td>
          <td>
            <button @click="deleteItem(item.id)" class="btn btn-danger">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { db } from "../db.js";

export default {
  components: {
    name: "ListItem"
  },
  data() {
    return {
      items: [],
      firestoreRef: db.collection("items")
    };
  },
  created() {
    this.firestoreRef.get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        let data = {
          id: doc.id,
          name: doc.data().name,
          price: doc.data().price,
          created_at: doc.data().createdAt
        };
        this.items.push(data);
      });
    });
  },
  methods: {
    deleteItem(id) {
      this.firestoreRef
        .doc(id)
        .delete()
        .then(() => {
          window.location.reload();
        });
    }
  }
};
</script>

<style scoped>
</style>