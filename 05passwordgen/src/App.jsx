import { useCallback, useState,useEffect,useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(10);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null)
  const generatePassword=useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str+="1234567890"
   
    if (charAllowed) str += "!@#$%^&*()_+"

    for (let i = 0 ;i < length ; i++){
      const char = Math.floor(Math.random()*str.length + 1)
      pass += str.charAt(char)
    }
setPassword(pass)
  },[length,numberAllowed,charAllowed])
   useEffect(()=>{
generatePassword()
   },[length,numberAllowed,charAllowed])

   const copyPasswordToClipboard=()=>{
    window.navigator.clipboard.writeText(password)
    passwordRef.current?.select()
   }
  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 bg-gray-800 text-orange-500">
      <h1 className="text-white text-center my-3">Password Generator</h1>
      <div className="flex shadow rounded-l-2xl overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="password"
          readOnly
          ref={passwordRef}
        />
        <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
        onClick={copyPasswordToClipboard}>
          copy
        </button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={6}
            max={10}
            value={length}
            className="cursor-pointer"
            onChange={(e) => setLength(e.target.value)}
            name=""
            id=""
          />
          <label htmlFor="length">Length:{length}</label>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
              name=""
              id=""
              className=""
            />
            <label htmlFor="number">Numbers</label>
          </div>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input type="checkbox" 
            defaultChecked={charAllowed}
            onChange={()=>{
              setCharAllowed((prev)=>!prev)
            }}/>
            <label htmlFor="charInput">Character</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
