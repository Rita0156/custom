//import logo from './logo.svg';
//import { useState } from 'react';
import './App.css';
import { useTimer } from './Hooks/useTimer';

function App() {
  //const [com,setCom]=useState("Not Complete")
  const ready=useTimer(5000);
  //(ready?setCom("Not Complete"):setCom("Completed"))
  return (
    <div className="App">
      <h1>True False Statement</h1>
        <h1>{(!ready)?"Not Completed":"Completed"}</h1>
    </div>
  );
}

export default App;
