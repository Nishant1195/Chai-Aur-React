import { useState } from "react"
import Butt from "./Components/Butt"
function App() {
  const [color,setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}
    >
    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
        <button onClick={() => setColor("red")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "red"}} >Red</button>
        <Butt onClick={() => setColor("green")} color="Green" />
      </div>
    </div>
    </div>
  )
}

export default App
