//kho luu tru cac state
// co pham vi truy cap trong toan bo du an
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import {reducer} from "./reducer";

//createStore nhan vao 1 tham so la 1 function
const store = createStore(reducer, applyMiddleware(thunk));
export default store;
