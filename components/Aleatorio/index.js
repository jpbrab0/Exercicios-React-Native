import React from 'react'
import { Text, View } from 'react-native'
// Desafio #1 
/*
Fazer um componente que sorteia um número entre as props q 
*/
export default function Aleatorio(props){
    let delta = props.max - props.min + 1
    var random = Math.floor(Math.random(props.min) * delta) + props.min
    if(props.min > props.max){
        return <Text>ERRO: O número minimo é maior que o número maximo</Text>
    } else {
        return <Text>O número sorteado entre {props.min} e {props.max} foi {random}!</Text>
    }
}