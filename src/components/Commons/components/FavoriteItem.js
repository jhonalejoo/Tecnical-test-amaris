import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { colors, fontFamily } from '../../../utils/constants'
import FastImage from 'react-native-fast-image'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import StarRating from 'react-native-star-rating-widget';
import { baseUrlImage } from '../../../utils/env';
import ButtonPrincipal from '../Buttons/ButtonPrincipal'
import IconAwesome from 'react-native-vector-icons/FontAwesome5';


const FavoriteItem = ({ index, item, addFavorite, favorite, color }) => {

  const [rating, setRating] = useState(0);

  return (
    <View>
      <TouchableOpacity style={styles.container} index={index}>
        <FastImage style={styles.image} source={{ uri: `${baseUrlImage}${item.backdrop_path}` }} />
        <View style={{ marginLeft: wp(6) }}>
          <Text style={styles.title}>{item.name}</Text>
          <StarRating
            starSize={wp(3.5)}
            index={index}
            rating={item.vote_average / 2}
            onChange={setRating}
            enableHalfStar={false}
            style={{ marginLeft: -wp(2), marginTop: hp(1) }}
            enableSwiping={false}
            starStyle={{ marginRight: wp(-1) }}
            color={colors.gray}
          />
          <Text style={styles.subTitle}>{`IMDb: ${item.vote_average}`}</Text>
          <View style={{ position: 'absolute', width: wp(45), flexDirection: 'row', justifyContent: 'space-between', bottom: 0 }}>
            <ButtonPrincipal width={35} height={4} title='Watch Now' backgroundColor={colors.yellow} />
            <IconAwesome
              size={wp(6)}
              name={'heart'}
              solid={favorite ? true : false}
              light={!favorite}
              color={color ? color : colors.white}
              onPress={() => addFavorite(item)}
            />
          </View>
        </View>
      </TouchableOpacity>
      <View style={styles.divider}></View>
    </View>

  )
}

export default FavoriteItem;

const styles = StyleSheet.create({
  title: {
    fontFamily: fontFamily.fontFamilyRegular,
    color: colors.white,
    width: wp(30),
    fontSize: wp(4.5),
    marginTop: hp(1),
    marginBottom: hp(1)
  },
  divider: {
    backgroundColor: colors.gray,
    height: hp(0.1),
    width: wp(88),
    marginTop: hp(1)
  },
  subTitle: {
    fontFamily: fontFamily.fontFamilyRegular,
    color: colors.white,
    fontSize: wp(3),
    marginTop: hp(2),
    marginBottom: hp(1)
  },
  container: {
    marginVertical: hp(2),
    flexDirection: 'row',
    height: wp(40),
  },
  image: {
    width: wp(35),
    height: wp(40),
    borderRadius: wp(2)
  }
})