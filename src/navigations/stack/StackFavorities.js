import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'

import Favorities from '../../screens/favorities/Favorities';


export default function StackFavorities() {

    const Stack = createNativeStackNavigator()

    return (
        <Stack.Navigator>
            <Stack.Screen name='favoritos' component={Favorities} options={{ title: "Favoritos" }} />
        </Stack.Navigator>
    )
}