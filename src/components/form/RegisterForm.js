import React, { useState } from 'react'
import { Input, Button, Icon } from 'react-native-elements'
import { View, StyleSheet, Text } from "react-native-web"
import { useForm, Controller } from "react-hook-form";

export default function RegisterForm() {
  
  const [toggle, setToggle] = useState(false)
  const [toggleRepeat, setToggleRepeat] = useState(false)
  const onSubmit = data => console.log(data);

  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      email: '',
      password: '',
      repeatPassword: ""
    }
  });
  console.log(errors.password);
  return (
    <View style={style.container}>
      <View>
        <Controller
          control={control}
          rules={{
            required: true,
            minLength: 10
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder='Correo Electronico'
              containerStyle={style.input}
              email={true}
              rightIcon={
                <Icon
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
        {errors.email && <Text>This is required.</Text>}
      </View>
      <View>
        <Controller
          control={control}
          rules={{
            minLength: 6,
            required: true,
          }}
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
        {errors.password && <Text>This is required.</Text>}

      </View>
      <View>
        <Controller
          control={control}
          rules={{
            required: true,
            minLength: 6,
          }}
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
        {errors.repeatPassword && <Text>This is required.</Text>}
      </View>
      <Button
        title={"Registrarse"}
        containerStyle={style.btn}
        onPress={() => { alert("registro exitoso") }}
        buttonStyle={style.btnStyle}
        onPress={handleSubmit(onSubmit)}
        sub
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