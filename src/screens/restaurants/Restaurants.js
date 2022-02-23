import React from 'react'
import { View, Text, StyleSheet } from 'react-native-web'




export default function Restaurants() {
    return (
        <View styles={styles.container} >
            <Text>
                My first Button in React native  
            </Text>
        </View>
    )
}
const styles = StyleSheet.create ({
    container : {
        flex: 1,
        justifyContent: "center",
        alignItem : "center"
    }
})