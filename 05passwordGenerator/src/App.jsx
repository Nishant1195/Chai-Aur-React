import { useCallback, useEffect, useRef, useState } from 'react'


function App() {
  const [length, setLength] = useState("8");
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789"
    if (characterAllowed) str += "!@#$%^&*_-=+~`"

    for (let i = 0; i <=length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);  
    }

    setPassword(pass)
  }, [length, numberAllowed, characterAllowed, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, characterAllowed, numberAllowed, setPassword]);

  const copytoClip = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password)
  }, [password])

  return (
     <>
     <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className="text-white text-center my-3">Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input type="text" className='outline-none w-full py-1 px-3' value={password} placeholder='Password' ref={passwordRef} readOnly/>
        <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0" onClick={copytoClip} >Copy</button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input type="range" min={1} max={20} value={length} onChange={(e) => setLength(e.target.value)} />
          <label>Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input type="checkbox" defaultChecked={numberAllowed} id="numberAllowed" onChange={() => {setNumberAllowed((prev) => !prev)}}/>
          <label htmlFor="numberAllowed">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input type="checkbox" defaultChecked={characterAllowed} id="characterAllowed" onChange={() => {setCharacterAllowed((prev) => !prev)}}/>
          <label htmlFor="characterAllowed">Characters</label>
        </div>
      </div>
      
     </div>
     </>
    )
}

export default App
