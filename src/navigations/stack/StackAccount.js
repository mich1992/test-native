import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import Account from '../../screens/accounts/Account';
import Login from '../../screens/accounts/screenChilds/Login';
import Register from '../../screens/accounts/screenChilds/Register';
import UserGuest from '../../screens/accounts/screenChilds/UserGuest';
import UserLogged from '../../screens/accounts/screenChilds/UserLogged';
export default function StackAccount() {

    const Stack = createNativeStackNavigator()

    return (
        <Stack.Navigator>
            <Stack.Screen name='accounts' component={Account} options={{ title: " Mi cuenta" }} />
            <Stack.Screen name='login' component={Login} options={{ title: "Iniciar Sesion" }} />
            <Stack.Screen name='register' component={Register} options={{ title: "Registrate" }} />
            <Stack.Screen name='userGuest' component={UserGuest} options={{ title: "Registrate" }} />
            <Stack.Screen name='userLogged' component={UserLogged} options={{ title: "Registrate" }} />
        </Stack.Navigator>
    )
}