import { View, Text,StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors, fontFamily } from '../../../utils/constants';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const ButtonPrincipal = (props) => {
  return (
    <TouchableOpacity onPress={()=>props.action()} style={{...styles.button,width:wp(props.width),height:hp(props.height),backgroundColor:props.backgroundColor}}>
      <Text style={styles.titleText}>{props.title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    button:{
        alignItems:'center',
        width:wp(45),
        height:hp(4.5),
        justifyContent:'center',
        borderRadius:wp(4),
    },
    titleText:{
        color:colors.black,
        fontFamily:fontFamily.fontFamilyBold,
        fontSize:wp(4)
    }

  });
export default ButtonPrincipal