import { useState } from 'react'
import './App.css'

function App() {
  const [Counter, setCounter] = useState(0)

  const addvalue= ()=>{
    if(Counter<20){
      setCounter(Counter+1);
      console.log('clicked');
    }
  }
  const removevalue=()=>{
    if(Counter>1){
      setCounter(Counter-1)
      console.log('clicked')
    }
  }

  return (
    <>
      <div>
        <h1>Mini Project</h1>
        <h2>Counter value {Counter}</h2>
        <button
        onClick={addvalue}
        >addCount{Counter}</button>
        <br></br><br></br>
        <button
        onClick={removevalue}
        >removeCount{Counter}</button>
      </div>
      
    </>
  )
}

export default App
