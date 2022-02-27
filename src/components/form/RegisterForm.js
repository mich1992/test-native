import React, { useState } from 'react'
import { Input, Button, Icon } from 'react-native-elements'
import { View, StyleSheet, Text } from "react-native-web"
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import formSchema from '../../helpers/validators';
import { getAuth, createUserWithEmailAndPassword, } from "firebase/auth";
import { useNavigation } from '@react-navigation/native'


export default function RegisterForm() {
  const auth = getAuth();
  const navigation = useNavigation()
  const [toggle, setToggle] = useState(false)
  const [toggleRepeat, setToggleRepeat] = useState(false)
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      email: "",
      password: "",
      repeatPassword:""
    },
    resolver: yupResolver(formSchema)
  });
  const onSubmit = async data => {
    try {
      await createUserWithEmailAndPassword(auth, data.email, data.password)
      navigation.navigate('userLogged')
    } catch (error) {
      console.log("Esta usuario ya esta en unso");

    }
  };

  return (
    <View style={style.container}>
      <View>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder='Correo Electronico'
              containerStyle={style.input}
              rightIcon={
                < Icon
                  type='material-community'
                  name='at'
                  iconStyle={style.icon}
                />
              }
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="email"
        />
        <Text>{errors.email?.message}</Text>
      </View>
      <View>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder='Contraseña'
              containerStyle={style.input}
              password={true}
              secureTextEntry={toggle ? false : true}
              rightIcon={
                <Icon
                  type='material-community'
                  name={toggle ? 'eye-outline' : 'eye-off-outline'}
                  iconStyle={style.icon}
                  onPress={() => { setToggle(!toggle) }}
                />
              }
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="password"
        />
        <Text>{errors.password?.message}</Text>
      </View>
      <View>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder='Repetir Contraseña'
              containerStyle={style.input}
              password={true}
              secureTextEntry={toggleRepeat ? false : true}
              rightIcon={
                <Icon
                  type='material-community'
                  name={toggleRepeat ? 'eye-outline' : 'eye-off-outline'}
                  iconStyle={style.icon}
                  onPress={() => { setToggleRepeat(!toggleRepeat) }}
                />
              }
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="repeatPassword"
        />
        <Text>{errors.repeatPassword?.message}</Text>
      </View>
      <Button
        title={"Registrarse"}
        containerStyle={style.btn}
        buttonStyle={style.btnStyle}
        onPress={handleSubmit(onSubmit)}
      />
    </View>
  )
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  input: {
    width: "100%",
    marginTop: "2rem"
  },
  btn: {
    marginTop: 20,

    width: "95%"
  },
  btnStyle: {
    backgroundColor: "#00a680",
  },
  icon: {
    color: "#c1c1c1",

  }

})