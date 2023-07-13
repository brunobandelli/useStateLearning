import React, { useState } from "react";
import Somador from "./Somador";

export default function DBnumber(){

    const Dez = 10
    const Vinte = 20
    const Trinta = 30

    const [number, setNumber]= useState(0)

    return(
        <>
        <br />
        <br />
        <p>Valor: {number}</p>
        <Somador number={number} setNumber={setNumber} somaD={Dez} somaV={Vinte} somaT={Trinta} />
        <br />
        <br />
        </>
    )

}