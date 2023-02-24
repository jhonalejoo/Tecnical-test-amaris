import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors, fontFamily } from '../../../utils/constants'
import FastImage from 'react-native-fast-image'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { baseUrlImage } from '../../../utils/env';
import IconAwesome from 'react-native-vector-icons/FontAwesome5';

const RecentItem = ({item,index,navigation,action}) => {
  return (
    <View style={styles.container} index={index}>
       <FastImage style={styles.image} source={{uri:`${baseUrlImage}${item.backdrop_path}`}}/>
       <Text style={styles.title}>{item.name}</Text>
       <Text style={styles.subTitle}>3 episodes of 20</Text>
       <TouchableOpacity onPress={()=>action(item)} style={{flexDirection:'row',alignItems:'center',alignSelf:'flex-end',marginVertical:hp(3)}}>
       <Text style={styles.textGo}>Go to view</Text>
       <IconAwesome
                        size={wp(4)}
                        style={{ marginLeft: wp(2) }}
                        name={'chevron-right'}
                        color={colors.yellow}
                        onPress={() => navigation.navigate('InitView')}
                    />
       </TouchableOpacity>
       <View style={styles.divider}></View>
    </View>
  )
}

export default RecentItem

const styles = StyleSheet.create({
    title:{
     fontFamily:fontFamily.fontFamilyBold,
     color:colors.white,
     fontSize:wp(7),
     marginVertical:hp(3)
    },
    divider: {
        backgroundColor: colors.gray,
        height: hp(0.1),
        width:wp(80),
        marginBottom:hp(3)
    },
    subTitle:{
       fontFamily:fontFamily.fontFamilyRegular,
       color:colors.gray,
       fontSize:wp(4)
    }, 
    textGo:{
       color:colors.yellow,
       fontSize:wp(5)
    },
    container:{
      marginVertical:hp(1),
      alignSelf:'center',
      alignItems:'center'
    },
    image:{
      width:wp (80),
      height:wp(80),
      borderRadius:wp(2) 
    }
})