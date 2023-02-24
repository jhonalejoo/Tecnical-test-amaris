import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors, fontFamily } from '../../../utils/constants'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import IconAwesome from 'react-native-vector-icons/FontAwesome5';
import { Icon } from 'react-native-vector-icons/Icon';

const BackHeader = ({ title, navigation, icon,item,action,favorite}) => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection:'row'}}>
      <IconAwesome
        size={wp(4.5)}
        style={{ marginRight: wp(5) }}
        name={'chevron-left'}
        color={colors.white}
        onPress={() => navigation.goBack()}
      />
      <Text style={styles.text}>{title}</Text>
      </View>
     
      {
        icon &&
        <IconAwesome
          size={wp(5)}
          name={'heart'}
          style={{ alignSelf: 'flex-end' }}
          solid={favorite ? true : false}
          light={!favorite}
          color={colors.white}
          onPress={() => action(item)}
        />
      }
    </View>
  )
}

export default BackHeader

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent:'space-between'
  },
  text: {
    fontFamily: fontFamily.fontFamilyRegular,
    color: colors.white,
    fontSize: wp(4.5)
  }
})