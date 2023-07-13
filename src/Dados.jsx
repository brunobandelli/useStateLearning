import React from "react";

export default function Dados(props){
    return(
        <>
            <p>Teste: {props.num}</p>
            <button onClick={()=>props.setNum(props.num+props.somaTrinta)} >Soma {props.somaTrinta}</button>      
            <button onClick={()=>props.setNum(props.num+props.somaVinte)}>Soma {props.somaVinte}</button>     
            <button onClick={()=>props.setNum(props.num+props.somaDez)}>Soma {props.somaDez}</button>   
            <button onClick={()=>props.setNum(0)}>Limpa</button>
        </>
    )
}