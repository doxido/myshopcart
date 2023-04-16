<template>
    <div v-if="product">
      <ProductViews :product="product" view="DETAILS" />
    </div>

    <div v-else><NotFoundPage /></div>
  </template>
  
  <script>
  import ProductViews from '../components/ProductViews.vue';
  import NotFoundPage from './NotFoundPage.vue';
  
  export default {
    name: "ProductDetailPage",
    data: ()=>({ product: null, label: 'products' }),
    async created() { this.product = await this.$store.dispatch('getEntity', [this.label, this.$route.params.productId]);  },
    components: { NotFoundPage ,  ProductViews  },
  }
  </script>
