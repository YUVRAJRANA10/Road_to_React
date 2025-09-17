import React from 'react'
import ReactDOM from 'react-dom'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
   const [counter , setcounter] = useState(14);
   const decrease = ()=>{
    if(counter!=0){
    setcounter(counter -1);}
   }
  return (
    <>
      <h2>Yuvi's React and Chai counter</h2>
      <h2>Counter value : {counter}</h2>

      <button onClick={()=>{
        setcounter(counter+1)
        console.log(counter);

      }}>Add value</button> 

      <button onClick={decrease}>Sub value</button> 

      <footer>
        <div>
          <button>the val of counter in footerr : {counter}</button>
        </div>
      </footer>
    </>
  )
}

export default App
