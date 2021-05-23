import React from 'react'
import {View,Text, StyleSheet} from 'react-native'

export default props => (
    <View style={{flex:1, justifyContent:"center",alignItems:"center",backgroundColor: props.corFundo}}>
        <Text style={{fontSize:50,color:props.corTexto}} >{props.children}</Text>
    </View>
)

const styles = StyleSheet.create({
    container:{        
        flex:1, justifyContent:"center",alignItems:"center",
    },
    textoCentral:{
        fontSize: 50,
    }
})