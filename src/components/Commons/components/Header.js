import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import IconAwesome from 'react-native-vector-icons/FontAwesome5';
import { colors, fontFamily } from '../../../utils/constants';

const Header = ({ title }) => {
    return (
        <View style={styles.header}>
            <Text style={styles.textHeader}>{title}</Text>
            <IconAwesome
                style={styles.iconHeader}
                size={wp(6)}
                name={'cog'}
                color={colors.white}
                onPress={() => props.navigation.navigate('InitView')}
            />
        </View>

    )
}

export default Header

const styles = StyleSheet.create({
    textHeader: {
        fontFamily: fontFamily.fontFamilyRegular,
        color: colors.white,
        fontSize: wp(5),
    },
    iconHeader: {
        position: 'absolute',
        right: wp(10)
    },
    header: {
        marginTop: hp(8),
        flexDirection: 'row',
        justifyContent: 'center'
    },
})