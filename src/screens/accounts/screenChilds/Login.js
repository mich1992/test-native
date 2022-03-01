import React from 'react'
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native'
import { Divider } from 'react-native-elements/dist/divider/Divider'
import { useNavigation } from '@react-navigation/native'
import LoginForm from '../../../components/form/LoginForm'

export default function Login() {
    const navigation = useNavigation()
    const CreateAccount = () => {
        return (
            <Text style={style.textRegister}>Aun no tienes cuenta?
                <Text style={style.btnRegister} onPress={() => { navigation.navigate('register') }}>
                    Registrate
                </Text>
            </Text>
        )
    }

    return (
        <ScrollView>
            <View>
                <Image
                    resizeMode='contain'
                    style={style.logo}
                    source={require("../../../../assets/react.png")}
                />
            </View>
            <View style={style.viewContiner}>
                <LoginForm />
                <CreateAccount />
                <Divider
                    style={style.divider}
                />
                <View>
                    <Text>Social Login</Text>
                </View>
            </View>
        </ScrollView>
    )
}
const style = StyleSheet.create({
    logo: {
        width: "100%",
        height: 150,
        marginTop: 20
    },
    viewContiner: {
        marginRight: 40,
        marginLeft: 40,
        marginTop: 20
    },
    textRegister: {
        marginTop: 15,
        marginLeft: 10,
        marginRight: 10
    },
    btnRegister: {
        color: "#00a680",
        fontWeight: "bold"
    },
    divider: {
        margin: 40,
        backgroundColor: "#00a680"
    }
})
