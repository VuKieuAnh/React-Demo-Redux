import logo from './logo.svg';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import store from "./store";

function App() {
  const  dispatch = useDispatch();
  const x = useSelector(state => {
    console.log(state);
    return state.name;
  });
  return (
   <>{x}
     <button onClick={()=>{
         dispatch({
             type: 'a',
             data: {
                 name: 'KA',
                 age: 30
             }
         })
     }}>test</button>
   </>
  );
}

export default App;
