import { useState } from 'react'


function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
      <div className='w-screen h-screen duration-200 '
      style={{backgroundColor:color}}>

          <div className='flex flex-wrap justify-center bottom-12 fixed '>
            
            <div className='flex flex-wrap justify-center bg-white gap-3 rounded-md py-2 '>
                <button className='outline-none '
                style={{backgroundColor:"red"}}
                onClick={()=>setColor('red')}
                >Red</button>

                <button className='outline-none '
                style={{backgroundColor:"black"}}
                onClick={()=>setColor('black')}
                >black</button>

                <button className='outline-none '
                style={{backgroundColor:"pink"}}
                onClick={()=>setColor('pink')}
                >pink</button>
                
                <button className='outline-none '
                style={{backgroundColor:"blue"}}
                onClick={()=>setColor('blue')}
                >blue</button>

                <button className='outline-none '
                style={{backgroundColor:"yellow"}}
                onClick={()=>setColor('yellow')}
                >yellow</button>

                <button className='outline-none '
                style={{backgroundColor:"orange"}}
                onClick={()=>setColor('orange')}
                >orange</button>

                <button className='outline-none '
                style={{backgroundColor:"white"}}
                onClick={()=>setColor('white')}
                >white</button>

                <button className='outline-none '
                style={{backgroundColor:"green"}}
                onClick={()=>setColor('green')}
                >green</button>
            </div>
           
          </div>
      </div>
    </>
  )
}

export default App
