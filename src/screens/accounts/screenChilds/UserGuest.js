import React from 'react'
import { StyleSheet, ScrollView, View, Text, Image } from 'react-native-web'
import { Button } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';


export default function UserGuest() {
    const navigation = useNavigation()  
    
    
    return (
        <ScrollView centerContent={true} style={style.viewBody}>
            <View style={style.container}>
                <Image
                    style={style.img}
                    source={require("../../../../assets/user-guest.jpg")}
                    resizeMode="contain"
                />
                <Text style={style.title}>Consulta tu perfil de Usuario</Text>
                <Text style={style.description}>
                    the 1960s with the release of Letraset sheets containing
                    Lorem Ipsum passages, and more recently with desktop publishing 
                    software like Aldus PageMaker.
                </Text>
                <View style={style.btnView}>
                    <Button
                    title= "Ver tu Perfil"
                    onPress={()=>{navigation.navigate('login')}}
                    buttonStyle={style.btn}
                    />
                </View>
            </View>
        </ScrollView>
    )
}
const style = StyleSheet.create({
    container:{
        alignItems: "center"
    },
    viewBody: {
        marginLeft: 30,
        marginRight: 30
    },
    img: {
        height: 300,
        width: "100%",
        marginBottom: 40,
    },
    title: {
        textAlign: "center",
        fontSize: 19,
        fontWeight: "bold"
    },
    description:{
        textAling:"center",
        marginBottom: 20    
    },
    btn:{
        backgroundColor:"#00a680",
        
    },
    btnView:{
        flex: 1,
        alignItems: "center",
        width:"70%"
    }
})