import logo from './logo.svg';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {getData} from "./redux/action";

function App() {
  const  dispatch = useDispatch();
  const x = useSelector(state => {
    console.log(state);
    return state[0].name;
  });
  return (
   <>
       <a>{x}</a>
     <button onClick={()=>{
         dispatch(getData())
     }}>test</button>
   </>
  );
}

export default App;
