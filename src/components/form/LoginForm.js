import React, { useState } from 'react'
import { View, StyleSheet,Text } from 'react-native-web'
import { Button, Input, Icon } from 'react-native-elements'
import { useForm, Controller } from "react-hook-form";
import { formLoginSchema } from '../../helpers/validators'
import { yupResolver } from '@hookform/resolvers/yup';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Loading from '../Loading';
import { useNavigation } from '@react-navigation/native'

export default function LoginForm() {
    const [toggle, setToggle] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const auth = getAuth();
    const navigation = useNavigation()
    const [error, setError] = useState(false)
    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            email: "",
            password: ""
        },
        resolver: yupResolver(formLoginSchema)
    })
   
    const  onSubmit =  async data => {
        try {
           
          setIsLoading(true)
          const user = await signInWithEmailAndPassword(auth, data.email,data.password)
          setError(false)
          navigation.navigate('userLogged')
        } catch (error) {
            setIsLoading(false)
            setError(true)
            
        }finally{
            setIsLoading(false)

        }
    };

    return (
        <View style={style.formContainer}>
            <View>
                <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (

                        <Input
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            placeholder='Correo electronico'
                            containerStyle={style.inputLogin}
                            rightIcon={
                                < Icon
                                    type='material-community'
                                    name='at'
                                    iconStyle={style.icon}
                                />
                            }
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
                            password={true}
                            secureTextEntry={!toggle && true}
                            containerStyle={style.inputLogin}
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
            <Button
                title={"Iniciar sesion"}
                containerStyle={style.btn}
                style={style.btnLoginStyle}
                onPress={handleSubmit(onSubmit)}
            />
            {error && <Text>Error en la cuenta o contraseña</Text>}
            <Loading text="Iniciando Sesion" Isvisibe={isLoading}/>

        </View>
    )
}
const style = StyleSheet.create({
    formContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30
    },
    inputLogin: {
        width: "100%",
        marginTop: 20,
    },
    btnLogin: {
        marginTop: 20,
        width: "95%"

    },
    btnLoginStyle: {
        backgroundColor: "#00a680"
    },
    icon: {
        color: "#c1c1c1",

    }
})