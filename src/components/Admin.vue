<template>
  <div class="homepage">
    <h1>Add Item</h1>
    <p>See the <router-link to="/">Store</router-link></p>
    <form v-on:submit="addItem">
      <input v-model="name" placeholder="Item Name" />
      <input v-model="price" placeholder="Item Price" />
      <input v-model="imageUrl" placeholder="Item Image Url" />
      <button type="submit">Add Item</button>
    </form>
  </div>
</template>

<script>
import apiService from '../api-service';

export default {
  name: 'Admin',
  data() {
    return {
      name: '',
      price: '',
      imageUrl: '',
    };
  },
  methods: {
    addItem: function(evt) {
      evt.preventDefault();
      apiService.createItems(
        JSON.stringify({
          name: this.name, 
          price: this.price, 
          imageUrl: this.imageUrl
        })
      )
      .then(json => console.log('json==', json));

      //console.log(this.name, this.price, this.imageUrl);
      // TODO: Save data in server using API
    }
  },
  // SPAのSEO対策?
  // mounted: function () {
  //   const title = window.document.getElementsByTagName('title')[0];
  //   title.textContent = 'mystore: admin';
  // },
};
</script>

<style scoped>
form {
  display: block;
  margin: auto;
  width: 500px;
}

input {
  margin: 5px auto;
  box-sizing: border-box;
  width: 200px;
  padding: 15px;
  display: block;
}

button {
  display: block;
  margin: 5px auto;
  padding: 15px;
}
</style>
