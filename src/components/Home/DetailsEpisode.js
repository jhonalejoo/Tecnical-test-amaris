import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { colors, fontFamily } from '../../utils/constants';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import BackHeader from '../Commons/components/BackHeader';
import ButtonPrincipal from '../Commons/Buttons/ButtonPrincipal';
import IconAwesome from 'react-native-vector-icons/FontAwesome5';
import FastImage from 'react-native-fast-image'
import { baseUrlImage } from '../../utils/env'
import { addFavorite, focusEpisode, removeFavorite } from '../../state/features/movie/reducers';


const DetailsEpisode = ({ navigation }) => {
    const dispatch = useDispatch();
    const favorites = useSelector(state => state.movie.favorites)
    const focusSerie = useSelector((state) => state.movie.serie);
    const seasonState = useSelector(state => state.movie.getSeasons);
    const episode = useSelector(state => state.movie.episode);


    useEffect(() => {
        if (seasonState.season?.id) {
            dispatch(focusEpisode(seasonState.season.episodes.length > 0 ? seasonState.season.episodes[0] : {}))
        }
    }, [seasonState.season])

    const handleFavorite = (item) => {
        if (favorites.find((favorite) => favorite.id === item.id)) {
            dispatch(removeFavorite(item))
        } else {
            dispatch(addFavorite(item))
        }
    }
    const handleNextEpisode = () => {
        if (episode.episode_number !== seasonState.season.episodes.length) {
            dispatch(focusEpisode(seasonState.season.episodes[episode.episode_number]))
        }
    }
    const handleBackEpisode = () => {
            dispatch(focusEpisode(seasonState.season.episodes[episode.episode_number-2]))
    }

    return (
        <View style={styles.container}>
            <ScrollView style={styles.containerDetails}>
                <BackHeader favorite={favorites.find((favorite) => favorite.id === focusSerie.id)} icon item={focusSerie} action={handleFavorite} title={focusSerie.name} navigation={navigation} />
                {episode?.id ?
                    <View style={{ marginTop: hp(4) }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={styles.text}>{`${episode.episode_number} Episode`}</Text>
                            <View style={{ flexDirection: 'row' }}>
                                {
                                    episode.episode_number !==1 &&
                                    <TouchableOpacity onPress={() => handleBackEpisode()} style={{ flexDirection: 'row', marginRight: wp(3) }}>
                                        <IconAwesome
                                            size={wp(4.5)}
                                            style={{ marginRight: wp(2) }}
                                            name={'chevron-left'}
                                            color={colors.white}
                                            onPress={() => navigation.goBack()}
                                        />
                                        <Text style={styles.text}>{`Back`}</Text>
                                    </TouchableOpacity>
                                }
                                <TouchableOpacity onPress={() => handleNextEpisode()} style={{ flexDirection: 'row' }}>
                                    <Text style={styles.text}>{`Next`}</Text>
                                    <IconAwesome
                                        size={wp(4.5)}
                                        style={{ marginLeft: wp(2) }}
                                        name={'chevron-right'}
                                        color={colors.white}
                                        onPress={() => navigation.goBack()}
                                    />
                                </TouchableOpacity>
                            </View>

                        </View>
                        {
                            episode?.still_path ?
                                <FastImage style={styles.image} source={{ uri: `${baseUrlImage}${episode.still_path}` }} />
                                :
                                <View style={styles.noImage} />
                        }
                        <Text style={styles.title}>{focusSerie.name}</Text>
                        <Text style={styles.subTitle}>{`IMDb: ${focusSerie.vote_average} | ${focusSerie?.first_air_date ? new Date(focusSerie?.first_air_date).getFullYear() : ''} |  1 season`}</Text>
                        <View style={styles.divider}></View>
                        <Text style={styles.subTitle}>{episode.overview}</Text>
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
                    :
                    <>
                    </>

                }
            </ScrollView>

        </View>
    )
}

export default DetailsEpisode

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: colors.black,
    },
    containerDetails: {
        marginTop: hp(10),
        paddingHorizontal: wp(6)
    },
    divider: {
        backgroundColor: colors.gray,
        height: hp(0.1),
        width: wp(88),
        marginTop: hp(1)
    },
    noImage: {
        width: wp(88),
        height: wp(50),
        backgroundColor: 'black',
        borderRadius: wp(2)
    },
    image: {
        width: wp(88),
        height: wp(50),
        alignSelf: 'center',
        borderRadius: wp(2)
    },
    title: {
        fontFamily: fontFamily.fontFamilyBold,
        color: colors.white,
        fontSize: wp(8),
        marginTop: hp(8),
        marginBottom: hp(1)
    },
    subTitle: {
        fontFamily: fontFamily.fontFamilyRegular,
        color: colors.white,
        fontSize: wp(3.5),
        marginTop: hp(2),
        marginBottom: hp(4)
    },
    text: {
        fontFamily: fontFamily.fontFamilyBold,
        color: colors.white,
        fontSize: wp(4.5),
        marginBottom: hp(2)
    },
    playIcon: {
        position: 'absolute'
    },
    play: {
        top: wp(30),
        right: wp(40),
        width: wp(10),
        height: wp(10),
        borderRadius: wp(5),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.yellow,
        position: 'absolute'
    },
})