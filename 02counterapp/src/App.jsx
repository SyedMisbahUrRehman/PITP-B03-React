  import React,{useState} from 'react'

  import './App.css'
  import { use } from 'react'

  function App() {
  const [count,setCount]= useState(0)

  const Increment = () =>{
    setCount(count+1)
    console.log(count); 
  }

  console.log("Reset");
    return (
      <>
        <h1>Counter App</h1>
        <h2>Value of Count is {count}</h2>
        <button
        onClick={Increment}
        >Increment</button>
        
        <button
        disabled={count<=0?true:false}
        onClick={()=>setCount(count-1)}
        >Decrement</button>
        <button
        onClick={()=>setCount(0)}
        >Reset</button>
      </>
    )
  }

  export default App
