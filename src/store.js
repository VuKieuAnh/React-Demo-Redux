//kho luu tru cac state
// co pham vi truy cap trong toan bo du an
import {createStore} from "redux";
const setup = ()=>{
    return {
        name: 'Hello'
    }
}
//createStore nhan vao 1 tham so la 1 function
const store = createStore(setup);
export default store;
