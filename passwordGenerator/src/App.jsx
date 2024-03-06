import { useCallback, useEffect, useRef, useState } from "react"


function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  // useref 
  const passwordRef = useRef()
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*<>";

    for (let i = 1; i <= length; i++) {
      let num = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(num);
    }
    setPassword(pass)

  }, [length, numberAllowed, charAllowed, setPassword])
  // function must called by various dependencies so we use hooks func callback which can 
  // consider all the dependencies and run function multiple times in an optimistic

  const copypassword = useCallback(()=>{
    passwordRef.current?.select()     //copied content get selected which increase user interativity
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(() => {
    passwordGenerator()
  }, [length, charAllowed, numberAllowed, passwordGenerator])
  // it runs the function multiple times from start
  return (
    <>

      <div className='w-full w-max-100 bg-gray-500 px-3 py-2 justify-center rounded-md'>
        <h2 className="items-center mb-3">PasswordGenerator</h2>
        <div className="overflow-hidden flex w-full bg-white rounded-lg shadow-md  px-3 py-2">
          <input type="text" placeholder="password" value={password}
           className="bg-white text-black outline-none w-full " ref={passwordRef} />
          <button className="bg-blue-700 " onClick={copypassword}>copy</button>
        </div>
        <div className="flex text-sm gap-x-2 mt-2 ">
          <div className="items-center gap-x-2">
            <input type="range" min={6} max={100} value={length} className=" cursor-pointer" onChange={(e) => setLength(e.target.value)} />
            <label>length: {length}</label>
          </div>
          <div className="items-center gap-x-2">
            <input type="checkbox" defaultValue={numberAllowed}
              onChange={() => {
                setnumberAllowed((prev) => !prev);
              }} />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="items-center gap-x-2">
            <input type="checkbox" defaultValue={charAllowed}
              onChange={() => {
                setcharAllowed((prev) => !prev);
              }} />
            <label htmlFor="characterInput">characters</label>
          </div>
        </div>


      </div>

    </>
  )
}

export default App
