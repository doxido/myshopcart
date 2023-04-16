//
import { getData, putData, postData } from '../lib/shared.mjs'

//
const be = { code:"201", message:"OK" }

//
export const Entity = entities => ({
    //validation logic server side
    validate: entity => true,

    //errors
    get: async  id =>  (await getData({ resource:`/${entities}?id=${id}`}))[0],
    
    //
    set: async function(entity){
        //validate product server side
        if(!this.validate(entity)) return { code: "300", message: "Validation error" } 
        
        //try catch
        let result = null
        if(entity.id)
            result = await putData({ resource:`/${entities}/${entity.id}`, params: entity })
        else 
            result = await postData({ resource:`/${entities}/`, params: entity })
        //catch exception return { code: be.code, message: "BE error " + be.message } 
        if( be.code != "200") return { code: be.code, message: "BE error " + be.message }
            
        //normal scenario
        return { code: "200", message: "SUCCESS", data: result } 
    },

    //errors
    getAll: async () =>await getData({ resource:`/${entities}`})
  })


/*
//
const Product = {
    //validation logic server side
    validate: product => true,

    //errors
    get: async  id =>  (await getData({ resource:`/products?id=${id}`}))[0],
    
    //
    set: async function(product){
        //validate product server side
        if(!this.validate(product)) return { code: "300", message: "Validation error" } 
        
        //try catch
        let result = null
        if(product.id)
            result = await putData({ resource:`/products/${product.id}`, params: product })
        else 
            result = await postData({ resource:`/products/`, params: product })
        //catch exception return { code: be.code, message: "BE error " + be.message } 
        if( be.code != "200") return { code: be.code, message: "BE error " + be.message }
            
        //normal scenario
        return { code: "200", message: "SUCCESS", data: result } 
    },

    //errors
    getAll: async () =>await getData({ resource:'/products'})
  }
  

//
export const CartItem = {
    //validation logic server side
    validate: cartItem => true,

    //errors
    get: async  id =>  (await getData({ resource:`/cartItems?id=${id}`}))[0],
    
    //
    set: async function(cartItem){
        //validate product server side
        if(!this.validate(cartItem)) return { code: "300", message: "Validation error" } 
        
        //try catch
        let result = null
        if(cartItem.id)
            result = await putData({ resource:`/cartItems/${cartItem.id}`, params: cartItem })
        else 
            result = await postData({ resource:`/cartItems/`, params: cartItem })
        //catch exception return { code: be.code, message: "BE error " + be.message } 
        if( be.code != "200") return { code: be.code, message: "BE error " + be.message }
            
        //normal scenario
        return { code: "200", message: "SUCCESS", data: result } 
    },

    //errors
    getAll: async () =>await getData({ resource:'/cartItems'})
  }
  */

  //Test GET POST PUT DEL
  //node --experimental-modules ./model/olive.mjs
  //Product.getAll().then(data => { console.log(data) })
  //Product.get(123).then(data => { console.log(data) })
  
  //
  //export default Product