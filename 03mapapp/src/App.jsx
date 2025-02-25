import { useState } from 'react'
import './App.css'
import Card from './Card';
import MyButton from './MyButton';

function App() {
  const [show, setShow] = useState(true)


  return (
    <div>
      <p>Always Show this</p>
      {show && <p>Hide Me</p>}
      <button onClick={() => setShow(prev => !prev)}>{show ? "Hide" : "Show"}</button>
    </div>
  )
}

export default App
