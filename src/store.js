//kho luu tru cac state
// co pham vi truy cap trong toan bo du an
import {createStore} from "redux";
//Khi dung dispatch thi se tu dong goi ham nay
//voi 2 tham so la init va action
const reducer = (initialSate, action)=>{
    if (action.type=='a'){
        return action.data
    }
    return {
        name: 'Hello'
    }
}
//createStore nhan vao 1 tham so la 1 function
const store = createStore(reducer);
export default store;
