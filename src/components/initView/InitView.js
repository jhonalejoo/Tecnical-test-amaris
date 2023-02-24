import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { colors, fontFamily } from '../../utils/constants';
import ButtonPrincipal from '../Commons/Buttons/ButtonPrincipal';
import IconAwesome from 'react-native-vector-icons/FontAwesome5';

const InitView = (props) => {
    const [showLogin, setShowLogin] = useState(false);
    const [name, onChangeName] = useState('maria');
    const [password, onChangePassword] = useState('password');
    const [error,setError]=useState('');

    const handleShowLogin = () => {
        setShowLogin(!showLogin)
    }
    const handleSubmit=()=>{
        if(name && password){
          if((name ==='maria' && password ==='password') || (name ==='pedro' && password ==='123456')){
            props.navigation.navigate('Tab')
            setError('')
          }else{
            setError('Credenciales incorrectas')
          } 
        }else{
           setError('Debe ingresar todos los datos')
        }
    }
    return (
        <ImageBackground style={styles.container} source={require('../../../assets/images/login.jpg')}>
            <Text style={styles.titleText}>Welcome!</Text>
            {
                showLogin ?
                    <View style={styles.containerInput}>
                        <View style={{ position: 'absolute', right: wp(7) }}>
                            <IconAwesome
                                size={wp(6)}
                                name={'times'}
                                color={colors.gray}
                                onPress={handleShowLogin}
                            />
                        </View>
                        <View>
                            <TextInput
                                placeholder="Name"
                                value={name}
                                onChangeText={onChangeName}
                                placeholderTextColor={colors.gray}
                                style={styles.textInput}
                            />
                            <TextInput
                                placeholder="Password"
                                value={password}
                                onChangeText={onChangePassword}
                                placeholderTextColor={colors.gray}
                                secureTextEntry={true}
                                style={styles.textInput}
                            />
                         {
                            error ?
                            <Text testID='error-login-text' style={styles.textError}>{error}</Text>
                            :
                            <></>
                         }   
                        </View>
                        <ButtonPrincipal action={handleSubmit} width={45} height={5} title='Log in' backgroundColor={colors.white} />
                    </View>
                    :
                    <View style={styles.containerButton}>
                        <ButtonPrincipal width={45} height={5} title='Sign up' backgroundColor={colors.yellow} />
                        <ButtonPrincipal action={handleShowLogin} width={45} height={5} title='Log in' backgroundColor={colors.white} />
                        <TouchableOpacity>
                            <Text style={styles.forgotText}>Forgot password?</Text>
                        </TouchableOpacity>
                    </View>
            }

        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    containerButton: {
        height: hp(20),
        justifyContent: 'space-evenly'
    },
    textError:{
        color:'red',
        fontFamily:fontFamily.fontFamilyBold,
        marginTop:hp(1),
        marginLeft:wp(4)
    },
    textInput: {
        height: hp(5),
        width: wp(90),
        color: colors.gray,
        fontSize: wp(4),
        margin: hp(2),
        borderBottomWidth: 1,
        fontFamily: fontFamily.fontFamilyRegular,
        borderColor: colors.gray,
    },
    containerInput: {
        position: 'absolute',
        backgroundColor: 'rgba(20, 20, 20, 0.8)',
        bottom: 0,
        width: wp(100),
        height: hp(50),
        paddingVertical: hp(5),
        alignItems: 'center',
        borderRadius: wp(8),
        justifyContent: 'space-around'
    },
    forgotText: {
        fontFamily: fontFamily.fontFamilyRegular,
        fontSize: wp(4),
        color: colors.white,
        textDecorationLine: "underline",
        alignSelf: 'center'
    },
    titleText: {
        color: colors.white,
        position: 'absolute',
        top: hp(15),
        fontFamily: fontFamily.fontFamilyBold,
        fontSize: wp(6)
    }

});

export default InitView;