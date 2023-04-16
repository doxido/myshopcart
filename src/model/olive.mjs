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
