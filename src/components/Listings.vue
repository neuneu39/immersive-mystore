<template>
  <div class="homepage">
    <h1>Items</h1>
    <!-- {{items}} -->
    <ol>
      <li 
      v-for="(item, idx) in items"
      v-bind:key="idx"
      v-bind:name="item.name"
      v-bind:price="item.price"
      >{{item.name}}
      {{item.price}}</li>
    </ol>

    <!-- TODO: Add Item List -->
  </div>
</template>

<script>
import apiService from "../api-service";

export default {
  name: 'Homepage',
  data() {
    return {
      name: "item1",
      price: "100",
      imageUrl: "http://",
      items: [],
    };
  },
  mounted() {
    apiService.getItemInformation()
      .then( json => {
        console.log(json);
        this.items = json;
      });
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
