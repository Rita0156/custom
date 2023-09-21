//import logo from './logo.svg';
import './App.css';
import React from "react"
function App() {
  const [count,setCount]=React.useState(0)
  return (
    <div className="App">
          <h1>The Count is : {count}</h1>
          <button onClick={()=>{setCount(count+1)}}>Add</button>
          <button onClick={()=>{setCount(count-1)}}>Reduce</button>
    </div>
  );
}

export default App;
