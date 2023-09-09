//import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import ListComp from "./component/ListComp"

function App() {
  const [count,setCount]=useState(0)

  useEffect(()=>{
    const time=setInterval(()=>{
       setCount(count=>count+1)
    },1000)
   return ()=>clearInterval(time)
  },[]);
  return (
    <div className="App">
      <div>
        <h1>Count : {count}</h1>
      </div>
       <ListComp/>
    </div>
  );
}

export default App;
