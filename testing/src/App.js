//import logo from './logo.svg';
import './App.css';

function App() {
  const [count,setCount]=useState(0)
  const add=()=>{
    setCount(count+1)
  }
  const red=()=>{
    setCount(count-1)
  }
  return (
    <div className="App">
         <h1>The count is {count}</h1>
         <button onClick={add}>Add</button>
         <button onClick={red} >Reduce</button>
    </div>
  );
}

export default App;
