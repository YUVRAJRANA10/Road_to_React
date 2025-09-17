import React from 'react';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

const ReactElement = React.createElement(
    'a',
    {href: 'https://www.youtube.com/watch?v=kAOuj6o7Kxs&list=PLu71SKxNbfoDqgPchmvIsL4hTnJIrtige&index=4', target: '_blank'},
    'click on element'
)

function Myapp(){
  return(
    <h1 >My name is Yuvraj!!!!</h1>
  );
}

createRoot(document.getElementById('root')).render(
 
    ReactElement
  
)
