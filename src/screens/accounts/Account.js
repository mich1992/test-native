import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native-web'
import * as firebase from "firebase"
import UserGuest from './screenChilds/UserGuest'
import UserLogged from './screenChilds/UserLogged'

export default function Account() {
    const [login, setLogin] = useState(null)
    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
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