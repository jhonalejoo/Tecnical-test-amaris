import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {useSelector,useDispatch } from 'react-redux';
import { colors, fontFamily } from '../../utils/constants';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import BackHeader from '../Commons/components/BackHeader';
import ButtonPrincipal from '../Commons/Buttons/ButtonPrincipal';
import FastImage from 'react-native-fast-image'
import StarRating from 'react-native-star-rating-widget';
import {baseUrlImage} from '../../utils/env'
import { getSeasonsAttempt } from '../../state/features/movie/reducers';


const DetailsSerie = ({ navigation }) => {
    const dispatch = useDispatch();
    const focusSerie = useSelector((state) => state.movie.serie);

    const handleGetEpisodes =()=>{
        dispatch(getSeasonsAttempt({tvId:focusSerie.id,seasonNumber:1}))
        navigation.navigate('DetailsEpisode')
    }

    return (
        <View style={styles.container}>
            <View style={styles.containerDetails}>
                <BackHeader title={'Popular'} navigation={navigation} />
                {focusSerie?.id
                 ?
                 <View style={{alignSelf:'center',marginTop:hp(5)}}>
                 <FastImage style={styles.image} source={{ uri: `${baseUrlImage}${focusSerie.backdrop_path}` }} />
                 <View style={{alignItems:'center',marginTop:hp(5)}}>
                     <Text style={styles.title}>{focusSerie.name}</Text>
                     <StarRating
                         starSize={wp(5)}
                         rating={focusSerie.vote_average / 2}
                         onChange={()=>{}}
                         enableHalfStar={false}
                         style={{ marginLeft: -wp(2), marginTop: hp(1) }}
                         enableSwiping={false}
                         starStyle={{ marginRight: wp(-1) }}
                         color={colors.gray}
                     />
                     <Text style={styles.subTitle}>{`IMDb: ${focusSerie.vote_average}`}</Text>
                      <ButtonPrincipal action={handleGetEpisodes} width={45} height={5} title='Watch Now' backgroundColor={colors.yellow} />
                 </View>
             </View>
                 :
                 <>
                 </>
                }
            </View>
        </View>
    )
}

export default DetailsSerie

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: colors.black,
    },
    containerDetails: {
        marginTop: hp(10),
        paddingHorizontal: wp(5)
    },
    title: {
        fontFamily: fontFamily.fontFamilyBold,
        color: colors.white,
        fontSize: wp(8),
        marginTop: hp(1),
        marginBottom: hp(1)
      },
      subTitle: {
        fontFamily: fontFamily.fontFamilyRegular,
        color: colors.white,
        fontSize: wp(4),
        marginTop: hp(2),
        marginBottom: hp(2)
      },
      image: {
        width: wp(75),
        height: hp(40),
        borderRadius: wp(2)
      }
})