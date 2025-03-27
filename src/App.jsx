import { Suspense, useState } from 'react'
import './App.css'
import Counter from './Counter';
import BatsMan from './BatsMan';
import Users from './Users';

const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users")
.then(res=>res.json())

function App() {

  const handleClick=()=>alert("I'm Clicked!")

  const handleAdd = (num)=>{const newNum = num+5;alert(newNum)}

  return (
    <>
    <Suspense fallback ={<h2>🌀 Loading...</h2>} >
    <Users fetchUsers = {fetchUsers}></Users>
    </Suspense>
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
