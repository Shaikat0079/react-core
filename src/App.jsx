import { useState } from 'react'
import './App.css'
import Counter from './Counter';
import BatsMan from './BatsMan';

function App() {

  const handleClick=()=>alert("I'm Clicked!")

  const handleAdd = (num)=>{const newNum = num+5;alert(newNum)}

  return (
    <>
    <BatsMan></BatsMan>
      {/* <h3>Vite + React</h3>
      <button onClick={handleClick}>Click Me</button>
      <button style={{margin:'10px'}} onClick={()=>{alert("Hello from the Button!")}}>Anonymous</button>
      <button onClick={()=>handleAdd(55)}>Add Number</button> */}

      <Counter></Counter>
    </>
  )
}

export default App
