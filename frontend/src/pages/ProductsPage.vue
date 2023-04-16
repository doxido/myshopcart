

<template>
  <h1>Products</h1>
  <div class="grid-wrap">
      <div v-for="product in this.$store.state.entities[label]" :key="product.id">
        <ProductViews :product="product" view="LIST" />
      </div>
  </div>
</template>
  
<script>
  import ProductViews from '../components/ProductViews.vue';
  
  //
  export default {
    name: "ProductsPage",
    data: () => ({  label: 'products' }),
    async created() { this.$store.dispatch('getEntities', this.label);  },
    components: {   ProductViews  },
  }
</script>
