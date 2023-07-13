import React from "react";

export default function Somador(props){

    return(
        <>
        <button onClick={()=>props.setNumber(props.number+props.somaD)}>SOMA {props.somaD}</button>
        <button onClick={()=>props.setNumber(props.number+props.somaV)}>SOMA {props.somaV}</button>
        <button onClick={()=>props.setNumber(props.number+props.somaT)}>SOMA {props.somaT}</button>
        <button onClick={()=>props.setNumber(0)}>LIMPA</button>
        
        </>
    )
}