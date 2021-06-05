import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import TelaA from '../views/TelaA'
import TelaB from '../views/TelaB'
import TelaC from '../views/TelaC'
import { View } from 'react-native'
import PassoStack from '../components/PassoStack'


const Stack = createStackNavigator()

export default props => (

    <Stack.Navigator initialRouteName="TelaA" screenOptions={{headerShown:true}} > 
        <Stack.Screen name="TelaA" options={{title:'Informações Iniciais'}}>
            {
                props => (
                    <View style={{flex:1}}>
                        <PassoStack {...props} avancar='TelaB' >
                            <TelaA />
                        </PassoStack>
                    </View>
                )
            }
        </Stack.Screen>
        <Stack.Screen name="TelaB" options={{title:'Informações Específicas'}} >
            {
                props => (
                    <View style={{flex:1}}>
                        <PassoStack {...props} avancar='TelaC' voltar >
                            <TelaB />
                        </PassoStack>
                    </View>
                )
            }
        </Stack.Screen>
        <Stack.Screen name="TelaC" options={{title:'Informações Finais'}} >
            {
                props => (
                    <View style={{flex:1}}>
                        <PassoStack {...props}  voltar avancar='TelaC' >
                            <TelaC {...props} />
                        </PassoStack>
                    </View>
                )
            }
        </Stack.Screen>
    </Stack.Navigator>

    /*
    <Stack.Navigator initialRouteName="TelaA" screenOptions={{headerShown:true}} > 
        <Stack.Screen name="TelaA" component={TelaA} options={{title:'Informações Iniciais'}} />
        <Stack.Screen name="TelaB" component={TelaB} />
        <Stack.Screen name="TelaC" component={TelaC} />
    </Stack.Navigator>
    */
)