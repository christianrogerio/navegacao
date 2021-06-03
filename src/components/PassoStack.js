import React from 'react'
import {View, Button} from 'react-native'

export default props => {
    return (
        <View style={{flex:1}}>
            <View>
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