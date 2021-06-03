import React from 'react'
import {View, Button} from 'react-native'

export default props => {
    return (
        <View style={{flex:1}}>
            <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                {
                    props.voltar ?
                    <Button onPress={ ()=>{props.navigation.goBack()} } title='Voltar'  ></Button>
                    : false
                }                
                {
                    props.avancar ?
                    <Button onPress={ ()=>{props.navigation.navigate(props.avancar)} } title='Avançar'  ></Button>
                    : false
                }
            </View>
            <View style={{flex:1}} >
                {props.children}
            </View>            
        </View>
    )
}