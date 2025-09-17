import { useState } from 'react'

import './App.css'
import Card from './components/Cards';

function App() {

  let names = ["yuvi","kunj","pandey","parth","batman" ]
  
  return(
    <>
      {names.map((name, index) => (
        <Card key={index} username={name} />
      ))}
    </>
  );
}

export default App
