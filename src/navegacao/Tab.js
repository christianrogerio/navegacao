import React from 'react'
import {Text, View} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import TelaA from '../views/TelaA'
import TelaB from '../views/TelaB'
import TelaC from '../views/TelaC'

import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator()

export default props => {
    return (
        <Tab.Navigator 
  
        
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              switch(route.name){
                case 'TelaA':
                  iconName = focused?'ios-information-circle':'ios-information-circle-outline';
                  break;
                case 'TelaB':
                  iconName = focused?'ios-information-circle':'ios-information-circle-outline';
                  break;
                case 'TelaC':
                  iconName = focused?'ios-information-circle':'ios-information-circle-outline';
                  break;                                      
              }
              /*
              if (route.name === 'TelaA') {
                iconName = focused
                  ? 'ios-information-circle'
                  : 'ios-information-circle-outline';
              } else if (route.name === 'Settings') {
                iconName = focused ? 'ios-list-box' : 'ios-list';
              }
              */
  
              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
  
        
        tabBarOptions={{inactiveTintColor:'gray', activeTintColor:'blue', labelStyle:{ fontSize:20, backgroundColor:'yellow' }  }}
            initialRouteName='TelaC'
        >
            <Tab.Screen name='TelaA' component={TelaA}  />
            <Tab.Screen name='TelaB' component={TelaB}  />
            <Tab.Screen name='TelaC' component={TelaC}  />
        </Tab.Navigator>
    )
}