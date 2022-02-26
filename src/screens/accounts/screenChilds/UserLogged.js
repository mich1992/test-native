import React from 'react'
import { View, Text, Button } from 'react-native-web'
import {  getAuth,  signOut  } from "firebase/auth";
import { useNavigation } from '@react-navigation/native';


export default function UserLogged() {
    const user = getAuth()
    const navigation = useNavigation()
    function signOutSesion(){
        signOut(user)
        .then(()=>{
            console.log("exitoso");
        }).catch(()=>{
            console.log("fallo");
        })
        navigation.navigate("accounts")
    }
    return (
        <View>
            <Text>
                <Button
                title={"Cerrar Sesion"}
                onPress ={()=>{signOutSesion()}}
                />
            </Text>
        </View>
    )
}