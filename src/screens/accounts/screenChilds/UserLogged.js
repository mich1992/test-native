import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native-web'
import { Button } from 'react-native-elements';
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { useNavigation } from '@react-navigation/native';
import Loading from '../../../components/Loading';
import InfoUser from './InfoUser';

export default function UserLogged() {
    const auth = getAuth()
    const [userInfo, setUserInfo] = useState(null)
    const navigation = useNavigation()
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        const getUserAuth = async () => {
            await onAuthStateChanged(auth, (user) => {

                setUserInfo(user)
            })
        }
        getUserAuth()
    }, [])
    
    function signOutSesion() {
        signOut(auth)
            .then(() => {
                console.log("exitoso");
            }).catch(() => {
                console.log("fallo");
            })
        navigation.navigate("accounts")
    }
    return (
        <View style={style.viewUser}>
           {userInfo && <InfoUser userInfo={userInfo} />} 
            <Text> Accounnt  Options</Text>
            <Button
                title={"Cerrar Sesion"}
                onPress={() => { signOutSesion() }}
                buttonStyle={style.btnCloseSesion}
                titleStyle={style.btnTitle}
            />
            <Loading Isvisibe={isLoading} />
        </View>
    )
}
const style = StyleSheet.create({
    viewUser: {
        minHeight: "100%",
        backgrounColor: "#f2f2f2"
    },
    btnCloseSesion: {
        marginTop: 20,
        borderRadius: 0,
        backgroundColor: "#ffffff",
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderTopColor: "#e3e3e3",
        borderBottomColor: "#e3e3e3",
        paddingVertical: 10

    },
    btnTitle: {
        color: "#00a680"
    }

})