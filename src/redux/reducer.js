//Khi dung dispatch thi se tu dong goi ham nay
//voi 2 tham so la init va action
export const reducer = (initialSate, action)=>{
    if (action.type==='a'){
        return action.payload
    }
    return {
        name: 'Hello'
    }
}
