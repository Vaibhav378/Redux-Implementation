import logo from './logo.svg';
import './App.css';
import {useDispatch} from "react-redux";
import Count from './Components/Count';

export default function App() {
const dispatch=useDispatch();
  return (
    <div className="App">

      <button onClick={(e)=>dispatch({type:"INCREMENT"})}>
        Increment
      </button>
      <Count/>
      <button onClick={(e)=>dispatch({type:"DECREMENT"})}>
        Decrement
      </button>
    </div>

  )
}


