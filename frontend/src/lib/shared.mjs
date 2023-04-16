//
import axios from "axios";

//env?
const HOST = 'http://localhost:3000'


//Interface
//errors
const getData  = async props => (await axios.get( HOST + props.resource)).data

//errors
const postData = async props => (await axios.post(HOST + props.resource, props.params)).data

//errors
const putData  = async props => (await axios.put(HOST + props.resource, props.params)).data 

//
export { getData, putData, postData }





//curl -X PUT -H "Content-Type: application/json" -d '{"name": "TOM D"}' 'http://localhost:3000/students?id=8'
//curl -X PUT 'http://localhost:3000/students?id=8' -H "Content-Type: application/json" -d '{"name": "TOM D"}'