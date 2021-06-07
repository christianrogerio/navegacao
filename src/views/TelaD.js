import React from 'react'
import { Button, View } from 'react-native'
import TextoCentral from '../components/TextoCentral'

export default props => {
    return(
        <View style={{flex:1}}>
            <Button title='Abrir' style={{ }} onPress={()=>{
                props.navigation.toggleDrawer()
            }} />
            <TextoCentral corFundo="#5902FF" TextoCentral='yellow'>
                Tela D
            </TextoCentral>            
        </View>
        )
}