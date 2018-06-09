<template>
  <div class="homepage">
    <h1>My Store</h1>
    <div class="item-table">
      <div class="item-list" v-for="(item, idx) in items"  v-bind:key="idx">
        <img class="images" v-bind:src="item.image_url" v-bind:alt="'image' + idx"/>
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
.images {
  width: 160px;
  height: 160px;
}
.item-table {
  width: 100%;  
}
.item-list {
  display: flex;
  justify-content: space-between;
}
</style>
