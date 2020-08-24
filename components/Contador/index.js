import React, { useState } from 'react'
import { View, Text,Button } from 'react-native'
import Estilo from '../../styles'
export default function Contador(){
    const [ numero, setNumero ] = useState(0)

    const incrementar = () => setNumero(numero + 1)
    const decrementar = () => setNumero(numero - 1)
    return(
        <>
            <Text>{numero}</Text>
            <View style={Estilo.grid}>
                <Button title="+" onPress={incrementar}/>
                <Button title="-" style={Estilo.buttonRed} onPress={decrementar}/>
            </View>
        </>
    )
}