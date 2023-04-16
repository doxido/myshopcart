//
import App from './pages/App.vue'

//Store
import products_Store from './store/products_store';

//Views
import ShoppingCartPage     from './pages/ShoppingCartPage.vue';
import ProductsPage         from './pages/ProductsPage.vue';
import ProductDetailPage    from './pages/ProductDetailPage.vue';
import NotFoundPage         from './pages/NotFoundPage.vue';

//Routes
const app_routes = [
    {    path: '/cart',                     component: ShoppingCartPage,  }, 
    {    path: '/',                         component: ProductsPage,  }, 
    {    path: '/products',                 component: ProductsPage,  }, 
    {    path: '/products/:productId',      component: ProductDetailPage,  }, 
    {    path: '/:pathMatch(.*)*',          component: NotFoundPage,  }
]

//Main
export {
    App,  //    
    products_Store,
    app_routes
}

//export { App, app_routes }