import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors, fontFamily } from '../../../utils/constants'
import FastImage from 'react-native-fast-image'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import StarRating from 'react-native-star-rating-widget';
import { baseUrlImage } from '../../../utils/env';


const Popular = ({index,item,action}) => {

   
  return (
    <TouchableOpacity onPress={()=>action(item)} style={styles.container} index={index}>
      <FastImage style={styles.image} source={{uri:`${baseUrlImage}${item.backdrop_path}`}}/>
      <Text style={styles.title}>{item.name}</Text>
      <StarRating
      starSize={wp(3.5)}
      index={index}
      rating={item.vote_average/2}
      onChange={()=>{}}
      enableHalfStar={false}
      enableSwiping={false}
      starStyle={{marginRight:wp(-1)}}
      color={colors.gray}
      />
    </TouchableOpacity>
  )
}

export default Popular

const styles = StyleSheet.create({
    title:{
     fontFamily:fontFamily.fontFamilyRegular,
     color:colors.white,
     width:wp(30),
     fontSize:wp(4.5),
     marginTop:hp(1),
     marginBottom:hp(1)
    },
    container:{
      marginRight:wp(6)
    },
    image:{
      width:wp (35),
      height:wp(45),
      borderRadius:wp(2) 
    }
})