import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'

import Search from '../../screens/search/Search';


export default function StackSearch() {

    const Stack = createNativeStackNavigator()

    return (
        <Stack.Navigator>
            <Stack.Screen name='buscar' component={Search} options={{ title: "Buscar" }} />
        </Stack.Navigator>
    )
}