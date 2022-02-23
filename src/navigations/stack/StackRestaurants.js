import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'

import Restaurants from '../../screens/restaurants/Restaurants';


export default function StackRestaurants() {

    const Stack = createNativeStackNavigator()

    return (
        <Stack.Navigator>
            <Stack.Screen name='restaurantes' component={Restaurants} options={{ title: "Restaurantes" }} />
        </Stack.Navigator>
    )
}