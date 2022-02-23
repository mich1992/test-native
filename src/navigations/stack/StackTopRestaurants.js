import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'

import TopRestaurants from '../../screens/topRestaurants/TopRestaurants';


export default function StackTopRestaurants() {

    const Stack = createNativeStackNavigator()

    return (
        <Stack.Navigator>
            <Stack.Screen name='top' component={TopRestaurants} options={{ title: "Top" }} />
        </Stack.Navigator>
    )
}