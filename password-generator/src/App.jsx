import { useState, useCallback,useEffect,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {
  const [length, setlength] = useState(22)
  const [allownum, setAllownum] = useState(false)
  const [allowchar, setAllowchar] = useState(false)
  const [password,setpass] = useState("")
 const passwordRef = useRef(null)
const passw = useCallback(()=>{
 let pass = ""
 let str = "ytvfakenfqkvbqorhWERTYDFGHvqehASDFGHJKLXCVBNOIUYTREW"
 if(allownum) str+="1234567890"
 if(allowchar) str+="+-*+_=&*(%$#@!"

 for (let index = 0; index < length; index++) {
   let randomIndex = Math.floor(Math.random() * str.length);
   pass += str.charAt(randomIndex)
 }

 setpass(pass)
},[length,allownum,allowchar,setpass])

const copypass = useCallback(()=>{
  passwordRef.current?.select();
  passwordRef.current?.setSelectionRange(0,15);
  window.navigator.clipboard.writeText(password)
},[password])

useEffect(()=> {
  passw()
},[length,allowchar,allownum,passw]) 


  return (
    <div className='h-screen bg-slate-100 w-full m-0 p-0 overflow-x-hidden'>
       <div className='max-w-3xl text-lg mx-auto flex shadow-lg rounded-lg bg-slate-500 flex-wrap justify-center  mt-72 p-8 overflow-x-hidden'>
        <input  value={password} placeholder='password' className='bg-white rounded-lg mr-5 h-6 w-max  ' readOnly type="text" id='texty' ref={passwordRef} />
        <label  htmlFor="text" className='font-extrabold'>PASSOWORD</label>
        <button className='bg-blue-400 hover:bg-blue-900 hover:shadow-lg hover:translate-y-1 transition-transform outline-none rounded-lg p-2 mt-0 mb-0 w-16 h-6 justify-center items-center m-4 flex text-white' onClick={copypass}>  Copy</button>
        
        
        <div className='text-sm flex items-center  start-0'>
            <input type="range" min={6} max={100} value={length} id='length' className='mr-4 cursor-pointer ml-0 ' onChange={(e) => {setlength(e.target.value)}} />
            <label htmlFor="length" >{length}</label>
        </div>
        <div className='text-sm flex start-0'>
            <input type="checkbox" id='num' checked={allownum} className=' cursor-pointer ml-6 mr-1 ' onChange={() => {setAllownum((prev)=> !prev )}} />
            <label htmlFor="num" >number</label>
        </div>

        <div className='text-sm flex start-0'>
            <input type="checkbox" id='char' checked={allowchar} className=' cursor-pointer ml-6 mr-1 ' onChange={() => {setAllowchar((prev)=> !prev )}} />
            <label htmlFor="char" >Characters</label>
        </div>
        
       </div>
       
    </div>
  )
}

export default App
