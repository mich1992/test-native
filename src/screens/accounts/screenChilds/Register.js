import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native-web'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import RegisterForm from '../../../components/form/RegisterForm'


export default function Register() {

    

    return (
        <KeyboardAwareScrollView>
            <Image
                source={require("../../../../assets/react.png")}
                resizeMode ="contain"
                style={style.logo}
            />
            <View style={style.form}>
                <RegisterForm/>
            
            </View>
        </KeyboardAwareScrollView>
    )
}
const style = StyleSheet.create({
    logo: {
        width: "100%",
        height: 140,
        marginTop: 20,

    },
    form:{
        marginHorizontal:40,
        marginTop:20
    }
})
