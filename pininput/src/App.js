//import logo from './logo.svg';
import './App.css';
import Input from "./hooks/Input"
import { useState } from 'react';


function App() {
  const [otp,setOtp]=useState("")
  return (
    <div className="App">
      
       <Input length={5}/>
       <div>The OTP input is {otp}</div>
    </div>
  );
}

export default App;


