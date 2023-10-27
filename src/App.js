
import './App.css';
import { useState } from 'react';

function App() {

  const [value,setValue]=useState(0)

  function increment(value){
    setValue(value)
   }

   function decrement(value){
    setValue(value)
   }

   function reset(){
    setValue(0)
   }
  

  return (
    <div className="App">
      <h1 style={{color:'green',}}>COUNTER APP</h1>
      <h1 style={{size:"xxlarge"}}>{value}</h1>
      <button onClick={()=>increment(value+1)}>Increment</button>
      <button onClick={()=>decrement(value-1)}>Decrement</button>
      <button onClick={reset}>Reset</button>


    </div>
  );
}

export default App;