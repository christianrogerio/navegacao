import React from 'react'
import {Text, View} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import TelaA from '../views/TelaA'
import TelaB from '../views/TelaB'
import TelaC from '../views/TelaC'

const Tab = createBottomTabNavigator()

export default props => {
    return (
        <Tab.Navigator tabBarOptions={{inactiveTintColor:'gray', activeTintColor:'blue', labelStyle:{ fontSize:20, backgroundColor:'yellow' }  }}
            initialRouteName='TelaC'
        >
            <Tab.Screen name='TelaA' component={TelaA}  />
            <Tab.Screen name='TelaB' component={TelaB}  />
            <Tab.Screen name='TelaC' component={TelaC}  />
        </Tab.Navigator>
    )
}