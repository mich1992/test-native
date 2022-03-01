import React from 'react'
import { View, StyleSheet, Text } from 'react-native-web'
import { Avatar } from 'react-native-elements'
export default function InfoUser({userInfo}) {
  
  return (
    <View style={style.viewUserInfo}>
      <Avatar
      rounded
      size='large'
      containerStyle = {style.avatar}
      source="https://picsum.photos/100"
      />
      <Text style ={style.name}>ABC dario
       <br/>
       <Text>{userInfo.email}</Text></Text>
      
    </View>
  )
}
const style =StyleSheet.create({
  avatar:{
    marginRight: 20
  },
  viewUserInfo:{
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    backgrounColor: "green",
    paddingTop: 30,
    paddingButton: 30,
  },
  name:{
    fontWeight: "bold",
    paddingButton: 5
  }
})
