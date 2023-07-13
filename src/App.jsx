import { useState } from 'react'

import './App.css'
import Dados from './Dados'
import DBnumber from './DBnumber'

export default function App() {

  const Dez = 10
  const Vinte = 20
  const Trinta = 30

  const [num, setNum]=useState(0)                                // O estado inicial de num, será 10

  return (
   <>
    <p>Valor do state num: {num}</p>
    <button onClick={()=>setNum(num+10)}>Soma 10</button>         {/* ao clicar nesse botão, nós iremos alterar o "state", pois o "setNum" assumira o valor de Num +10 e passará para o "num", o valor atual */}
    <br />
    <br />
    <Dados num={num} setNum={setNum} somaDez={Dez} somaVinte={Vinte} somaTrinta={Trinta}/>
    <DBnumber/>
   </>
  )
}

