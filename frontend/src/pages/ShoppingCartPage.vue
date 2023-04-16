<template>
  <h1>Shopping Cart</h1>
  <div v-if="this.$store.state.entities[label].length > 0">
    <div class="product-container" v-for="product in this.$store.state.entities[label]" :key="product.id">
      <ProductViews :product="product" view="CART" />
      <button class="remove-button">Remove from Cart</button>
    </div>
    <button class="checkout-button">Proceed to Checkout</button>
  </div>
  <div v-if="this.$store.state.entities[label].length === 0">You current have no items in your cart!</div>
</template>
  
<script>
  import ProductViews from '../components/ProductViews.vue';

  //
  export default {
    name: "ShoppingCartPage",
    data: () => ({  label: 'cartItems' }),
    async created() { this.$store.dispatch('getEntities', this.label);  },
    components: { ProductViews }
  }
</script>
