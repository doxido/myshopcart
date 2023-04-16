//
import Product, { Entity } from "../model/olive.mjs"

//store error
const error_Store = {
    state: {
        show: false, message: "error"
    },
    mutations:{
        showError(state, message){ state.show =  true; state.message = message }
    }
}


//Store product
const product_Store = props => ({
    //
    state       : {    entities:{ products:[], cartItems:[] },    products: [], status: { code: '200', message: '' } },
    
    //
    getters     : {
        findProduct : state => id => state.products.find(s => s.id == id),
        findEntity  : state => (id, entity) => state.entities[entity].find(s => s.id == id),

        isLoaded    : state => !!state.products.length,
        isLoadedEntity : state => entity => !!state.entities[entity].length,
        status      : state => state.status
    },
    
    //
    mutations   : {
        setProducts (state, products) { state.products = products;  },
        addProduct  (state, product ) { state.products.push(product); },
        editProduct (state, product ) { const index = state.products.findIndex(s => s.id == product.id); }, //props.updateView(state.products, index, product) },

        setEntities (state, entities) { state.entities[entities[1]] = entities[0];  },
        
        //addEntity   (state, entity_name, entity ) { state.entities[entity_name].push(entity); },
        //editEntity  (state, entity_name, entity ) { const index = state.entities[entity_name].findIndex(s => s.id == entity.id); }, //props.updateView(state.products, index, product) },
        
        //setStatus   (state, status  ) { state.status = status;  },
    },


    //
    actions     : {
        //errors
       async getProducts(context){
            try {
                const products = await Product.getAll()
                context.commit('setProducts', products)                    
            } catch (error) {
                context.commit('showError', error)
            }
        },

        async getEntities(context, entity){
            try {
                const entities = await Entity(entity).getAll()
                context.commit('setEntities', [entities,entity])                    
            } catch (error) {
                context.commit('showError', error)
            }
        },

        async getEntity(context, entity_infos){
            try {             
                return await Entity(entity_infos[0]).get(entity_infos[1])
            } catch (error) {
                context.commit('showError', error)
            }
        },

        //errors
        async add_edit_Product(context, product  ) {
            const result  = await Product.set(product)
            if (result.code != "200"){
                const msg = "Notify error, " + (product.id == undefined? "create" : "edit") + " Product" + (product.id == undefined? "" : " with id: " + product.id)
                context.commit("setStatus", { code: result.code, message: result.message + " " + msg }) 
            }
            else context.commit( product.id? "add" : "edit" + "Product", product) 
        }
    },


    modules:{
        error: error_Store
    }
})

//
export default product_Store;
