//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import useCounter from './component/useCounter';

const images=[
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg9EeSJgtad5jWkky-iMisJi7UFWOUu2Cg2w&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpmcH18ektW4f789cel7vUsJ7nuFtPlFUbCg&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXyzjp0ORcInUr6x-lRkn4_H75Uivq82fX7Q&usqp=CAU"
]

function App() {
  const [ind,setInd]=useState(0)
  function incCount(){
      if(ind===images.length-1){
        setInd(0)
      }
      else if(ind>=0){
        setInd(ind+1)
      }
      //images[ind]

  }
  function decCount(){
      if(ind>0){
        setInd(ind-1)
      }
      else if(ind===0){
        setInd(images.length-1)
      }
  }
  return (
    <div className="App">
         <div style={{width:"300px",height:"300px",border:"5px solid black", margin:"auto",borderRadius:"6px",marginTop:"20px"}}>
             <img style={{height:"300px",width:"300px"}} src={images[ind]}  alt='abc' />
         </div>
         <button style={{backgroundColor:"green", color:"white"}} onClick={incCount}>Next</button>
         <button style={{backgroundColor:"orange", color:"white"}} onClick={decCount}>Privious</button>

         <div>
            <input value="value" onChange="value" />
         </div>
    </div>
  );
}

export default App;
