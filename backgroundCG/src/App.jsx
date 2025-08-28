import React from 'react'
import { useState } from 'react'

const App = () => {
  const [color, setColor] = useState("olive")
  return (
    <div className='w-full h-screen duration-300' style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-xl bg-white px-2 py-1 rounded-2xl'>
          <button className='outline-none px-4 py-3 rounded-xl shadow-xl ' style={{backgroundColor:"red"}} onClick={() => setColor("red")}>
            Red
          </button>
          <button className='outline-none px-4 py-3 rounded-xl shadow-xl ' style={{backgroundColor:"pink"}} onClick={() => setColor("pink")}>
            Pink
          </button>
          <button className='outline-none px-4 py-3 rounded-xl shadow-xl ' style={{backgroundColor:"blue"}} onClick={() => setColor("blue")} >
            Blue
          </button>
          <button className='outline-none px-4 py-3 rounded-xl shadow-xl ' style={{backgroundColor:"green"}} onClick={() => setColor("green")} >
            Green
          </button>
          <button className='outline-none px-4 py-3 rounded-xl shadow-xl ' style={{backgroundColor:"#ffffff"}} onClick={() => setColor("#ffffff")} >
            White
          </button>
          <button className='outline-none px-4 py-3 rounded-xl shadow-xl ' style={{backgroundColor:"#000000"}} onClick={() => setColor("#000000")} >
            Black
          </button>
          <button className='outline-none px-4 py-3 rounded-xl shadow-xl ' style={{backgroundColor:"#8f8f8f"}} onClick={() => setColor("#8f8f8f")} >
            Gajar
          </button>
          <button className='outline-none px-4 py-3 rounded-xl shadow-xl ' style={{backgroundColor:"#d4ff00", color:"red"}} onClick={() => setColor("#d4ff00")} >
            Yollow
          </button>
        </div>
      </div>
    </div>
    
  )
}

export default App
