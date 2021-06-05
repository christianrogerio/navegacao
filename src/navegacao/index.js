import React from 'react'
import { SafeAreaView , Text} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

import Tabs from './Tab'

export default props => (
    <SafeAreaView style={{flex: 1}}>
        <NavigationContainer>
            <Tabs />
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