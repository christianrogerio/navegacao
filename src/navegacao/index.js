import React from 'react'
import { SafeAreaView , Text} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

import Tabs from './Tab'
import DrawMenu from './DrawMenu'

export default props => (
    <SafeAreaView style={{flex: 1}}>
        <NavigationContainer>
            <Tabs /> 
            { /* <DrawMenu /> */ }
        </NavigationContainer>
    </SafeAreaView>
)


/**
 import Stack from './Stack'

export default props => (
    <SafeAreaView style={{flex: 1}}>
        <NavigationContainer>
            <Stack />
        </NavigationContainer>
    </SafeAreaView>
) 
 */