<template>

<div v-if="view=='LIST'" class="product-item" >
  <img :src="dimages[product.imageName]" />
  <h3>{{ product.imagename }}</h3>
  <h3 class="product-name">{{ product.name }}</h3>
  <p class="product-price">{{ product.price }}</p>
  <router-link :to="'/products/' +product.id">
  <button>View Details</button>
  </router-link>
</div >


<div v-if="view=='CART'"  style="width: 70%;">
  <img class="product-image" :src="dimages[product.imageName]" />
  <div class="details-wrap">
    <h3>{{ product.name }}</h3>
    <h3>{{ product.imagename }}</h3>
    <p>{{ product.price }}</p>
  </div>
</div>

<div v-if="view=='DETAILS'"  style="width: 70%;">
  <div class="img-wrap"> <img :src="dimages[product.imageName]" /></div>
    <div class="product-details">
      <h1>{{ product.name }}</h1>
      <h3 class="price">{{ product.price }}</h3>
      <button class="add-to-cart">Add to cart</button>
    </div>
</div>
</template>

<script>
//'/assets/images/'+
//import 'basil-bottle.webp' from '@/assets/images/logo-hexagon.svg';
import images2 from './shared01';

console.log(images2)

//
export default {
    name: "ProductViews",
    data: ()=> ({ dimages: images2 }),
    props: ['product', 'view'],
  }
</script>
