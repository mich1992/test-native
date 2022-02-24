import React from 'react'
import { Overlay } from 'react-native-elements/dist/overlay/Overlay'
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native-web'

export default function Loading({Isvisibe, text}) {
  return (
    <Overlay 
    isVisible={Isvisibe} 
    overlayStyle={style.over}
    windowsBackgroundColor ="rgba(0,0,0,.5)"
    overlayBackgroundColor = "transparent"
    >
        <View>
            <ActivityIndicator size="large" color="#00a680"/>
            {text && <Text style={style.text}>{text}</Text>}
        </View>
    </Overlay>
  )
}
const style = StyleSheet.create({
    over: {
      width: 200,
      height: 100,
      backgroundColor: "#fff",
      borderColor: "#00a680",
      borderWidth: 2,
      borderRadius: 10
    },
    view: {
      felx: 1,
      alignItems: "center",
      justifiContent: "center",
    },
    text: {
      textTransform: "uppercase",
      color:"#00a680",
      marginTop: 10
    }
})