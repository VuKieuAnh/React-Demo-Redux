import axios from "axios";

export const getData = () =>{
    return async  dispatch => {
        const  res = await  axios.get('https://jsonplaceholder.typicode.com/users')
        dispatch({
            type: 'a',
            payload: res.data
        })
    }
}
