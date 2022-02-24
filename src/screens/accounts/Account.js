import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native-web'
import { onAuthStateChanged , getAuth} from "firebase/auth"
import UserGuest from './screenChilds/UserGuest'
import UserLogged from './screenChilds/UserLogged'

export default function Account() {
    const [login, setLogin] = useState(null)
    useEffect(() => {
        onAuthStateChanged((user) => {
            console.log(user)
            !user ? setLogin(false) : setLogin(true)
        })
    }, [])

    return (
        <View>
            <Text>
                Hello wordl Account
            </Text>
        </View>
    )
}