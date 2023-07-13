import { useState } from 'react'
import Numero from './Numero'

import './App.css'

export default function AppEx2() {

  const [num, setNum]=useState(10)                                // O estado inicial de num, será 10

  return (
   <>
    <p>Valor do state num em AppEx2: {num}</p>
    <Numero num={num} setNum={setNum}/>
   </>
  )
}

