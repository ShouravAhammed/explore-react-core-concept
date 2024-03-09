import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Team from './Team'
import Users from './Users'
import Friends from './Friends'

function App() {

  const handleClick = () =>{
    alert ('Click')
  }

  const addToFive = (num) =>{
    alert(num * 5);
  }


  return (
    <>
      <h2>React Core Concept</h2>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>


      <button onClick={handleClick}>Click Me</button>
      <button onClick={() => {alert('Click2')}} >Button Click</button>
      <button onClick={ () => addToFive(5)}>Button Click</button>
    </>
  )
}

export default App
