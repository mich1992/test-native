import React from 'react'
import { View, Text, ScrollView, Image } from 'react-native'
export default function Login() {
    return (
        <ScrollView>
            <View>
                <Text>
                    Login form
                </Text>
            </View>
            <View>
                <Image
                source={require("../../../../assets/react.png")}
                />
            </View>
        </ScrollView>
    )
}
