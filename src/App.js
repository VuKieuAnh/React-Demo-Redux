import logo from './logo.svg';
import './App.css';
import {useSelector} from "react-redux";
import store from "./store";

function App() {
  const x = useSelector(state => {
    console.log(state);
    return state;
  });
  return (
   <></>
  );
}

export default App;
