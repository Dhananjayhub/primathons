import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myobj ={
    username: "dk",
    age: 23
  }

  return (
    <>
      <h1 >Tailwind test</h1>
      <Card username="chai" someobj={myobj}  btntext='visit'/>
      <Card username="code" someobj={myobj}  btntext='link'/>
    </>
  )
}

export default App
