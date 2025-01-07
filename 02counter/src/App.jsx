import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [count, setCount] = useState(0);

  const addValue = () => {
    setCount(count+1);
  }

  const minusValue = () => {
    if(count > 0){
      setCount(count-1);
    }else{
      console.log("Counter value cannot be negative!!")
    }
  }
  return (
    <>
      <h1>Nishant | Counter</h1>
      <h2>Counter : {count}</h2>
      <button onClick={addValue}>Add</button>
      <br />
      <button onClick={minusValue}>Minus</button>
    </>
  )
}

export default App
