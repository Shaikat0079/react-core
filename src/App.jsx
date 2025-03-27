import { Suspense, useState } from 'react'
import './App.css'
import Counter from './Counter';
import BatsMan from './BatsMan';
import Users from './Users';
import Friends from './friends';

const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users")
.then(res=>res.json())

const fetchFriends =async ()=>{
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
}

function App() {

  const friendsPromise = fetchFriends();

  const handleClick=()=>alert("I'm Clicked!")

  const handleAdd = (num)=>{const newNum = num+5;alert(newNum)}

  return (
    <>
    <Suspense fallback ={<h2>🌀 Loading...</h2>} >
    <Users fetchUsers = {fetchUsers}></Users>
    </Suspense>

    <Suspense fallback={<h2>🌀 Loading...</h2>}>
    <Friends friendsPromise={friendsPromise}></Friends>
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
