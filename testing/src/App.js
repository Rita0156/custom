//import logo from './logo.svg';
import './App.css';

function App() {
  const [count,setCount]=useState(0)
  return (
    <div className="App">
         <h1>The count is {count}</h1>
         <button onClick={()=>{setCount(count+1)}}>Add</button>
         <button onClick={()=>{setCount(count-1)}} >Reduce</button>
    </div>
  );
}

export default App;
