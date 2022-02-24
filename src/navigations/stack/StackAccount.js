import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'

import Account from '../../screens/accounts/Account';
import Login from '../../screens/accounts/screenChilds/Login';


export default function StackAccount() {

    const Stack = createNativeStackNavigator()

    return (
        <Stack.Navigator>
            <Stack.Screen name='mi cuenta' component={Account} options={{ title: " Mi cuenta" }} />
            <Stack.Screen name='login' component={Login} options={{ title: "Iniciar Sesion" }} />
        </Stack.Navigator>
    )
}