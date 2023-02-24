import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import FastImage from 'react-native-fast-image'
import { baseUrlImage } from '../../../utils/env';
import { colors, fontFamily } from '../../../utils/constants';
import IconAwesome from 'react-native-vector-icons/FontAwesome5';

const DetailsRecentItem = ({ item, index }) => {
    return (
        <View style={styles.container} index={index}>
           
            <Text style={styles.text}>{`${index + 1} Episode`}</Text>
            {
                item.still_path ?
                    <FastImage style={styles.image} source={{ uri: `${baseUrlImage}${item.still_path}` }} />
                    :
                    <View style={styles.noImage}>

                    </View>
            }
            <View style={styles.divider}></View>
            <View style={styles.play}>
            <IconAwesome
                        size={wp(2)}
                        style={styles.playIcon}
                        name={'play'}
                        solid
                        color={'black'}
                    />
            </View>
        </View>
    )
}

export default DetailsRecentItem

const styles = StyleSheet.create({
    container: {
        marginTop: hp(2),
    },
    playIcon:{
        position:'absolute'
    },
    play:{
        top:wp(30),
        right:wp(40),
        width:wp(10),
        height:wp(10),
        borderRadius:wp(5),
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:colors.yellow,
        position:'absolute'
    },
    noImage:{
        width: wp(88),
        height: wp(50),
        backgroundColor:'black',
        borderRadius: wp(2)
    },
    divider: {
        backgroundColor: colors.gray,
        height: hp(0.1),
        width: wp(60),
        marginVertical: hp(3),
        alignSelf:'center'
    },
    text: {
        fontFamily: fontFamily.fontFamilyBold,
        color: colors.white,
        fontSize: wp(4.5),
        marginBottom: hp(2)
    },
    image: {
        width: wp(88),
        height: wp(50),
        alignSelf: 'center',
        borderRadius: wp(2)
    }
})