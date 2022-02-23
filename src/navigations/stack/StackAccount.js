import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'

import Account from '../../screens/accounts/Account';


export default function StackAccount() {

    const Stack = createNativeStackNavigator()

    return (
        <Stack.Navigator>
            <Stack.Screen name='mi cuenta' component={Account} options={{ title: " Mi cuenta" }} />
        </Stack.Navigator>
    )
}