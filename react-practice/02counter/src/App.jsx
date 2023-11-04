import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [Counter, setCounter] = useState(15)
  // let Counter =15
  const addValue =() => {
    console.log("clicked", Math.random())
    // Counter= Counter+1
    setCounter(Counter+1)

  }
  const remove =()=>{
    setCounter(Counter-1)
  }

  return (
    <>
      <h1>hello world</h1>
      <h2>Counter value: {Counter}</h2>

      <button  onClick={addValue} >Add value</button>
      <br></br>
      <button onClick={remove}>remove Value</button>

    </>
  )
}

export default App
