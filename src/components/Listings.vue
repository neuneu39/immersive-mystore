<template>
  <div class="homepage">
    <h1>My Store</h1>
    <div class="item-list">
      <div class="item" v-for="(item, idx) in items"  v-bind:key="idx">
        <img class="item-img" v-bind:src="item.image_url" v-bind:alt="'image' + idx"/>
        <div class="item-info">
          <p class="item-name">{{item.name}}</p>
          <p class="item-price">{{item.price}}</p>
        </div>
      </div>
    </div>
    <p>  <router-link to="/Admin">Go to Admin</router-link> </p>
    <!-- TODO: Add Item List -->
  </div>
</template>

<script>
import apiService from "../api-service";

export default {
  name: 'Homepage',
  data() {
    return {
      items: [],
    };
  },
  mounted() {
    apiService.getItemInformation()
      .then( json => {
        console.log('items= ', json);
        this.items = json;
      });
    }
};
</script>>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.item-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: stretch;
}
.item {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin: 5px;
  padding: 10px;
  border: 1px solid #ddd;
  width: 150px;
}
.item img {
  padding: 10px;
}
.item-img {
  /* width: 150px;
  height: auto; */
  width: 100%;
  height: auto;
}
.item-name,
.item-price {
  margin: 0;
}
</style>
