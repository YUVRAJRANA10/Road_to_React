import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function changer({color}){
return(
  <body style={{backgroundColor : {color}}}>
    
  </body>
);
}

function App() {
  const [fanSpeed, setFanSpeed] = useState(''); // Track current fan speed

  const changeFanSpeed = (speed) => {
    setFanSpeed(speed);
  };

  return (
    <>
     <h1 className='text-red-500 '>YUVRAJ  BG CHANGER</h1>
     <div className='w-96 bg-slate-600 rounded-lg'>
     <button onClick={() => {document.body.style.backgroundColor = 'red'}} className='bg-red-700 p-3  rounded-lg m-4'>RED</button>
     <button onClick={() => {document.body.style.backgroundColor = 'yellow'}} className='bg-yellow-700 p-3  rounded-lg m-4'>YELLOW</button>
     <button onClick={() => {document.body.style.backgroundColor = 'green'}} className='bg-green-700  p-3 rounded-lg m-4'>GREEN</button>
     <button onClick={() => {document.body.style.backgroundColor = 'orange'}} className='bg-orange-700 p-3  rounded-lg m-4'>ORANGE</button>
     <button onClick={() => {document.body.style.backgroundColor = 'blue'}} className='bg-blue-700 p-3  rounded-lg m-4 outline-none'>BLUE</button>
     <button onClick={() => {document.body.style.backgroundColor = 'pink'}} className='bg-pink-700  p-3 rounded-lg m-4'>PINK</button>

     </div>

     <div className='flex flex-wrap max-w-md justify-center items-center'>
      <img  
        className={`w-max h-max bg-black ${fanSpeed}`} 
        src="https://www.shutterstock.com/shutterstock/photos/1623920/display_1500/stock-photo-fan-1623920.jpg" 
        alt="" 
      />
      <div className='mt-12'>
        <h1>FAN CONTROL</h1>
        <p className='text-sm text-gray-600 mb-2'>Current Speed: {fanSpeed || 'Stopped'}</p>
      <button 
        className='p-2 rounded-lg  bg-blue-400 hover:bg-blue-600  text-white font-semibold mx-3' 
        onClick={() => changeFanSpeed('fast-animation')}
      >
        Fast
      </button>
      <button 
        className='p-2 rounded-lg  bg-blue-400 hover:bg-blue-600  text-white font-semibold mx-3' 
        onClick={() => changeFanSpeed('medium-animation')}
      >
        Medium
      </button>
      <button 
        className='p-2 rounded-lg  bg-blue-400 hover:bg-blue-600  text-white font-semibold mx-3' 
        onClick={() => changeFanSpeed('slow-animation')}
      >
        Slow
      </button>
      <button 
        className='p-2 rounded-lg  bg-red-400 hover:bg-red-600  text-white font-semibold mx-3' 
        onClick={() => changeFanSpeed('')}
      >
        Stop
      </button>
      </div>
     </div>
    </>
  )
}

export default App
