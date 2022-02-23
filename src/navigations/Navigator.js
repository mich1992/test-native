
import React from 'react'
import StackFavorities from  './stack/StackFavorities';
import StackSearch from  './stack/StackSearch';
import StackTopRestaurants from  './stack/StackTopRestaurants';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements'
import StackAccount from './stack/StackAccount';
import StackRestaurants from './stack/StackRestaurants';




const nameIcons = {
    restaurants: "food-fork-drink",
    account: "account",
    favorities: "heart-outline",
    search: "magnify",
    topRestaurantes: "star-outline"
}

export default function Router() {
    const Tab = createBottomTabNavigator()

    function getNameIcon(name) {
        return nameIcons[name]
    }
    
    function screenOptions(route, color) {
        let iconName;
    iconName = getNameIcon(route.name)
        return <Icon type='material-community' name={iconName} color={color} size={22} />
    }

    return (
        <NavigationContainer >
            <Tab.Navigator
                initialRouteName="Resturantes"
                screenOptions={({ route }) => ({
                    tabBarActiveTintColor: "#00a680",
                    tabBarInactiveTintColor: "gray",
                    tabBarIcon: ({ color }) => screenOptions(route, color)
                })}
            >
                    <Tab.Screen name='restaurants' component={StackRestaurants} options={{ title: "Restaurantes", headerShown:false }} />
                    <Tab.Screen name='favorities' component={StackFavorities} options={{ title: "Favoritos", headerShown:false }} />
                    <Tab.Screen name='search' component={StackSearch} options={{ title: "Buscar", headerShown:false }} />
                    <Tab.Screen name='topRestaurantes' component={StackTopRestaurants} options={{ title: "Top", headerShown:false }} />
                    <Tab.Screen name='account' component={StackAccount} options={{ title: " Mi cuenta", headerShown:false }} />
            </Tab.Navigator>
        </NavigationContainer>

    )
}