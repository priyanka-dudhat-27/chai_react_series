/* eslint-disable no-const-assign */
/* eslint-disable no-undef */

import { useState } from 'react'
import './App.css'

function App() {
  let [counter,setCounter]=useState(5)

  const handleAdd=()=>{
    counter=counter+1
    if(counter<=20){
      setCounter(counter)
    }
  }

  const handleRemove=()=>{
    counter=counter-1
    if(counter>=0){
      setCounter(counter)
    }
  }
  return (
    <>
      <h2>Counter</h2>
      <h3>{counter}</h3>
      <button onClick={handleAdd}>Increment</button>
      <button onClick={handleRemove}>Decrement</button>
    </>
  )
}

export default App
